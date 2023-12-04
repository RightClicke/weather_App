import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import getWeatherData from "../../Domain/useCases/getWeatherData";
import getUserLocation from "../../Domain/useCases/getUserLocation";

const WeatherComponent = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        // Appel du cas d'utilisation pour récupérer les données météo
           getUserLocation().then((location)=>{
               console.log(location)
               getWeatherData(location)
                   .then(data => {
                       setWeatherData(data);
                       setLoading(false);
                   })
                   .catch(error => {
                       console.error('Error fetching weather data:', error);
                       setLoading(false);
                   });
           }).catch(e=>{
               console.log("impossible de recuperer la localisation")
           })

    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {weatherData ? (
                <>
                    <Text>Temperature: {weatherData.temperature}°C</Text>
                    <Text>Description: {weatherData.description}</Text>
                    <Text>Humidity: {weatherData.humidity}%</Text>
                    <Text>Wind Speed: {weatherData.windSpeed} km/h</Text>
                </>
            ) : (
                <Text>No weather data available</Text>
            )}
        </View>
    );
};

export default WeatherComponent;