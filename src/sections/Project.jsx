import { Suspense, useState } from 'react'
import { myProjects } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Canvas } from '@react-three/fiber'
import { Center, Environment, OrbitControls } from '@react-three/drei'
import CanvasLoader from '../components/General/CanvasLoader'
import VoxelComputer from '../components/VoxelComputer'

const Project = () => {
  const projectCount = myProjects.length
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
  const currentProject = myProjects[selectedProjectIndex]

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
      }
    })
  }

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' },
    )
  }, [selectedProjectIndex])

  return (
    <section className="c-space my-20">
      <p className="head-text">My Project</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          {/* pointer-events-none */}
          <div className="absolute top-0 right-0 z-[-1]">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.linkSource}
              target="_blank"
              rel="noreferrer"
            >
              <p>Source</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.linkDemo}
              target="_blank"
              rel="noreferrer"
            >
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-3">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg md:h-full sm1:h-96 h-64">
          <Canvas>
            <ambientLight intensity={0.4} />

            <directionalLight
              position={[5, 10, 5]}
              intensity={1}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />

            <pointLight intensity={0.5} position={[-2, 3, 2]} />

            <Environment preset="apartment" intensity={0.6} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                {/* 4.5 */}
                <group scale={5} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <VoxelComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default Project
