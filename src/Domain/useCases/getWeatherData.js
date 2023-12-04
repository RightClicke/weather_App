import weatherRepository from "../repositories/weatherRepository";

const GetWeatherData = async (location) => {
    try {
        // Utilisation du repository pour obtenir les données météo en fonction de la localisation
        const weatherData = await weatherRepository.getWeatherByLocation(location);
        return weatherData;
    } catch (error) {
        // Gestion des erreurs éventuelles
        console.error('Error getting weather data:', error);
        throw new Error('Could not fetch weather data');
    }
};

export default GetWeatherData;