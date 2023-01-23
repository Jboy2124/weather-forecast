import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather?appid=556fb9d3a547ba28fe5fcfd06959bff1',
})