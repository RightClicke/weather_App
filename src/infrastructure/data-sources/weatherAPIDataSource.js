import axios from "axios"
import {APIKeys} from "../../common/constants/APIKeys";
import {format} from "date-fns";
import {fr} from "date-fns/locale";
import WeatherData from "../../Domain/entities/weatherData";
import Toast from "react-native-toast-message";

export const WeatherAPIDataSource = {
    // Méthode pour obtenir les données météo en fonction de la localisation
    getWeatherByLocation: async (location) => {
        try {
            // Supposons que vous avez besoin d'une clé d'API pour accéder à l'API météo
            const apiKey = APIKeys.weatherAPIKey;

            // Construction de l'URL avec la localisation et la clé d'API
            const apiUrl =(lat,lon)=> `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=fr&units=metric`;

            // Appel à l'API pour obtenir les données météo
            const response = await axios.get(apiUrl(location.latitude,location.longitude));
            // Retourne les données reçues depuis l'API
            const data=[]
             response.data.list.map(f => {
                const dt = new Date(f.dt * 1000)
                const tempData=new WeatherData(
                    Math.round(f.main.temp),
                    f.weather[0].description,
                    f.main.humidity,
                    f.wind.speed,
                    dt,
                    dt.getHours(),
                    f.weather[0].icon,
                    format(dt, "EEEE", {
                            locale: fr
                        }),
                    response.data.city.timezone,
                    f.dt,
                    response.data.city.name,
                    Math.round(f.main.temp_max),
                    Math.round(f.main.temp_min)
                    )
                 data.push(tempData)
            })
            return data;
        } catch (error) {
            // Gestion des erreurs éventuelles
            console.error('Error fetching weather data:', error);
            throw new Error('Could not fetch weather data');
        }
    },

    getWeatherByCityName: async (cityName) => {
        try {
            // Supposons que vous avez besoin d'une clé d'API pour accéder à l'API météo
            const apiKey = APIKeys.weatherAPIKey;

            // Construction de l'URL avec la localisation et la clé d'API
            const apiUrl =(cityName)=> `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&lang=fr&units=metric`;

            // Appel à l'API pour obtenir les données météo
            const response = await axios.get(apiUrl(cityName));
            // Retourne les données reçues depuis l'API
            const data=[]
            response.data.list.map(f => {
                const dt = new Date(f.dt * 1000)
                const tempData=new WeatherData(
                    Math.round(f.main.temp),
                    f.weather[0].description,
                    f.main.humidity,
                    f.wind.speed,
                    dt,
                    dt.getHours(),
                    f.weather[0].icon,
                    format(dt, "EEEE", {
                        locale: fr
                    }),
                    response.data.city.timezone,
                    f.dt,
                    response.data.city.name,
                    Math.round(f.main.temp_max),
                    Math.round(f.main.temp_min)

                )
                data.push(tempData)
            })
            return data;
        } catch (error) {
            // Gestion des erreurs éventuelles
            if (error.response && error.response.data && error.response.data.cod === '404') {
                Toast.show({
                    type:"error",
                    text1:"La ville n\'a pas été trouvée",
                    topOffset:70,
                })
                return
            }
            console.error('Error fetching weather data:', error);
            throw new Error('Could not fetch weather data');
        }
    },
};