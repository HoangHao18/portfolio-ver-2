export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    computerPosition: isSmall ? [1.8, -2, 0]: isMobile? [2,-4.5,0] : isTablet? [2.5, -5.5, 0] : [3, -5.5, 0],
    computerScale: isSmall? 2.6 : isMobile ? 3 : isTablet ? 3.5 : 4,

    mugPosition: isSmall ? [-4.5, -5.5, -8] : isMobile ? [-5.8, -9, -10] : isTablet ? [-6.6, -9, -10] :  [-8, -10, -10] ,
    mugScale: isSmall? 0.08 : isMobile ? 0.1 : 0.115,
    
    robotPosition: isSmall ? [4.5, -3.5, 0] : isMobile ? [5.5, -5, 0] : isTablet ? [7, -5.5, 0] : [8.6, -5.5, 0],
    robotScale: isSmall? 0.12 : isMobile ? 0.13 : 0.15,
  };
};

export const aboutInfo = {
  grid1A:"I'm a Front-End Developer with 3+ years of experience building fast, scalable, and user-focused web applications. Passionate about performance optimization, clean code, and seamless user experiences, I excel in collaborative environments and continuously strive for excellence in web development.",
  grid1B: "I’m a Front-End Developer with over 3 years of experience creating fast, scalable, and easy-to-use web apps. I’m really into writing clean code, optimizing performance, and making sure users have a smooth experience. I enjoy working with teams and always look for ways to get better at what I do.",
  grid2: "I have experience building web applications using HTML5, CSS3, JavaScript (ES6+), and TypeScript. Skilled in React.js and modern UI libraries such as Tailwind CSS, Material-UI, Shadcn UI, and Zustand. Familiar with tools like Git, Vite, and Figma."
}

export const contactInfo = {
  gmail: "hoanghao18101999@gmail.com",
  linkedin: "https://www.linkedin.com/in/hoanghao99",
  github: "https://github.com/hoanghao18"
}

export const resumeLink = "/assets/HoangThiHao-Resume.pdf"

export const myProjects = [
  {
    title: 'iPhone 15 Pro 3D Product Showcase',
    desc: 'A faithful recreation of the iPhone 15 Pro product page, inspired by Apple’s style. Combines smooth GSAP animations with interactive 3D visuals using Three.js.',
    subdesc: 'Built with React, Tailwind CSS, GSAP, and React Three Fiber.',
    linkDemo: 'https://apple-website-gules-rho.vercel.app/',
    linkSource: "https://github.com/HoangHao18/apple-website",
    texture: '/textures/iphone_web.mp4',
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'ThreeFiber',
        path: '/assets/threefiber.png',
      },
      //  {
      //   id: 4,
      //   name: 'ThreeDrei',
      //   path: '/assets/threedrei.png',
      // },
       {
        id: 3,
        name: 'GSAP',
        path: '/assets/gsap.png',
      }
    ],
  },
  {
    title: 'PerfumeStore WEB',
    desc: 'A basic e-commerce website UI for selling perfumes, featuring a user-friendly interface. Includes essential functionalities such as product collections, detailed product pages, shopping cart, and user login system to provide efficient online shopping experience.',
    subdesc:"Built with React and scss.",
    linkDemo: 'https://hoanghao18.github.io/DC-UI-PerfumeShop/',
    linkSource: "https://github.com/HoangHao18/DC-UI-PerfumeShop",
    texture: '/textures/perfume_web.mp4',
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'SCSS',
        path: '/assets/scss.png',
      }
    ],
  }

]

export const workExperiences = [
  {
    id: 1,
    name: 'NEXON Dev VINA',
    pos: 'Frontend Developer',
    duration: 'April 2022 - April 2025',
    title: "Developed and maintained back-office systems, including a translation data management website, a translation support platform, and a task management system for QA.",
    icon: '/assets/c_nexon.png'
  }, 
  {
    id: 2,
    name: 'SUMVIET Company',
    pos: 'Frontend Developer Intern',
    duration: 'May 2021 - August 2021',
    title: "Assisted in building front-end components and integration REST APIs for Ecommerce projects.",
    icon: '/assets/c_sumviet.png',

  }]