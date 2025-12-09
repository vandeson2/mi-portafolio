import { useState, useEffect } from "react"
import {Menu, X} from "lucide-react"

export function NavBar(){

    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(windows.scrollY > 20);
        };
        //Escucha el evento scroll
        window.addEventListener('scroll', handleScroll);
        //Limpieza de evento
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const scrollSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if(element){
            element.scrollIntoView({behavior: 'smooth'});
            setIsOpenMenu(false);
        }
    };


    const navItems = [
        {name: 'Inicio', href:'#'},
        {name: 'Sobre mí', href:'#'},
        {name: 'Habilidades', href:'#'},
        {name: 'Proyectos', href:'#'},
        {name: 'Contacto', href:'#'},

    ];

    return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <div 
            className={`transition-all duration-500 rounded-full py-3 px-8 ${ isScrolled
                        ? 'bg-black/80 backdrop-blur-2xl sadow-2xl border border-white/10'
                        : 'bg-black/40 backdrop-blur-xl shadow-lg border border-white/5'
                    }`}
        >
            {/*Menu*/}
            
            <div
                className="flex justify-center items-center"
            >
                <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="text-sm text-gray-300 hover:text-white transition-all duration-300 relative py-2 group"
                    >
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                ))}    
                </div>
                {/*Botón movil */}    
                <button
                    className="md:hidden text-gray-300"
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                >
                    {isOpenMenu ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>
        

            {/*Menu movil*/}
            {isOpenMenu && (
                <div className="md:hidden">
                    <div
        
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 text-gray-300"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    </nav>    
    
    )

}