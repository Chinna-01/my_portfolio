import React from "react";
import { FaCode, FaNodeJs, FaReact } from "react-icons/fa";
import HangfireJobs from "@/public/Hangfire-Jobs.png"; 
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "WINIT Software Solutions",
    location: "Hyderabad, Telangana",
    description:
      "Currently working as Software Engineer at WINIT Software Solutions. My main responsibilities building web applications using C#, .NET Core, ASP.NET, and SQL Server. I specialize in Sales Force Automation (SFA) solutions, API integration with ERP systems like Microsoft Dynamics 365 and SAP, and developing features for van sales, stock management, and order processing. I’m also skilled in JavaScript, jQuery, and currently learning Angular, TypeScript for full-stack and data-driven development.",
    icon: React.createElement(FaCode),
    date: "Jul 2022 - Jun 2025",
  },
    {
    title: "Micro Labs Limited",
    location: "Bengaluru, Karnataka",
    description:
      "Key responsibilities include planning and managing IT operations, implementing and maintaining secure and scalable systems, supporting end-users, and driving digital transformation initiatives. Experienced in working with cross-functional teams, vendors, and leadership to ensure the smooth delivery of IT services.",
    icon: React.createElement(FaCode),
    date: "Jul 2025 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "HangFire BackGround Jobs (Data Integration Between SQL And Oracle)",
    description:
      "Developed  ",
    tags: [
      ".Net Core",
      "HangFire",
      "SQL Server",
      "Oracle",
      "Dapper", 
    ],
    imageUrl: HangfireJobs,
    link: "#",
  } 
] as const;

export const skillsData = [
"C#"
,".NET Core / ASP.NET"
,"JavaScript / jQuery"
,"TypeScript"
,"HTML5 / CSS3"
,"Angular" 
,"Java"  
,"SQL Server"
,"Oracle"
,"MongoDB (learning)" 
,"REST APIs"
,"SOAP APIs"
,"Azure DevOps for CI/CD"
,"Data Integration with ERP systems" 
,"Visual Studio / Visual Studio Code"
,"Android Studio (basic Android app development)"
,"Git / GitHub"
] as const;
