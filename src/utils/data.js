// seed portfolio data (JS)
import Logo from "../assets/img/profile/Logo.png";
import { BubbleTea1,BubbleTea2,BubbleTea3,BubbleTea4 } from "../assets/img/projects/bubble-tea";
import { processCan1,processCan2,processCan3 } from "../assets/img/projects/processing-can";


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
    skills: ["React", "JavaScript", "Node.js", "Tailwind CSS", "MongoDB","Automation","IOT","PLC","PLC Siements", "Siements IoT","PLC Mitsubishi","HMI Samkoon","Node-RED","Arduino Boards"]
  },
  categories: ["Webapp", "Automation", "IOT"],
  tags: ["React", "JavaScript", "Node.js", "Tailwind CSS", "MongoDB", "UI/UX", "Automation", "IOT","PLC","Node-RED","Arduino Boards"],
  projects: [
    {
      id: "p-004",
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
      links: { demo: "https://demo.example.com", repo: "https://github.com/example/dashboard", caseStudy: "https://case-study.example.com"},
      featured: true
    },
    {
      id: "p-008",
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
      id: "p-002",
      slug: "image-processing-can",
      title: "Image Processing Can",
      year: 2021,
      summary: "สร้างเครื่องตรวจจับ defect ของกระป๋องอาหารทะเลด้วยการวิเคราะห์ภาพ",
      cover: processCan1,
      gallery: [processCan2, processCan3],
      categories: ["Automation", "PLC"],
      tags: ["Automation", "PLC"],
      techStack: ["Automation", "PLC"],
      role: "Creator & Project",
      teamSize: 3,
      status: "Finish",
      problemMd: "## The Problem\n\nInconsistent UI patterns...",
      approachMd: "## Our Approach\n\nCreated a unified design system...",
      outcomeMd: "## The Outcome\n\nAdopted across 15 teams...",
      links: { demo: "https://www.facebook.com/share/v/1GA3dSesTr/", caseStudy: "https://www.facebook.com/share/v/1GA3dSesTr/" },
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
      techStack: ["Automation", "Node-RED", "JavaScript"],
      role: "Creator & Project",
      teamSize: 1,
      status: "Success",
      problemMd: "วัตถุประสงค์ของโครงงาน\n\n1.	เพื่อออกแบบและพัฒนาระบบตู้กดน้ำชาไข่มุกอัตโนมัติ\n2.	เพื่อออกแบบกระบวนการทำงานของระบบตู้กดน้ำชาไข่มุกอัตโนมัติ\n3.	เพื่อศึกษาออกแบบระบบเซนเซอร์ ระบบควบคุม และระบบต่อพ่วงต่างๆ ภายในของตู้กดน้ำชาไข่มุกอัตโนมัติ",
      approachMd: "ขอบเขตของโครงงาน\n\n1.	ผู้ใช้สามารถเลือกชนิดของน้ำได้ผ่าน UI ( User interface )\n2.	ระบบสามารถรองรับการจ่ายเงินได้\n3.	ระบบสามารถผลิตน้ำชาไข่มุกได้ตามความต้องการของลูกค้า\n",
      outcomeMd: "วัตถุประสงค์ของโครงงาน\n\n1.	เพื่อออกแบบและพัฒนาระบบตู้กดน้ำชาไข่มุกอัตโนมัติ\n2.	เพื่อออกแบบกระบวนการทำงานของระบบตู้กดน้ำชาไข่มุกอัตโนมัติ\n3.	เพื่อศึกษาออกแบบระบบเซนเซอร์ ระบบควบคุม และระบบต่อพ่วงต่างๆ ภายในของตู้กดน้ำชาไข่มุกอัตโนมัติ\n",
      featured: true
    }
  ],
  messages: []
};
