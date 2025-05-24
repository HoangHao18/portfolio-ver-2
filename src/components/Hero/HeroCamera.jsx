import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { easing } from 'maath'
import * as THREE from 'three'

const HeroCamera = ({ isMobile, children }) => {
  const group = useRef()

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta)

    if (!isMobile) {
      // Giới hạn phạm vi pointer x/y
      const px = THREE.MathUtils.clamp(state.pointer.x, -0.2, 0.2)
      const py = THREE.MathUtils.clamp(state.pointer.y, -0.5, 0.5)
      easing.dampE(group.current.rotation, [-py / 8, -px / 2, 0], 0.25, delta)
    }
  })

  return <group ref={group}>{children}</group>
}

export default HeroCamera
