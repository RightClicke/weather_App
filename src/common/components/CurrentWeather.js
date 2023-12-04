import React, {useEffect, useState} from "react";
import {View, Text, Image} from "react-native"
import getIcons from "../../Domain/useCases/getIcons";
import getCurrentWeather from "../../Domain/useCases/getCurrentWeather";

const CurrentWeather = ({data}) => {
    const [currentWeather, setCurrentWeather] = useState(null)

    useEffect(() => {

        setCurrentWeather(getCurrentWeather(data))
        // setCurrentWeather(data[0])
    }, [data])

    return (
        <View className=" flex items-center h-3/5">
            <Text className={"font-medium text-5xl text-white"}>{currentWeather?.city}</Text>
            <Text className={"text-2xl font-normal text-white"}>Aujourd'hui</Text>
            {/*<Image className={"w-72 h-72 "} source={{uri: getIcons(currentWeather?.icon)}}/>*/}
            {/*balise image pour icon personalisé*/}
            <View className={"h-72 justify-center"}>
                {
                    currentWeather?.icon&&
                    <Image  source={ getIcons(currentWeather?.icon,"X2")}/>
                }
            </View>
            <Text className={"text-7xl font-bold text-white"}>{Math.round(currentWeather?.temperature)}°C</Text>
            <Text className={"font-bold text-2xl text-white mt-4 capitalize"}>{currentWeather?.description}</Text>
            <View className={"flex-row gap-6 "}>
                <Text className={"font-bold text-2xl text-white"}><Text className={"text-blue-400"}>Min : </Text>{currentWeather?.tempMin}°C</Text>
                <Text className={"font-bold text-2xl text-white"}><Text className={"text-orange-400"}>Max : </Text>{currentWeather?.tempMax}°C</Text>
            </View>
        </View>
    )
}


export default CurrentWeather


