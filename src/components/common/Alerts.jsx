import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const successAlert = () => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
        icon: 'success',
        title: '¡Todo salió bien!',
        text: 'La operación se completó correctamente.',
        background: '#1E3A8A', // Azul oscuro
        color: '#ffffff', // Blanco
        confirmButtonColor: '#3B82F6', // Azul claro
        confirmButtonText: 'Aceptar',
        customClass: {
          title: 'swal-title',
          icon: 'swal-icon',
        },
      });

}

export const errorAlert = (message = 'Algo salió mal, por favor intenta de nuevo.') => {
    const MySwal = withReactContent(Swal);
  
    MySwal.fire({
      icon: 'error',
      title: '¡Ups!',
      text: message,
      background: '#B91C1C', // Rojo oscuro
      color: '#ffffff', // Blanco
      confirmButtonColor: '#EF4444', // Rojo claro
      confirmButtonText: 'Aceptar',
      customClass: {
        title: 'swal-title',
        icon: 'swal-icon',
      },
    });
    
  };