import { useThree } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import VoxelFlowers from '../VoxelFlowers'
import VoxelWateringPot from '../VoxelWateringPot'
import VoxelBee from '../VoxelBee'
import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { useGesture } from '@use-gesture/react'
import { createDrop } from '../../utils/createDrop'
import { animateBeeFly } from '../../utils/animateBeeFly'
import { useControls } from 'leva'

const GardenScene = () => {
  const { scene, size, viewport, camera } = useThree() // cần có để add/remove drop
  const groupPotRef = useRef()
  const initialGroupPotPos = useRef([7.2, 0.8, 0]) // vị trí gốc

  const pouringInterval = useRef(null)
  const waterDrops = useRef([])

  const beeRef = useRef()
  const initialBeePos = useRef([-6.3, -3, -1.6])
  const [hasBeeFlown, setHasBeeFlown] = useState(false)

  // <---handle pouring functions
  // three.js khi xử lý transparent material và geometry reuse: nếu không dùng useRef để giữ geometry/material, mà tạo mới mỗi lần, thì việc render nhiều mesh với cùng vị trí hoặc cùng material có thể bị xung đột hoặc không render như mong muốn.
  const dropGeometry = useRef(new THREE.BoxGeometry(0.04, 0.28, 0.03))
  const dropMaterial = useRef(
    new THREE.MeshStandardMaterial({
      color: 'skyblue',
      transparent: true,
      opacity: 0.7,
    }),
  )
  const startPouring = () => {
    if (pouringInterval.current) return
    pouringInterval.current = setInterval(() => {
      //Tạo hạt nước chính giữa
      createDrop({
        xOffset: 0,
        scene,
        potRef: groupPotRef,
        waterDropsRef: waterDrops,
        dropGeometry: dropGeometry.current,
        dropMaterial: dropMaterial.current,
        offsetXAdjust: -0.9,
        offsetYAdjust: -0.7,
        groundY: -4,
      })
      //Tạo hạt nước lệch phải
      createDrop({
        xOffset: 0.1,
        scene,
        potRef: groupPotRef,
        waterDropsRef: waterDrops,
        dropGeometry: dropGeometry.current,
        dropMaterial: dropMaterial.current,
        offsetXAdjust: -0.9,
        offsetYAdjust: -0.7,
        groundY: -4,
      })
    }, 100)
  }

  const stopPouring = () => {
    if (pouringInterval.current) {
      clearInterval(pouringInterval.current)
      pouringInterval.current = null
    }
  }
  // handle pouring functions -->

  //<--handle move pot
  const bindGroupPotDrag = useGesture({
    onDrag: ({ offset: [x, y], event }) => {
      event.stopPropagation()
      if (!groupPotRef.current) return

      const aspect = size.width / viewport.width
      const dx = x / aspect
      const dy = -y / aspect
      const newX = initialGroupPotPos.current[0] + dx //world space
      const newY = initialGroupPotPos.current[1] + dy //world space

      //move pot
      gsap.to(groupPotRef.current.position, {
        x: newX,
        y: newY,
        z: initialGroupPotPos.current[2],
        duration: 0.3,
        ease: 'power2.out',
      })

      // check bee
      const beeWorldPos = new THREE.Vector3() //world space
      beeRef.current.getWorldPosition(beeWorldPos)

      const isClose = newX - beeWorldPos.x < 1.6
      console.log('isClose', isClose, { pot: newX, bee: beeWorldPos.x })

      if (isClose && !hasBeeFlown) {
        setHasBeeFlown(true)
        animateBeeFly(beeRef)
      }
    },
    onPointerDown: ({ buttons }) => {
      if (buttons === 1) startPouring()
    },
    onPointerUp: stopPouring,
    onPointerLeave: stopPouring,
  })
  // handle move pot-->

  return (
    <>
      {/* oxyz */}
      <axesHelper args={[5]} />
      <gridHelper args={[10, 10]} />

      <PerspectiveCamera makeDefault position={[0, 0, 12]} />
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={0.5} />

      <group>
        <VoxelFlowers scale={3.5} position={[-5, -4, 0]} />
        <VoxelFlowers scale={3.8} position={[0, -4, 0]} />
        <VoxelFlowers scale={3.4} position={[5, -4, 0]} />
      </group>

      <VoxelWateringPot
        ref={groupPotRef}
        scale={1.5}
        rotation={[0, Math.PI, 0]}
        position={initialGroupPotPos.current}
        {...bindGroupPotDrag()}
      />

      <VoxelBee
        ref={beeRef}
        scale={0.65}
        position={initialBeePos.current}
        rotation={[0.23, 0.75, -0.05]}
        hasBeeFlown={hasBeeFlown}
      />
    </>
  )
}

export default GardenScene
