import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import CanvasLoader from '../components/General/CanvasLoader'
import { PerspectiveCamera } from '@react-three/drei'
import RetroComputer from '../components/RetroComputer'
import { Leva } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import VoxelRobot from '../components/VoxelRobot'
import VoxelMug from '../components/VoxelMug'
import VoxelPluto from '../components/VoxelPluto'
import VoxelReactLogo from '../components/VoxelReactLogo'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/General/Button'

const Hero = () => {
  // const controls = useControls('RetroComputer', {
  //   positionX: {
  //     value: 0,
  //     min: -10,
  //     max: 30,
  //   },
  //   positionY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 4,
  //     min: -10,
  //     max: 10,
  //   },
  // })

  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-5">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Hoang Hao
        </p>
        <p className="hero_tag text-gray_gradient">Front-End Developer</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* controller */}
        <Leva hidden />

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
              <VoxelPluto position={sizes.plutoPosition} scale={sizes.plutoScale} />
              <VoxelReactLogo position={sizes.reactLogoPosition} scale={sizes.reactLogocale} />
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
