import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const WinterScene = ({ count = 60 }) => {
  const containerRef = useRef(null)
  const animationsRef = useRef([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const snowflakes = Array.from(container.children)

    animationsRef.current = snowflakes.map((flake) => {
      const delay = Math.random() * 5
      const duration = 5 + Math.random() * 5
      const x = Math.random() * container.clientWidth

      gsap.set(flake, {
        x,
        y: -20,
        opacity: Math.random() * 0.5 + 0.5,
        scale: Math.random() * 0.5 + 0.5,
      })

      return gsap.to(flake, {
        y: container.clientHeight + 20,
        x: x + (Math.random() - 0.5) * 100,
        duration,
        repeat: -1,
        ease: 'none',
        delay,
      })
    })

    //Observer theo dõi phần tử hiển thị
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animationsRef.current.forEach((tween) => tween.resume())
        } else {
          animationsRef.current.forEach((tween) => tween.pause())
        }
      },
      {
        threshold: 0.1, // 10% visible run again
      },
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
      className="season-scene-container"
      style={{
        backgroundImage: "url('assets/winter.png')",
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="snow-class" />
      ))}
    </div>
  )
}

export default WinterScene
