import Swal, { SweetAlertResult } from 'sweetalert2';

 export const mensagemDeCorfirmacao = (message: string, callback: () => void): void => {
  Swal.fire({
    title: 'Confirmação',
    text: message,
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim',
    cancelButtonText: 'Cancelar',
  }).then((result: SweetAlertResult) => {
    if (result.isConfirmed) {
      callback();
    }
  });
};
