import {StatusBar} from "expo-status-bar";
import {ActivityIndicator, Image, View} from "react-native";
import fond from "../../assets/fond-espace-bleu-violet.avif";
import SearchBar from "../common/components/searchBar";
import CurrentWeather from "../common/components/CurrentWeather";
import Forecasts from "../common/components/Forecasts";
import {useContext, useEffect, useState} from "react";
import getUserLocation from "../Domain/useCases/getUserLocation";
import getWeatherData from "../Domain/useCases/getWeatherData";
import {WeatherDataContext} from "../common/context/RenderweatherDataContext";
import SaveCity from "../common/components/saveCity";


const Home = () => {
    const [loading, setLoading] = useState(true)
    const{data,updateRenderWeatherData}=useContext(WeatherDataContext)
    useEffect(() => {
        getUserLocation().then((loc) => {
            getWeatherData(loc).then((weatherData) => {
                updateRenderWeatherData(weatherData)
                setLoading(false)
            })
        })
    }, [])



    if (loading === true) {
        return (
            <>
                <StatusBar style={"light"}/>
                <Image source={fond} className={"absolute w-full h-full z-[-10]"} blurRadius={10}/>
                <View className="flex-1 items-center justify-center">
                    <ActivityIndicator size="large" color="white"/>
                </View>
            </>
        );
    }


    return (
        <>
            <StatusBar style={"light"}/>
            <Image source={fond} className={"absolute w-full h-full z-[-10]"} blurRadius={10}/>
            <View className="flex flex-col h-full w-full mt-14">
                <SearchBar/>
                <SaveCity/>
                <CurrentWeather data={data}/>
                <Forecasts data={data}/>
            </View>
        </>
    )
}

export default Home