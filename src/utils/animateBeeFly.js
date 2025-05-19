import gsap from "gsap"

export const animateBeeFly = (beeRef) => {
  const tl = gsap.timeline()

  // 1. Bay lên nhẹ, dao động nhẹ trái phải
  tl.to(beeRef.current.position, {
    y: beeRef.current.position.y + 3,
    x: beeRef.current.position.x - 1,
    duration: 1,
    ease: 'power1.inOut',
  })

  // 2. Bay lên cao hơn và sang trái
  tl.to(beeRef.current.position, {
    y: beeRef.current.position.y + 4,
    x: beeRef.current.position.x - 1.5,
    duration: 1.5,
    ease: 'power1.inOut',
  })

  // 3. Bay lên khỏi màn hình (ra xa camera)
  tl.to(beeRef.current.position, {
    y: beeRef.current.position.y + 6,
    x: beeRef.current.position.x - 3,
    z: beeRef.current.position.z - 1.5,
    duration: 2,
    ease: 'power1.in',
  })

  // 4. rotation, giả lập ong xoay người sang phải
  tl.to(beeRef.current.rotation, {
    y: beeRef.current.rotation.y + 0.33,
    duration: 1.2,
    ease: 'power1.inOut',
  })

  // 5. Bay nhanh sang phải ra khỏi màn hình
  tl.to(beeRef.current.position, {
    x: beeRef.current.position.x + 16,
    z: beeRef.current.position.z - 2,
    duration: 12,
    ease: 'power1.in',
  })

  // 6. 
  tl.to(beeRef.current.rotation, {
    y: beeRef.current.rotation.y - 0.35,
    duration: 1,
    ease: 'power1.inOut',
  })

  //7.
  tl.to(beeRef.current.rotation, {
    y: beeRef.current.rotation.y + 0.33,
    duration: 0.8,
    ease: 'power1.inOut',
  })

  // 8. Bay tiếp gần camera và sang phải
  tl.to(beeRef.current.position, {
    x: beeRef.current.position.x + 25,
    z: beeRef.current.position.z - 2,
    duration: 2.8,
    ease: 'power1.in',
  })
}
