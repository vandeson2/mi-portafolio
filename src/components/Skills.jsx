import react from "../assets/icons/react.png";
import javascript from "../assets/icons/javascript.png";
import html from "../assets/icons/html5.png";
import css from "../assets/icons/css.png";
import tailwind from "../assets/icons/tailwind.png";
import git from "../assets/icons/git.png";
import github from "../assets/icons/github.png";
import ts from "../assets/icons/ts.png";
import mysql from "../assets/icons/mysql.png";
import java from "../assets/icons/java.png";
import firebase from "../assets/icons/firebase.png";
import go from "../assets/icons/go.png";

export function Skills () {

    const skills = [
        { icon: react, name: 'React.js'},
        { icon: tailwind, name: 'Tailwind CSS'},
        { icon: javascript, name: 'JavaScript'},
        { icon: html, name: 'HTML5'},
        { icon: css, name: 'CSS3'},
        { icon: git, name: 'Git'},
        { icon: github, name: 'GitHub'},
        { icon: ts, name: 'TypeScript'},
        { icon: mysql, name: 'MySQL'},
        { icon: java, name: 'Java'},
        { icon: firebase, name: 'Firebase'},
        { icon: go, name: 'Go'},
    ]
    return (
        <section
            id="habilidades"
            className="bg-black py-32 relative overflow-hidden"
        >
            {/* Efectos de fondo */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.05),transparent_50%)]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center mb-20">
                    <h2 className="text-5xl sm:text-6xl lg:text-6xl text-white mb-6 tracking-tight">Habilidades Técnicas</h2>
                    <div className="w-70 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
                </div>

                <div  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {skills.map((skill) =>(
                        <div
                            key={skills.skill}
                            className="flex flex-col justify-center items-center gap-4 bg-white/5 group p-5 rounded-2xl shadow-2xl backdrop-blur-xl border
                             border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:bg-white/10 hover:shadow-cyan-400/20 "
                        >
                            <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:scale-110 transition-transform duration-300 rounded-xl ">
                                <img src={skill.icon} alt={skill.name}  className="text-white"/>
                            </div>
                            <h3 className="text-white text-center text-sm">{skill.name}</h3>
                        


                        </div>

                    ))}
                </div>
            </div>

        </section>
    )
}