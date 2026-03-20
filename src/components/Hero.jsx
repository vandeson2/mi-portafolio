import {  Github,Linkedin, Mail, ArrowDown } from "lucide-react"
import fotoHero from "../assets/fotoHero.png"
import { motion } from "framer-motion"

export function Hero(){
    const scrollToAbout = () => {
        document.querySelector("#sobre-mi")
        ?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <section
            className="min-h-screen flex items-center justify-center overflow-hidden relative bg-gradient-to-br from-gray-900 via-black to-gray-900 "
            id="inicio"
        >
            {/*Efecto fondo */}
            {/*<div className="absolute pointer-events-none inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>*/}
            <div className="absolute pointer-events-none inset-0 bg-[radial-gradient(circle_at_80%_20%, rgba(6,182,212,0.08), transparent_40%)]"></div>
           
           <div className="max-w-7xl mx-auto mb-40 sm:px-6 lg:px-8 py-32 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/*Foto de perfil*/}
                    
                    <div className="flex items-center justify-center sm:-mt-70 relative group">
                        <div className="absolute w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full "></div>
                        <div className="absolute w-40 h-40 bg-blue-400/10 blur-[80px] rounded-full"></div>
                     

                        <motion.div 
                            initial={{opacity: 0, x: -50}}
                            animate={{opacity: 1, x: 0 }}
                            transition={{duration: 0.8, ease: "easeOut"}}
                            className="relative w-72 h-80 f sm:w-80 sm:h-96 "
                        >
                            <img 
                            src={fotoHero} alt="foto de perfil" 
                            className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(6,182,212,0.2)]"

                            style={{
                                maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)'
                        }}                                                    
                            />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>       
                        </motion.div>
                    </div>

                    {/*Contenido de texto*/}
                    <div className="space-y-8 text-left">
                        <motion.h1 
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity:1, y:0}}
                            transition={{duration: 0.8, delay: 0.2}}
                            className="text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight"
                        >
                            Vandeson Sena 
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ml-3"> 
                            Junior Data Analyst & Full Stack Developer
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{opacity:0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay:0.4}}
                            className=" text-xl sm:text-2xl max-w-xl text-gray-400 leading-relaxed"
                        >
                            Transformando datos en soluciones mediante <strong>Python, SQL y React.</strong>
                        </motion.p>

                        <motion.div 
                            initial={{opacity:0, y:20}}
                            animate={{opacity:1, y:0}}
                            transition={{duration: 0.8, delay:0.6}}
                            className="flex justify-start gap-5 pt-5"
                            >
                            <a 
                                href="https://github.com/vandeson2"
                                target="_blank"
                                className="p-3 rounded-full bg-white/5 backdrop-blur-xl shadow-lg hover:bg-white/10 transition-all duration-300 hover:scale-110 transform border border-white/10"
                            
                            > 
                                <Github className="text-gray-300" size={24}/> 
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/vandeson-sena/"
                                target="_blank"
                                className="p-3 rounded-full bg-white/5 backdrop-blur-xl shadow-lg hover:bg-white/10 transition-all duration-300 hover:scale-110 transform border border-white/10"
                            >
                                <Linkedin className="text-cyan-400" size={24}/>
                            </a>
                            <a 
                                href="mailto:vandeson2@gmail.com"
                                className="p-3 rounded-full bg-white/5 backdrop-blur-xl shadow-lg hover:bg-white/10 transition-all duration-300 hover:scale-110 transform border border-white/10"
                            >
                                <Mail className="text-gray-300" size={24}/>
                            </a>
                        </motion.div>

                        <motion.div 
                            initial={{opacity:0, y:20}}
                            animate={{opacity:1, y:0}}
                            transition={{duration:0.8, delay:0.8}}
                            className="flex flex-col sm:flex-row justify-start gap-5 pt-8"
                        >
                            <a 
                                href="#contacto"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector("#contacto")
                                    ?.scrollIntoView({behavior: "smooth"});
                                }}
                                className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                            >
                                Contáctame
                            </a>

                            <a 
                                href="\CV_Vandeson_Sena.pdf"
                                target="_blank"
                                className="inline-block text-white  rounded-full px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 "
                            >
                                Descargar CV
                            </a>
                        </motion.div>

                        <motion.button
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{duration: 1, delay: 1.2}}
                            onClick={scrollToAbout}
                            className="inline-block text-gray-500 animate-bounce mt-20 hover:text-cyan-400 transition-colors"
                        >
                            <ArrowDown size={42} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    )
}