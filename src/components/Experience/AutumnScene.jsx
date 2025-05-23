import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const AutumnScene = ({ count = 40 }) => {
  const containerRef = useRef(null)
  const animationsRef = useRef([])

  const leafImages = [
    'assets/leaf1.png',
    'assets/leaf2.png',
    'assets/leaf3.png',
    'assets/leaf4.png',
    'assets/leaf5.png',
    'assets/leaf6.png',
  ]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const leaves = Array.from(container.children)

    animationsRef.current = leaves.map((leaf) => {
      const startX = Math.random() * container.clientWidth
      const endX = startX + (Math.random() - 0.5) * 100
      const delay = Math.random() * 5
      const duration = 6 + Math.random() * 6

      gsap.set(leaf, {
        x: startX,
        y: -40,
        scale: 0.5 + Math.random() * 0.5,
        rotation: 0,
        opacity: 0.8 + Math.random() * 0.2,
      })

      return gsap.to(leaf, {
        y: container.clientHeight + 40,
        x: endX,
        rotation: (Math.random() - 0.5) * 180,
        duration,
        ease: 'power1.inOut',
        delay,
        repeat: -1,
      })
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animationsRef.current.forEach((tween) => tween.resume())
        } else {
          animationsRef.current.forEach((tween) => tween.pause())
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
      animationsRef.current.forEach((tween) => tween.kill())
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="season-scene-container relative overflow-hidden"
      style={{
        backgroundImage: "url('assets/autumn.png')",
      }}
    >
      {Array.from({ length: count }).map((_, i) => {
        const randomLeaf = leafImages[Math.floor(Math.random() * leafImages.length)]
        return (
          <img
            key={i}
            src={randomLeaf}
            className="absolute w-[30px] pointer-events-none"
            alt="leaf"
          />
        )
      })}
    </div>
  )
}

export default AutumnScene
