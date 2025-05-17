import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import CanvasLoader from '../General/CanvasLoader'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import VoxelWorld from '../VoxelWorld'

const WorldView = () => {
  return (
    <Canvas className="w-full h-full">
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />

        <ambientLight intensity={3} />

        {/* Đèn bên phải */}
        {/* <directionalLight
          position={[10, 0, 0]} 
          intensity={0.7}
          color="white"
        /> */}

        <VoxelWorld position={[0, 0, 0]} scale={2.8} />
        <OrbitControls makeDefault enableZoom={false} enablePan={false} rotateSpeed={0.4} />
      </Suspense>
    </Canvas>
  )
}

export default WorldView
