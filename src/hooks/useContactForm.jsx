import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { errorAlert, successAlert } from '../components/common/Alerts';

export const useContactForm = (defaultValues) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onChange',
        defaultValues,
    });

    const handleWhatsApp = (data) => {
        const phoneNumber = '573012524648';
        const message = `Nombre: ${data.name}\nEmail: ${data.email}\nMensaje: ${data.message}`;
        const encodedMessage = encodeURIComponent(message); // Codificar el mensaje
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
        reset();
    };
    
     const handleEmail = async (data) => {
        try {
            const { name, email, message } = data;

            await emailjs.send(
                'service_1qqkvok', 'template_1sksm3m', {
                    name, email, message
                } , 'd6qzIq7cKtU9HBEEM'
            )
            
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
