import {Briefcase, Calendar, MapPin, Link}  from 'lucide-react';
export function Experiences () {

    const experiences = [
        {
            title: 'Web Biográfica + Tienda Online para Artista',
            company: 'Desarrollador Web Freelancer',
            roleType: 'Freelance',
            period: 'oct - 2025',
            description: 'Desarrollo integral de un sitio web profesional para la presentación y venta de obras artísticas. El proyecto se realizó utilizando WordPress por elección del cliente, garantizando una plataforma robusta, escalable y fácil de administrar.',
            achievements: [
                'Implementación de tienda online con WooCommerce.',
                'Implementación del SEO básico y mejoras de accesibilidad',
                'Personalización visual conforme a la identida de marca.',
                'Optimización responsive para múltiples dispositivos.'
            ],
            tags: ['WordPress', 'WooCommerce', 'CSS', 'Responsive Design'],
            link: 'www.vicentellinares.com/',
        },
        {
            title: 'Plataforma de Gestión de Documentos Internos',
            company: 'Fundación MEDAC - Practicas',
            roleType: 'Desarrollo WEb en Prácticas',
            period:'Mar 2025 - Jun 2025',
            description: 'Desarrollo de una plataforma web para la gestión y transferencia automatizada de archivos internos, con el objetivo de optimizar  procesos y reducir tareas manuales dentro del flujo documental de la organización.',
            achievements:[
                'Integración backend con GoogleDrive API para destión masiva de archivos.',
                'Automatización del flujo de transferencia documental.',
                'Mejora significativa en la eficiencia operativa interna.'
            ],
            tags: ['Go', 'GoogleDrive API', 'HTML5', 'CSS3'],

        },
    ];

    return (
        <section
            id='experiencia'
            className= 'bg-gradient-to-b from-black to-gray-900 overflow-hidden relative py-32'
        >
            {/* Efectos de fondo */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.05),transparent_50%)] pointer-events-none"></div>

           
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>

                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                    <div className='flex flex-col justify-center items-center text-center mb-20 ' >
                        <h2 className='text-white text-5xl sm:text-6xl lg:text-7xl mb-6 tracking-tight'>Experiencias</h2>
                        <div className= 'w-40 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto'></div>
                    </div>
                </div>

                <div className='max-w-5xl mx-auto'>
                    <div className='relative'>
                        {/*Línea vertical*/}
                        <div className='absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 transform md:-translate-x-1/2'></div>
                        
                        {experiences.map((exp, index) =>(
                            <div
                             key={exp.company + exp.period}
                             className={`relative mb-16 md:mb-24 ${
                                index % 2 === 0
                                ? "md:pr-[calc(50%+2rem)] md:text-left"
                                : "md:pl-[calc(50%+2rem)] md:text-left"
                             }`}
                            >
                                {/* Punto*/}
                               <div className='absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full transform -translate-x-1/2 ring-4 ring-black shadow-cyan-500/50'></div>/
                                
                                {/*Card*/}
                                <div className='group bg-white/5 backdrop-blur-xl rounded-2xl p-8 ml-8 md:ml-0 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 border border-white/10 hover:bg-white/10 hover:borde-white/20'>
                                   <div className='mb-6'>
                                        <div className='flex items-start justify-between flex-wrap gap-4 mb-3'>
                                            <div>
                                                <h3 className='text-2xl text-white mb-2 tracking-tight group-hover:text-cyan-400 transition-colors duration-300'>
                                                    {exp.title}
                                                </h3>

                                                <div className='flex items-center gap-2 mb-1 text-gray-400'>
                                                    <Briefcase size={16} className='text-cyan-400' />
                                                    <p>{exp.company}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex flex-wrap gap-4 mb-3 text-sm text-gray-400'>
                                            <div className='flex items-center gap-2 '>
                                                <Calendar size={16} className='text-cyan-400' />
                                                <p>{exp.period}</p>
                                            </div>

                                            <div className='flex items-center gap-2 '>
                                                <MapPin size={16} className='text-cyan-400' />
                                                <p>{exp.roleType}</p>
                                            </div>
                                            
                                        </div>

                                        <div className='flex items-center gap-2'>
                                                <Link size={16} className='text-cyan-400' />
                                                <a 
                                                    href='https://www.vicentellinares.com/'
                                                    className='text-gray-400 hover:text-cyan-500'
                                                >
                                                    {exp.link}
                                                </a>
                                        </div>
                                    </div>    

                                    <p className='text-gray-400 leading-relaxed mb-6'>
                                        {exp.description}
                                    </p>

                                    <div className='flex flex-col mb-6'>
                                        <h4 className='text-white mb-3 tracking-tight '>Logros Destacados:</h4>
                                        <ul className='space-y-2'>
                                            {exp.achievements.map((achievement, i) =>(
                                                <li 
                                                    key={i}
                                                    className='flex items-start gap-2 text-sm text-gray-400'
                                                >
                                                    <span className='text-cyan-400 '>•</span>
                                                    <span>{achievement}</span>

                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className='flex flex-wrap gap-2'>
                                        {exp.tags.map((tech) => (
                                            <span
                                                key={tech}
                                                className='text-cyan-400 text-sm bg-white/5 rounded-full px-3 py-1 border border-white/20 group-hover:bg-white/10'
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )


}