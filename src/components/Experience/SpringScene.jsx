import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const SpringScene = ({
  butterflyCount = 18,
  butterflyImages = ['assets/butterfly1.png', 'assets/butterfly2.png', 'assets/butterfly3.png'],
}) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const butterflies = Array.from(container.querySelectorAll('.butterfly'))

    butterflies.forEach((butterfly) => {
      const duration = 10 + Math.random() * 10
      const delay = Math.random() * 5
      const xMove = (Math.random() - 0.5) * 300
      const yMove = (Math.random() - 0.5) * 200
      const scale = 0.6 + Math.random() * 0.4

      gsap.set(butterfly, {
        x: Math.random() * container.clientWidth,
        y: Math.random() * container.clientHeight,
        scale,
        rotation: 0,
      })

      gsap.to(butterfly, {
        x: `+=${xMove}`,
        y: `+=${yMove}`,
        rotation: (Math.random() - 0.5) * 30,
        duration,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay,
      })

      //   gsap.to(butterfly, {
      //     scaleX: 0.9,
      //     scaleY: 1.1,
      //     duration: 0.3,
      //     repeat: -1,
      //     yoyo: true,
      //     ease: 'sine.inOut',
      //   })
    })
  }, [butterflyCount])

  return (
    <div
      className="season-scene-container flex flex-col justify-end"
      style={{
        backgroundImage: "url('assets/spring.png')",
      }}
    >
      <div ref={containerRef} className="w-full h-[70%] overflow-hidden">
        {Array.from({ length: butterflyCount }).map((_, i) => {
          const randomImage = butterflyImages[Math.floor(Math.random() * butterflyImages.length)]
          return (
            <img
              key={i}
              src={randomImage}
              className="butterfly absolute w-[60px] pointer-events-none"
              alt="butterfly"
            />
          )
        })}
      </div>
    </div>
  )
}

export default SpringScene
