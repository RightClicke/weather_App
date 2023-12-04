import {WeatherAPIDataSource} from "../../infrastructure/data-sources/weatherAPIDataSource";

const WeatherRepository = {
    // Méthode pour obtenir les données météo en fonction de la localisation
    getWeatherByLocation: async (location) => {
        try {
            // Appel à la source de données météo pour obtenir les données en fonction de la localisation
            const weatherData = await WeatherAPIDataSource.getWeatherByLocation(location);
            return weatherData;
        } catch (error) {
            // Gestion des erreurs éventuelles
            console.error('Error fetching weather data:', error);
            throw new Error('Could not fetch weather data');
        }
    },

    getWeatherByCityName: async (cityName) => {
        try {
            // Appel à la source de données météo pour obtenir les données en fonction de la localisation
            const weatherData = await WeatherAPIDataSource.getWeatherByCityName(cityName);
            return weatherData;
        } catch (error) {
            // Gestion des erreurs éventuelles
            console.error('Error fetching weather data:', error);
            throw new Error('Could not fetch weather data');
        }
    },
};

export default WeatherRepository
