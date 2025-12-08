import {  Github,Linkedin, Mail, ArrowDown } from "lucide-react"
import avatar from "../assets/avatar.png"

export function Hero(){
    const scrollToAbout = () => {
        document.querySelector("·sobre-mi")
        ?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <section
            className="min-h-screen flex items-center justify-center pt-16 overflow-hidden relative bg-gradient-to-br from-gray-900 via-black to-gray-900 "
            id="inicio"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%, rgba(6,182,212,0.08), transparent_40%)]"></div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/*Foto de perfil*/}
                <div className="flex items-center justify-center">
                    <div className="relative w-80 h-96">
                        <img 
                        src={avatar} alt="foto de perfil" 
                        className="w-full h-full object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>

                {/*Contenido de texto*/}
                <div className="space-y-8 text-left">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight">
                        Vandeson Sena 
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ml-3"> 
                        Desarrollador Frontend Junior
                        </span>
                    </h1>
                    <p
                        className=" text-xl sm:text-2xl max-w-xl text-gray-400 leading-relaxed"
                    >
                        Construyo interfaces accesibles, rápidas y modernas con React, JavaScript y Tailwind CSS.
                    </p>

                    <div className="flex justify-start gap-5 pt-5">
                        <a 
                            href="#"
                            className="p-3 rounded-full bg-white/5 backdrop-blur-xl shadow-lg hover:bg-white/10 trasition-all duration-300 hover:scale-110 transform border border-white/10"
                        
                        > 
                            <Github className="text-gray-300" size={24}/> 
                        </a>
                        <a 
                            href="#"
                             className="p-3 rounded-full bg-white/5 backdrop-blur-xl shadow-lg hover:bg-white/10 trasition-all duration-300 hover:scale-110 transform border border-white/10"
                        >
                            <Linkedin className="text-cyan-400" size={24}/>
                        </a>
                        <a 
                            href="#"
                             className="p-3 rounded-full bg-white/5 backdrop-blur-xl shadow-lg hover:bg-white/10 trasition-all duration-300 hover:scale-110 transform border border-white/10"
                        >
                            <Mail className="text-gray-300" size={24}/>
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-start gap-5 pt-8">
                        <a 
                            href="#contacto"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector("#contacto")
                                ?.scrollIntoView({behavior: "smoot"});
                            }}
                            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                        >
                            Contáctame
                        </a>

                        <a 
                            className="inline-block text-white  rounded-full px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 "
                        >
                            Descargar CV
                        </a>
                    </div>

                    <button
                        onClick={scrollToAbout}
                        className="inline-block text-gray-500 animate-bounce mt-12 hover:text-cyan-400 transition-colors"
                    >
                        <ArrowDown size={32} />
                    </button>
                </div>
            </div>
        </section>
    )
}