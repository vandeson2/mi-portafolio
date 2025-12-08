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
        <div>
            {/*Menu*/}
            <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                >
                    {item.name}
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
                <div>
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
    </nav>    
    
    )

}