// seed portfolio data (JS)
import Logo from "../assets/img/profile/Logo.png";
import { BubbleTea1,BubbleTea2,BubbleTea3,BubbleTea4 } from "../assets/img/projects/bubble-tea";

export const seedData = {
  profile: {
    name: "Ctrl AKE",
    subName:"(Akekaphol Ramkaew)",
    title: "Full-Stack Developer & Automation IOT Engineer",
    bio: "Passionate about crafting Automation system, IOT and Web applications , Performant web experiences that solve real problems. I specialize in React, JavaScript,PLC ,IOT , and web applications.",
    avatarUrl: Logo,
    location: "Songkhla, Thailand",
    socials: [
      { type: "github", url: "https://github.com/akekaphol101" },
      { type: "youtube", url: "https://www.youtube.com/@CtrlAKE" },
      { type: "tiktok", url: "https://www.tiktok.com/@ctrl_ake?is_from_webapp=1&sender_device=pc" },
      { type: "email", url: "mailto:akekaphol1o1@gmail.com" }
    ],
    cvUrl: "/cv.pdf",
    skills: ["React", "JavaScript", "Node.js", "Tailwind CSS", "MongoDB", "PLC Siements", "Siements IoT","PLC Mitsubishi","HMI Samkoon","Node-RED","Arduino Boards"]
  },
  categories: ["Webapp", "Automation", "IOT"],
  tags: ["React", "JavaScript", "Node.js", "Tailwind CSS", "MongoDB", "UI/UX", "Automation", "IOT","Node-RED","Arduino Boards"],
  projects: [
    {
      id: "p-001",
      slug: "ecommerce-dashboard",
      title: "E-Commerce Dashboard",
      year: 2024,
      summary: "Real-time analytics dashboard for tracking KPIs, sales metrics, and customer behavior across multiple channels.",
      cover: "/placeholder.svg",
      gallery: ["/placeholder.svg", "/placeholder.svg"],
      categories: ["Web"],
      tags: ["React", "Vite", "Tailwind", "Charts"],
      techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "Socket.IO"],
      role: "Lead Front-End Developer",
      teamSize: 4,
      status: "Shipped",
      problemMd: "## The Problem\n\nOur client needed a unified view...",
      approachMd: "## Our Approach\n\nWe designed a custom dashboard...",
      outcomeMd: "## The Outcome\n\n✅ 80% reduction in time...",
      links: { demo: "https://demo.example.com", repo: "https://github.com/example/dashboard" },
      featured: true
    },
    {
      id: "p-002",
      slug: "fitness-mobile-app",
      title: "Fitness Tracking Mobile App",
      year: 2024,
      summary: "Cross-platform mobile app...",
      cover: "/placeholder.svg",
      gallery: ["/placeholder.svg"],
      categories: ["Mobile"],
      tags: ["React Native", "Firebase", "AI"],
      techStack: ["React Native", "Expo", "Firebase", "TensorFlow.js"],
      role: "Full-Stack Developer",
      teamSize: 3,
      status: "In Progress",
      problemMd: "## The Problem\n\nFitness enthusiasts struggle...",
      approachMd: "## Our Approach\n\nWe built a streamlined...",
      outcomeMd: "## The Outcome\n\nCurrently in beta testing...",
      links: { repo: "https://github.com/example/fitness" },
      featured: true
    },
    {
      id: "p-003",
      slug: "design-system",
      title: "Corporate Design System",
      year: 2023,
      summary: "Comprehensive design system...",
      cover: "/placeholder.svg",
      gallery: ["/placeholder.svg"],
      categories: ["UI/UX", "Web"],
      tags: ["Design System", "Storybook", "React"],
      techStack: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
      role: "UI Engineer",
      teamSize: 2,
      status: "Shipped",
      problemMd: "## The Problem\n\nInconsistent UI patterns...",
      approachMd: "## Our Approach\n\nCreated a unified design system...",
      outcomeMd: "## The Outcome\n\nAdopted across 15 teams...",
      links: { demo: "https://storybook.example.com", repo: "https://github.com/example/design-system" },
      featured: true
    },
    {
      id: "p-001",
      slug: "automatic-bubble-tea-dispenser",
      title: "Automatic Bubble Tea Dispenser (ตู้กดน้ำชาไข่มุกอัตโนมัติ)",
      year: 2021,
      summary: "ระบบอัตโนมัติ หรือ Automation คือ ระบบที่สามารถทำงานได้ด้วยตนเอง ทำงานตามที่ได้มีการวางโปรแกรมไว้ อาจใช้กลไกของคอมพิวเตอร์หรืออุปกรณ์อิเล็กทรอนิกส์ควบคุมโดยมีการวางโปรแกรมจากมนุษย์ ระบบอัตโนมัติมีหน้าที่เพื่ออำนวยความสะดวกสบายในการดำเนินชีวิตของมนุษย์ และช่วยลดความเสียหายจากการทำงานโดยแรงงานมนุษย์ และยังสามารถผลิตสินค้าออกมาได้อย่างมีมาตรฐาน ในปัจจุบันระบบอัตโนมัติหรือ Automation ได้เข้ามามีบทบาทในชีวิตประจำวันอย่างมากโดยเฉพาะตู้หยอดเหรียญอัตโนมัติต่าง ๆ ที่อำนวยความสะดวกอย่างมาก เช่น ตู้กดน้ำอัตโนมัติ ตู้เติมเงินโทรศัพท์เครื่องซักผ้าหยอดเหรียญ เป็นต้นเนื่องจากในปัจจุบันชาไข่มุกได้เป็นที่นิยมอย่างมาก มีธุรกิจเกี่ยวกับชาไข่มุกมากมายซึ่งจะมีรูปแบบการสั่งซื้อการขายที่แตกต่างกันไป ส่วนใหญ่จะเป็นรูปแบบการสั่งซื้อผ่านหน้าร้าน จะมีพนักงานเป็นผู้ที่จัดทำชาไข่มุกแต่ละแก้วตามที่ลูกค้าสั่ง แต่ยังไม่มีรูปแบบของตู้กดที่เป็นอัตโนมัติ จึงทำให้ทางผู้จัดทำเลือกที่จะนำชาไข่มุกมาจัดทำรูปแบบการสั่งซื้อผ่านทางตู้กดน้ำชาไข่มุกอัตโนมัติโดยใช้รูปแบบของตู้หยอดเหรียญเข้ามาเพื่อนำไปสู่การพัฒนาระบบอัตโนมัติหรือ Automation ต่อไปวัตถุประสงค์ของโครงงาน",
      cover: BubbleTea1,
      gallery: [BubbleTea2, BubbleTea3, BubbleTea4],
      categories: ["Automation"],
      tags: ["Automation", "Node-RED"],
      techStack: ["Node-RED", "JavaScript"],
      role: "Creator & Project",
      teamSize: 1,
      status: "Success",
      problemMd: "## The Problem\n\nRepetitive setup tasks...",
      approachMd: "## Our Approach\n\nBuilt an extensible CLI...",
      outcomeMd: "## The Outcome\n\n2,000+ GitHub stars...",
      links: { repo: "https://github.com/example/cli-tool" },
      featured: false
    }
  ],
  messages: []
};
