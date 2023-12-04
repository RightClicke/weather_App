import weatherRepository from "../repositories/weatherRepository";
import addVillesToBDD from "./addVillesToBDD";

const GetWeatherDataByCityName = async (cityName) => {
    try {
        // Utilisation du repository pour obtenir les données météo en fonction de la localisation
        const weatherData = await weatherRepository.getWeatherByCityName(cityName);
        addVillesToBDD(cityName)
        return weatherData;
    } catch (error) {
        // Gestion des erreurs éventuelles
        console.error('Error getting weather data:', error);
        throw new Error('Could not fetch weather data');
    }
};

export default GetWeatherDataByCityName;