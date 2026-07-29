import { 
  SiHtml5, 
  SiCss,            
  SiJavascript, 
  SiNodedotjs,        
  SiReact, 
  SiNextdotjs       
} from 'react-icons/si';

export default function Skills() {
  const skills = [
    { 
      id: 1,
      name: "HTML5", 
      icon: SiHtml5, 
      color: "#E34F26" 
    },
    { 
      id: 2,
      name: "CSS3", 
      icon: SiCss,      
      color: "#1572B6" 
    },
    { 
      id: 3,
      name: "JavaScript", 
      icon: SiJavascript, 
      color: "#F7DF1E" 
    },
    { 
      id: 4,
      name: "Node.js", 
      icon: SiNodedotjs, 
      color: "#339933" 
    },
    { 
      id: 5,
      name: "React", 
      icon: SiReact, 
      color: "#61DAFB" 
    },
    { 
      id: 6,
      name: "Next.js", 
      icon: SiNextdotjs, 
      color: "#FFFF00" 
    },
  ];

  return (
    <div className="skills-grid">
      {skills.map((skill) => {
        const Icon = skill.icon;
        return (
          <article className="skill-card" key={skill.id}>
            <Icon size={72} color={skill.color} />
            <h4>{skill.name}</h4>
          </article>
        );
      })}
    </div>
  );
}