import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "motion/react";
const FormContact = ({formEndpoint}) => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:'',
    });

    const [status, setStatus] = useState('idel');
    const [error, setError] = useState('');

    //maneja los cambios en el formulario
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    //Envio del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setError('');

        try{
            const response = await fetch(formEndpoint,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if(response.ok){
                setStatus('success');
                setFormData({noma:'', email:'', message:''});
            }else{
                const data = await response.json();
                setError(data.error || 'Ocurrió un error al enviar el mensaje.');
                setStatus('error');
            }
        }catch (err) {
            setError('Ocurrió un error al enviar el mensaje.');
            setStatus('error');
        }
    };

    //Renderizado del formulario
    const renderStatusMessage = () => {
        switch(status){
            case 'loading':
                return(
                    <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl text-blue-400 text-center backdrop-blur-xl">
                        <p>Enviando mensaje...</p>

                    </div>
                );
            case 'success':
                return(
                    <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-center backdrop-blur-xl">
                        <p>Mensaje enviado con éxito. ¡Gracias por contactarme!</p>
                    </div>
                );
            case 'error':
                return(
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-center backdrop-blur-xl ">
                        <p>Error al enviar:</p>
                        <p text-sm>{error}</p>
                    </div>
                );
            default:
                return null;
        }
    };
    
    return (
        <>
            

            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Formulario de contacto">
                <>
                <div>
                    <label htmlFor="name" className="text-gray-300 text-sm block mb-3">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre"
                        disabled={status === 'loading'} 
                        className="w-full py-4 px-8 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 backdrop-blur-xl"
                    />
                </div>
                <div>
                        <label htmlFor="email" className="text-gray-300 text-sm block mb-3">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Tu correo electrónico"
                            disabled={status === 'loading'}
                            className="w-full py-4 px-8 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 backdrop-blur-xl"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-gray-300 text-sm block mb-3">
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Escribe tu mensaje aquí..."
                            rows="4"
                            disabled={status === 'loading'}
                            className="w-full py-4 px-8 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 backdrop-blur-xl"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-4 rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"

                    >
                        {status === 'loading' ? 'Enviando...' : (
                            <span className="flex items-center gap-2">
                            <Send size={24} /> 
                             Enviar Mensaje
                            </span>
                        )}

                    </button>
                </>
                <motion.div
                    initial={{opacity:0 , y:10}}
                    animate={{opacity: 1, y:0}}
                 >
                {renderStatusMessage()}
                </motion.div>
            </form>  
        </>  

    )

}
export { FormContact };