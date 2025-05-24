import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const StringAnimate = () => {
  const [flipped, setFlipped] = useState(false)
  const flipRef = useRef(null)
  const imgWrapperRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      // Step 1: Spin image
      gsap.to(imgWrapperRef.current, {
        rotation: 360,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          // Reset rotation to 0 instantly (for next loop)
          gsap.set(imgWrapperRef.current, { rotation: 0 })
          // Step 2: Flip container
          setFlipped((prev) => !prev)
        },
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Flip between image and "o"
    gsap.to(flipRef.current, {
      rotateY: flipped ? 180 : 0,
      duration: 0.6,
      ease: 'power2.inOut',
    })
  }, [flipped])

  return (
    <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-5">
      <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
        Hi, I am Hoang Hao
      </p>

      <p className="hero_tag text-gray_gradient">
        Fr
        <span className="animate_text">
          <span
            ref={flipRef}
            className="w-full h-full absolute top-0 left-0 transition-transform duration-70"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Front - Image */}
            <span
              className="absolute w-full h-full flex items-center justify-center"
              style={{
                backfaceVisibility: 'hidden',
              }}
              ref={imgWrapperRef}
            >
              <img src="/assets/gsap.png" alt="gsap-o" className="w-full h-full object-contain" />
            </span>

            {/* Back - Letter O */}
            <span
              className="absolute w-full h-full flex items-center justify-center"
              style={{
                transform: 'rotateY(180deg)',
                backfaceVisibility: 'hidden',
              }}
            >
              <span className="hero_tag text-gray_gradient">o</span>
            </span>
          </span>
        </span>
        ntend Developer
      </p>
    </div>
  )
}

export default StringAnimate
