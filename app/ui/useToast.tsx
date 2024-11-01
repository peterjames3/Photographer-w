'use client';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface useToast{
    message:string,
}
  
const useToast = () => {
    const notifySuccess = (message:string) => {
        toast.success(message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const notifyError = (message:string) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    return { notifySuccess, notifyError }
};

export default useToast;