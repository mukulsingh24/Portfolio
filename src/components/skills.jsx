import React from "react";
import { 
  SiTailwindcss, 
  SiNextdotjs, 
  SiHtml5, 
  SiReact, 
  SiPython,
  SiBootstrap,
  SiTypescript,
  SiFlutter,
  SiDavinciresolve,
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiCanva,
  SiGithub,
  SiLeetcode
} from "react-icons/si";

function SkillPage() {
  const skills = [
    // Row 1
    [
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
    ],
    // Row 2
    [
        { name: "DaVinci Resolve", icon: SiDavinciresolve, color: "#FF4444" },
        { name: "Premiere Pro", icon: SiAdobepremierepro, color: "#9999FF" },
        { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
        { name: "Canva", icon: SiCanva, color: "#00C4CC" },
    ],
    // Row 3
    [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
        { name: "LeetCode", icon: SiLeetcode, color: "#FFA116" },
    ],
  ];

  return (
    <div className= "text-white py-20 px-10" style={{backgroundColor:'#1f2a38'}} id="skills">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20" style={{color:'white'}}>
          Skills
        </h2>
        
        <div className="space-y-12">
          {skills.map((row, rowIndex) => (
            <div key={rowIndex}>
              <div className="flex gap-8 flex-wrap justify-center">
                {row.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-5 bg-slate-800 px-10 py-4 rounded-full border border-slate-700 hover:border-blue-400 hover:scale-105 transition duration-300 whitespace-nowrap text-xl"
                  >
                    <skill.icon size={32} style={{ color: skill.color }} />
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillPage;