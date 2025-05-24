import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import CanvasLoader from '../components/General/CanvasLoader'
import { PerspectiveCamera } from '@react-three/drei'
import RetroComputer from '../components/RetroComputer'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import VoxelRobot from '../components/VoxelRobot'
import VoxelMug from '../components/VoxelMug'
import HeroCamera from '../components/Hero/HeroCamera'
import Button from '../components/General/Button'
import StringAnimate from '../components/Hero/StringAnimate'

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 639 })
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1280 }) //1024

  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <StringAnimate />

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />

            <HeroCamera isMobile={isMobile}>
              <RetroComputer
                scale={sizes.computerScale}
                position={sizes.computerPosition}
                rotation={[0, 3.46, 0]}
              />
            </HeroCamera>

            <group>
              <VoxelMug
                position={sizes.mugPosition}
                scale={sizes.mugScale}
                rotation={[0.1, 1.8, 0]}
              />
              <VoxelRobot position={sizes.robotPosition} scale={sizes.robotScale} />
            </group>
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  )
}

export default Hero
