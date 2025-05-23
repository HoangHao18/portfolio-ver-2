import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const SummerScene = ({ fireflyCount = 20 }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current

    //create firefly
    for (let i = 0; i < fireflyCount; i++) {
      const firefly = document.createElement('div')
      firefly.className = 'firefly'
      firefly.style.left = `${Math.random() * 100}%`
      firefly.style.top = `${Math.random() * 100}%`
      container.appendChild(firefly)

      animateFirefly(firefly)
    }
  }, [])

  const animateFirefly = (el) => {
    const duration = 4 + Math.random() * 4

    gsap.to(el, {
      x: () => `+=${Math.random() * 100 - 50}`,
      y: () => `+=${Math.random() * 100 - 50}`,
      opacity: () => Math.random() * 0.6 + 0.4,
      scale: () => Math.random() * 0.5 + 0.8,
      duration,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }

  return (
    <div
      className="season-scene-container flex flex-col justify-center"
      style={{
        backgroundImage: "url('assets/summer.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div ref={containerRef} className="h-[65%] overflow-hidden relative"></div>
    </div>
  )
}

export default SummerScene
