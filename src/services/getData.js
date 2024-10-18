import { ENPOINT } from './constants';

export const getData = async() =>{
    try {
        const res = await fetch(ENPOINT);
        if(!res.ok){
            throw new Error(`Error: ${res.status} - ${res.statusText}`);
        }
        const json = await res.json();
        if (!json.response || !json.response.channels) {
            throw new Error('Estructura de respuesta erronea');
        }
        return json.response.channels
    } catch (error) {
        return { error: error.message || 'Ocurrió un error' };
    }
}