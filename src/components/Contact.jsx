import { Mail, Phone, Linkedin } from "lucide-react"
import { FormContact } from "./FormContact"

export function Contact () {
    const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL;

    const contactInfo = [
        {id: 1, icon: Mail, title: 'Correo Electrónico', text:'Vandeson2@gmail.com', link: 'mailto:vandeson2@gmail.com'},
        {id: 2, icon: Phone, title:'Teléfono', text: '+34 682 665 710', link: 'tel:+34682665710'},
        {id: 3, icon: Linkedin, title:'LinkedIn', text:'linkedin.com/in/vandeson-sena', link: 'https://www.linkedin.com/in/vandeson-sena/'},
    ]
    return (
        <section
            id="contacto"
            className="bg-black py-32 relative overflow-hidden"
        >

            {/* Efectos de fondo */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_50%_80%,rgba(6,182,212,0.08),transparent_50%)]"></div>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center mb-20">
                    <h2 className="text-white text-5xl sm:text-6xl lg:text-7xl mb-6 tracking-tight">Contacto</h2>
                    <div className="w-40 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        Si busca un desarrollador Frontend Junior en React y Tailwind CSS que prioriza el código limpio y las buenas práctiicas, me encantaria conocer tu proyecto.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-white text-3xl tracking-tight mb-8">Conectemos</h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-4">Estoy activamente buscando mi primera oportunidad profesional para aplicar y expandir mi stack técnico.</p>
                            <p className="text-cyan-400 text-lg leading-relaxed">¿Hablamos sobre como puedo aportar valor tu equipo?</p>
                        </div>
                        <div className="space-y-6">
                            {contactInfo.map((info) => (
                                <div key={info.id} className="flex items-star gap-8 group">
                                    <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-3 text-white rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <info.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white  text-lg">{info.title}</h4>
                                        {info.link? (
                                            <a
                                                href={info.link}
                                                target="_blank"
                                                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                                            >
                                            {info.text}
                                            </a>
                                        ) : (
                                            <p className="text-gray-400">{info.text}</p>
                                        
                                        )}

                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="bg-white/5 p-8  rounded-2xl shadow-2xl backdrop-blur-xl border border-white/10">
                        <FormContact formEndpoint={formspreeUrl}/>

                    </div>
                </div>

            </div>

        </section>
    )
}