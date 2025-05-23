import gsap from 'gsap'
import AutumnScene from './AutumnScene'
import SpringScene from './SpringScene'
import SummerScene from './SummerScene'
import { useRef, useState } from 'react'
import WinterScene from './WinterScene'

const RightSection = ({
  scenes = [<SpringScene />, <SummerScene />, <AutumnScene />, <WinterScene />],
}) => {
  const circleRef = useRef(null)
  const rotationRef = useRef(0)

  const [sceneIndex, setSceneIndex] = useState(0)

  const handleClick = () => {
    const nextIndex = (sceneIndex + 1) % scenes.length

    rotationRef.current -= 90
    gsap.to(circleRef.current, {
      rotation: rotationRef.current,
      duration: 0.5,
      ease: 'power2.inOut',
    })

    setTimeout(() => {
      setSceneIndex(nextIndex)
    }, 500)
  }
  return (
    <div className="w-full h-full min-h-[320px] relative">
      <div className="absolute inset-0 z-0">{scenes[sceneIndex]}</div>

      <div
        className="absolute top-0 right-0 -translate-x-1/4 translate-y-1/4 cursor-pointer opacity-90"
        onClick={handleClick}
      >
        <div className="relative z-3 w-[50px] h-[50px]">
          <img
            ref={circleRef}
            src="/assets/door_circle.png"
            className="w-full absolute top-0 origin-center border border-white rounded-full"
            alt="door_circle"
          />
          <img
            src="/assets/door_arrow.png"
            className="w-full absolute top-0 -translate-y-1/2"
            alt="door_arrow"
          />
        </div>
      </div>
    </div>
  )
}

export default RightSection
