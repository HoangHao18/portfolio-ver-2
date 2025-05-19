import * as THREE from 'three'
import gsap from 'gsap'

export const createDrop=({
  xOffset = 0,
  scene,
  potRef,
  waterDropsRef,
  dropGeometry,
  dropMaterial,
  offsetXAdjust = 0,
  offsetYAdjust = 0,
  groundY=0
})=> {
  if (!potRef.current) return

  // Lấy vị trí vòi tưới trong world, rồi convert về local của scene
  const nozzleWorldPos = new THREE.Vector3()
  potRef.current.getWorldPosition(nozzleWorldPos)

  const drop = new THREE.Mesh(dropGeometry, dropMaterial)

  drop.position.set(
    nozzleWorldPos.x + xOffset + offsetXAdjust,
    nozzleWorldPos.y + offsetYAdjust,
    nozzleWorldPos.z
  )

  scene.add(drop)
  waterDropsRef.current.push(drop)

  gsap.to(drop.position, {
    y: groundY,
    duration: 0.25,
    ease: 'power1.in',
    onComplete: () => {
      scene.remove(drop)
      drop.geometry.dispose()
      drop.material.dispose()
      waterDropsRef.current = waterDropsRef.current.filter((d) => d !== drop)
    },
  })
}
