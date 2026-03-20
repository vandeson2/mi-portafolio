import { Code2, BarChart3, Cpu } from "lucide-react"
import { motion } from "framer-motion"

export function About(){

    const highlight =[
        {
            icon: BarChart3,
            title: 'Análista de Datos',      
            description: 'Expecializado en la extracción de insights de valor y limpieza de datos mediante el uso de Python y Pandas.'
        },
        {
            icon: Code2,
            title: 'Desarrollo Full Stack',
            description: 'Creación de aplicaciones robustas y escalables con React y JavaScript, enfocada en una lógica de negocio eficiente.',
        },
        {
            icon: Cpu,
            title: 'Bases de Datos & APIs',
            description: 'Experiencia en diseño de estructuras de datos y gestión de bases de datos relacionales y no relacionales con SQL y Firebase.',
        },
    ];
    
    return (
        <section 
            id="sobre-mi"
            className="bg-black overflow-hidden relative py-32"
        >
            {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.05),transparent_50%)]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    initial={{opacity:0 ,y: 20}}
                    whileInView={{opacity:1 ,y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                    className="flex flex-col items-center text-center mb-20"
                >
                    <h2 className="text-white mb-6 text-5xl sm:text-6xl lg:text-7xl tracking-tight">
                        Sobre Mí
                    </h2>
                    <div className="w-40 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 max-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        initial={{opacity:0, x:-30}}
                        whileInView={{opacity:1, x:0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8}}
                        className="space-y-6"
                    >
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Desarrollador web y analista de datos junior con fromación sólida en <b>Desarrollo
                            de Aplicaciones Web (DAW)</b>. Actualmente, potencio mis capacidades mediante 
                            un <b>Máster en Data Science e IA</b>. Mi perfil une lo mejor de dos mundos, 
                            la capacidades de construir interfaces interactivas y robustas con <b>React</b> 
                            y el poder de extraer insights de valor mediante <b>Python y Pandas</b>.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            He aportado soluciones en proyectos reales, desde el desarrollo una tienda online
                            hasta sistemas de gestión interna y automatización de procesos. Esta experiencia 
                            me ha permitido dominar el ciclo completo de un producto. Desde el diseño de UI 
                            y la lógica de negocio hasta la gestión de dases de datos y el despliegue.
                            Mi objetivo es seguir creando soluciones tecnológicas eficientes, escalables 
                            y sobre todo <b>orientada a datos</b>.
                        </p>
                    </motion.div>
                    <div className="space-y-6">
                        {highlight.map((item, index) => (
                            <motion.div
                                initial={{opacity:0, y:20}}
                                whileInView={{opacity:1, y:0}}
                                viewport={{once: true}}
                                transition={{duration: 0.6, delay: index * 0.2}}
                                key={item}
                                className="group flex gap-4 p-7 bg-white/5 rounded-2xl backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transiton-all duration-500"
                            >
                                <div className="flex-shrink-0">
                                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                        <item.icon size={24} className="text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-white text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>    
                        ))}

                    </div>

                </div>
            </div>

        </section>
    )
}