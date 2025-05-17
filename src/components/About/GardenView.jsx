import { Canvas } from '@react-three/fiber'
import { Leva, useControls } from 'leva'
import React, { Suspense } from 'react'
import CanvasLoader from '../General/CanvasLoader'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import VoxelFlowers from '../VoxelFlowers'
import VoxelWateringPot from '../VoxelWateringPot'
import VoxelBee from '../VoxelBee'
import { useRef } from 'react'

const GardenView = () => {
  const beeRef = useRef()

  const controls = useControls('RetroComputer', {
    positionX: {
      value: 0,
      min: -10,
      max: 30,
    },
    positionY: {
      value: 0,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationX: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationY: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationZ: {
      value: 0,
      min: -10,
      max: 10,
    },
    scale: {
      value: 4,
      min: -10,
      max: 10,
    },
  })

  return (
    <div
      //className="w-full h-full absolute inset-0"
      className="w-full h-full"
    >
      {/* controller */}
      <Leva />

      <Canvas className="w-full h-full">
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 12]} />
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />

          <group>
            <VoxelFlowers scale={3.5} position={[-5, -4, 0]} />
            <VoxelFlowers scale={3.8} position={[0, -4, 0]} />
            <VoxelFlowers scale={3.4} position={[5, -4, 0]} />
          </group>
          <VoxelWateringPot scale={1.8} position={[14, 6, 0]} targetY={-4} beeRef={beeRef} />
          <VoxelBee ref={beeRef} position={[6, -3.5, -4]} scale={0.75} />

          {/* <OrbitControls makeDefault enableZoom={false} enablePan={false} rotateSpeed={0.4} /> */}
        </Suspense>
      </Canvas>
    </div>
  )
}

export default GardenView
