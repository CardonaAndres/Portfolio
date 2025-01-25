import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { errorAlert, successAlert } from '../components/common/Alerts';
import Cookies from 'js-cookie';

export const useContactForm = (defaultValues) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onChange',
        defaultValues,
    });

    const handleWhatsApp = (data) => {
        const phoneNumber = '573012524648';
        const message = `Hola, tengo un mensaje para ti:\n\n*Nombre:* ${data.name}\n*Email:* ${data.email}\n*Mensaje:* ${data.message}\n\nNos pondremos en contacto contigo a la brevedad. ¡Gracias por tu interés en nuestros servicios!`;
        const encodedMessage = encodeURIComponent(message); // Codificar el mensaje
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
        reset();
    };
    
    
     const handleEmail = async (data) => {
        try {
            const sent = Cookies.get('sent');
            if (sent) {
                errorAlert('Ya has enviado un mensaje, debes esperar dos horas para enviar otro.');
                return;
            }

            const { name, email, message } = data;
            await emailjs.send(
                'service_1qqkvok', 'template_1sksm3m', {
                    name, email, message
                } , 'd6qzIq7cKtU9HBEEM'
            )
            
           Cookies.set('sent', 'true', { expires: 2/24 });
           successAlert();

        } catch (err) {
            errorAlert();
        } finally {
            reset();
        }
           
    };

    return {
        register,
        handleSubmit,
        errors,
        handleWhatsApp,
        handleEmail,
    };
}
