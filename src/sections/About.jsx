import GardenView from '../components/About/GardenScene'
import Button from '../components/General/Button'
import WorldView from '../components/About/WorldView'
import { aboutInfo, resumeLink } from '../constants'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import CanvasLoader from '../components/General/CanvasLoader'
import GardenScene from '../components/About/GardenScene'
import { Leva } from 'leva'

const About = () => {
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I’m Hoang Hao</p>
              <p className="grid-subtext">{aboutInfo.grid1B}</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">{aboutInfo.grid2}</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[370px] h-fit flex justify-center items-center">
              {/* sm:h-[326px] */}
              <WorldView />
            </div>
            <div>
              <p className="grid-headtext">Location</p>
              <p className="grid-subtext">
                I&apos;m based in HCMC, Viet Nam and open to remote work worldwide.
              </p>

              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />

              <Button
                name={
                  <a href={resumeLink} download>
                    Download My CV
                  </a>
                }
                containerClass="w-full mt-6"
              />
            </div>
            {/* <div className="space-y-2 sm:inline hidden">
              <div className="grid-subtext w-full text-center py-2">or</div>
              <CoppyButton text={contactInfo.gmail} />
            </div> */}
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            {/* <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[326px] h-fit object-contain"
            /> */}
            <div className="w-full sm:h-[326px] h-fit border-0 border-[#afb0b6] border-dashed">
              <Leva hidden />
              <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>
                  <GardenScene />
                </Suspense>
              </Canvas>
            </div>

            <div className="space-y-2">
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t
                just my profession—it&apos;s my passion. I enjoy exploring new technologies, and
                enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-contain"
            />

            <div className="space-y-2">
              <p className="grid-headtext">Education</p>
              <p className="grid-subtext">
                <strong>B.Sc. in Information Technology</strong> - Post and Telecommunications
                Institute of Technology University (Grad '23)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
