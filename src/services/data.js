import { getCurrentDate, getCurrentDateWithAddedDay } from "./getDates";

const ENPOINT = `https://mfwkweb-api.clarovideo.net/services/epg/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=guatemala&HKS=web61144bb49d549&user_id=54343080&date_from=${getCurrentDate()}&date_to=${getCurrentDateWithAddedDay()}&quantity=200`

export const getData = async() =>{
    try {
        const res = await fetch(ENPOINT);
        const json = await res.json();
        
        console.log(json.response.channels)
        return json.response.channels
    } catch (error) {
        let message =  error.statusText || "Ocurrió un error";
        return message
    }
}