import axios from 'axios';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Swal from 'sweetalert2';


const axiosInstance = axios.create({
    baseURL: 'https://service-review-server-site-five.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { signOutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error caught in interceptors', error)
            if (error.status === 401 || error.status === 403) {
                console.log('need to logged out the user');
                signOutUser()
                    .then(() => {
                        Swal.fire({
                            title: "Error!",
                            text: "Log in again.",
                            icon: "error"
                        });
                        navigate('/signIn')
                    })
                    .catch(err => console.log(err))
            }
            return Promise.reject(error)
        })
    }, [])

    return axiosInstance;
};

export default useAxiosSecure;