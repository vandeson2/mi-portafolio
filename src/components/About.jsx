import { Code2, Users, Palette, Rocket } from "lucide-react"
import { motion } from "framer-motion"

export function About(){

    const highlight =[
        {
            icon: Rocket,
            title: 'Desarrollador Junior',      
            description: 'Mi mayor skill es mi capacidad de aprender y adaptarme rápidamente.'
        },
        {
            icon: Code2,
            title: 'Código Limpio',
            description: 'Aprendo y aplico las mejores prácticas para escribir código limpio y mantenible.',
        },
        {
            icon: Palette,
            title: 'Perfección del Diseño',
            description: 'Meticuloso en el detalle. Me esfuerzo por la implementación Pixel-Perfect.',
        },
        {
            icon: Users,
            title: 'Centrado en el Usuario',
            description: 'Me esfuerzo por entender las necesidades del usuario para crear experiencias intuitivas y atractivas.',
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
                           Soy desarrollador Frontend Junior con un enfoque centrado en la experiencia 
                           de usuario, el rendimiento y la calidad del código. Acabo de completar el ciclo 
                           formativo de Desarrollo de Aplicaciones Web (DAW) en MEDAC. 
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Mi stack principal incluye React.js, JavaScript moderno, HTML5 y Tailwind CSS, 
                            lo que me permite construir interfaces responsivas y mantenibles.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                           He trabajado en proyectos reales, desde tiendas online hasta sistemas 
                           internos, lo que me ha enseñado a afrontar desde diseño de UI hasta lógica, 
                           data y despliegue. Me apasiona seguir aprendiendo: actualmente profundizó en 
                           TypeScript y testing (Jest). 
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Busco un primer empleo en presencial o en entorno remoto, donde pueda aportar 
                            desde el primer día, aprender en equipo y crecer profesionalmente.
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