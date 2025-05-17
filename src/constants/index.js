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
    computerPosition: isSmall ? [1.8, -2, 0]: isMobile? [2,-4,0] : [3, -5.5, 0],
    computerScale: isSmall? 2.5 : isMobile ? 3 : 4,

    plutoPosition: isSmall ? [-4.5, 4, 0] : isMobile ? [-8, 4, 0] : [-13, 4, 0],
    plutoScale: isSmall? 0.03 : isMobile ? 0.035: 0.05,

    reactLogoPosition: isSmall ? [4, 3, 0] : isMobile ? [6, 1, 0] : [12, 3, 0],
    reactLogocale: isSmall? 0.2 : isMobile ? 0.25 : 0.3,

    mugPosition: isSmall ? [-4, -5, -8] : isMobile ? [-5, -10, -10] : [-7, -10, -10] ,
    mugScale: isSmall? 0.08 : isMobile ? 0.1 : 0.115,
    
    robotPosition: isSmall ? [4, -3.5, 0] : isMobile ? [5, -5, 0] : [9, -5.5, 0],
    robotScale: isSmall? 0.12 : isMobile ? 0.13 : 0.15,
  };
};

export const aboutInfo = {
  grid1A:"I'm a Front-End Developer with 3+ years of experience building fast, scalable, and user-focused web applications. Passionate about performance optimization, clean code, and seamless user experiences, I excel in collaborative environments and continuously strive for excellence in web development.",
  grid1B: "I’m a Front-End Developer with over 3 years of experience creating fast, scalable, and easy-to-use web apps. I’m really into writing clean code, optimizing performance, and making sure users have a smooth experience. I enjoy working with teams and always look for ways to get better at what I do.",
  grid2: "I have experience building web applications using HTML5, CSS3, JavaScript (ES6+), and TypeScript. Skilled in React.js and modern UI libraries such as Tailwind CSS, Material-UI, Shadcn UI, and Zustand. Familiar with tools like Git, Vite, and Figma."
}

export const contactInfo = {
  gmail: "hoanghao18101999@gmail.com"
}

export const resumeLink = "/assets/HoangThiHao-Resume.pdf"