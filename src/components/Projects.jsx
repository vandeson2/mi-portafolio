import web from "../assets/web.jpg"
import { Github } from "lucide-react";
import { motion } from "framer-motion"

export function Projects () {

    const projects = [
        
        {
            title: 'Sistema de Gestión de Reservas para Gimnasio',
            stat: 'En producción',
            pic: web,
            roleType: 'Proyecto Personal',
            description: 'Aplicacióon full stack en producción para gestionar reservas, horarios y usuarios. Desarrollé la interfaz completa, el panel de administración y la estructura de datos, implementado sincronización de tiempo real con Firebase. El diseño es responsive y centrado en mejorar la experiencia de usuario.',
            tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'Firebase (Firestore)'],
            gitHub: 'https://github.com/vandeson2/Sistema-de-reservas',
        },  
    ];

    return (
        <section
            id="proyectos"
            className="bg-black overflow-hidden relative py-32"
        >
        {/*Efecto de fondo */}    
       <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(120%_60%_at_50%_0%,rgba(6,182,212,0.1),transparent_50%)]"></div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
                initial={{opacity:0 ,y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once: true}}
                transition={{duration: 0.8}}
                className="flex flex-col items-center text-center mb-20"
            >
                <h2 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 tracking-tight">Proyectos</h2>
                <div className="w-40 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
            </motion.div>

            <div className={`grid gap-8 ${projects.length === 1 ? "flex place-items-center":"md:grid-cols-2 lg:grid-cols-3"}`}>
                {projects.map((project, index) => (
                    <motion.div 
                        initial={{opacity:0, y:40}}
                        whileInView={{opacity:1 ,y:0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: index * 0.2}}
                        key={project.title} 
                        className={`bg-white/5  backdrop-blur-xl overflow-hidden shadow-2xl rounded-2xl group  hover:shadow-cyan-500/20 transition-all duration-500 border border-white/10 hover:border/20 
                            ${projects.length === 1 ? "max-w-lg w-full" : ""}`} 
                    >
                        <div className="relative  h-56 overflow-hidden">
                            <img 
                                src={project.pic} alt={project.title} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <div className="p-8">
                            <h3 className="text-white text-2xl mb-3 tracking-tight">{project.title}</h3>
                            <p className="text-cyan-400 mb-2 tracking-tight">{project.stat}</p>
                            <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag) =>(
                                    <span className="text-cyan-400 bg-white/10 rounded-full px-3 py-1 text-sm border border-white/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div>
                                <a 
                                    href={project.gitHub}
                                    target="_blank"
                                    className="flex items-center text-gray-400 gap-2 hover:text-cyan-400 transition-all duration-300"
                                >
                                    <Github size={20} />
                                    <span>Código</span>
                                </a>
                            </div>
                        </div>

                    </motion.div>
                    
                ))}
            </div>
        </div>    

        </section>
    )
}