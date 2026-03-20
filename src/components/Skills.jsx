import react from "../assets/icons/react.png";
import javascript from "../assets/icons/javascript.png";
import html from "../assets/icons/html5.png";
import css from "../assets/icons/css.png";
import tailwind from "../assets/icons/tailwind.png";
import git from "../assets/icons/git.png";
import github from "../assets/icons/github.png";
import python from "../assets/icons/python.png";
import pandas from "../assets/icons/pandas.png";
import mysql from "../assets/icons/mysql.png";
import java from "../assets/icons/java.png";
import firebase from "../assets/icons/firebase.png";
import go from "../assets/icons/go.png";
import { motion } from "motion/react";
import { div } from "motion/react-client";

export function Skills () {

    const skillSessions = [
        {
            title:'Data Science & Analysis',
            items: [
                { icon: python, name: 'Python'},
                { icon: pandas, name: 'Pandas'},
                { icon: mysql, name: 'MySQL'},
            ]
        },
        {
            title: 'Full Stack Develoment',
            items: [
                { icon: react, name: 'React.js'},
                { icon: javascript, name: 'JavaScript'},
                { icon: tailwind, name: 'Tailwind CSS'},
                { icon: html, name: 'HTML5'},
                { icon: css, name: 'CSS3'},
            ]
        },
        {
            title: 'Backend & Ecosystem',
            items: [
                { icon: go, name: 'Go'},
                { icon: java, name: 'Java'},
                { icon: firebase, name: 'Firebase'},
                { icon: git, name: 'Git'},
                { icon: github, name: 'GitHub'},
            ]
        }   
    ]
    return (
        <section
            id="habilidades"
            className="bg-black py-32 relative overflow-hidden"
        >
            {/* Efectos de fondo */}
             <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(140%_70%_at_50%_100%,rgba(6,182,212,0.1),transparent_50%)]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    initial={{opacity:0, y:20}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                    className="flex flex-col items-center text-center mb-20"
                >
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 tracking-tight">Habilidades Técnicas</h2>
                    <div className="w-70 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
                </motion.div>

                {skillSessions.map((session, sIdex) => (
                    <div key={session.title} className="mb-16">
                        <h3 className="text-cyan-400 text-xl font-semibold mb-8 uppercase tracking-widest border-l-4 border-cyan-500 pl-4">
                            {session.title}
                        </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5">
                            {session.items.map((skill, index) => (
                               <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                className="flex flex-col items-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all group"
                                >
                                    <div className= "p-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:scale-110 transition-transform duration-300 rounded-xl">
                                        <img src={skill.icon} alt={skill.name} className="text-white w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                    <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                                        {skill.name}
                                    </span>
                                </motion.div> 
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}