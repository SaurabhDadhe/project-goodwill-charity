import axios from "axios";
import { BASE_URL } from "../Constants/ApiRoutes";
import { getToken } from "./TokenService";

const NGO_URL =`${BASE_URL}/ngo`;

export function ngoLogin(loginCredentials){
    return axios.post(`${NGO_URL}/login`,loginCredentials,{headers: {
            'Content-Type': 'application/json',
        }});
}
export function addNgo(Credentials){
    return axios.post(`${NGO_URL}`,Credentials,{headers: {
            'Content-Type': 'multipart/form-data',
        }});
}
export function fetchAllNgo(){
    return axios.get(`${NGO_URL}`)
}
export function fetchNgoData(ngoId){
    return axios.get(`${NGO_URL}/${ngoId}`,{headers:{'Authorization':`Bearer ${getToken()}`}})
}
export function fetchNgoDataForPage(ngoId){
    return axios.get(`${NGO_URL}/ngopage/${ngoId}`)
}

//.net working code
// export function updatedNgoData(ngoId,ngoData){
//     return axios.put(`${NGO_URL}/${ngoId}`,ngoData,{headers:{'Authorization':`Bearer ${getToken()}`,'Content-Type': 'multipart/form-data',}})
// }

export function updatedNgoData(ngoId,ngoData){
    const formData = new FormData();
    // for (const key in ngoData) {
    //     formData.append(key, ngoData[key]);
    //     console.log(ngoData[key]);
    // }
    // formData.append("name", ngoData.name);
    //     formData.append("email", ngoData.email);
    //     formData.append("phone", userData.phone);
    //     formData.append("address", ngoData.address);
    //     //formData.append("password", password);
    //     formData.append("imagesFile", ngoData.imagesFile);


    return axios.put(`${NGO_URL}/${ngoId}`,ngoData,{headers:{'Authorization':`Bearer ${getToken()}`,'Content-Type': 'multipart/form-data',}})
}

export function deleteNgo(ngoId){
    return axios.delete(`${NGO_URL}/${ngoId}`,{headers:{'Authorization':`Bearer ${getToken()}`}})    
}