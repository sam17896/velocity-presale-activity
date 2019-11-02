import axios from 'axios';
import { Config } from '../shared/config'; 

const headers = { 'Ocp-Apim-Subscription-Key': '8cc6ecf9e521421aa8137c7ae2dffb72' }

export const Login = async (body) => {
    const res = axios.get(
        `/login`,
        {
            headers: {
                'Ocp-Apim-Subscription-Key':'8cc6ecf9e521421aa8137c7ae2dffb72'
            }         
        }
    )

  
    return res;
}

export const Register = (body) => {
    const res = axios.get(
        `/login`,
        {
            headers: {
                'Ocp-Apim-Subscription-Key':'8cc6ecf9e521421aa8137c7ae2dffb72'
            }
        }
    )

    return res;
}