import {FlatList, View, Text, TouchableOpacity} from "react-native";
import {MotiView} from "moti";
import {useContext, useEffect, useState} from "react";
import {MotiPressable} from "moti/interactions";
import {WeatherDataContext} from "../context/RenderweatherDataContext";
import getHistory from "../../Domain/useCases/getHistory";
import getWeatherDataByCityName from "../../Domain/useCases/getWeatherDataByCityName";


const SaveCity = ()=>{
    const [isOpen,setIsOpen]=useState(false)
    const [data,setData]=useState([])
    const {updateRenderWeatherData} =useContext(WeatherDataContext)
    useEffect(()=>{
        getHistory().then(history=>setData(history))
    },[data])
    const handleContainer=()=>{
        setIsOpen(!isOpen)
    }
    const handleSaveItem=(cityName)=>{
        getWeatherDataByCityName(cityName).then((weatherData)=>{
            if(weatherData !== undefined){
                updateRenderWeatherData(weatherData)
            }
        })
    }

    const ListItem = ({ item }) => (
        <TouchableOpacity className={"h-16 border-b-2 border-amber-50 px-8 pl-24 py-2"}
            onPress={()=>{handleSaveItem(item.name)}}
        >
            <Text className={"text-white text-xl text-center"}>{item.name}</Text>
        </TouchableOpacity>
    );

    return(
        <MotiView className={"w-80 absolute top-[-55] z-50 h-screen rounded-b-3xl"}
                  animate={isOpen ? {translateX: -80} : {translateX: -320}}
                  transition={isOpen? {type:"spring", stiffness: 80,}: {type: 'timing', duration: 500}}
                  style={{backgroundColor: "rgba(75, 0, 130, 0.90)"}}
        >
            <MotiPressable onPress={()=>{handleContainer()}}
            >
                <MotiView className={"absolute top-16 left-16 flex-col gap-2 z-50"}
                          animate={isOpen ? {translateX: 200} : {translateX: 275}}
                          transition={isOpen? {type:"spring", stiffness: 80,}: {type: 'timing', duration: 500}}
                >
                    <View className={"h-1.5 w-8 bg-white rounded-full"}></View>
                    <View className={"h-1.5 w-8 bg-white rounded-full"}></View>
                    <View className={"h-1.5 w-8 bg-white rounded-full"}></View>
                </MotiView>
            </MotiPressable>
            <View className={"mt-32"}>
                <FlatList className={"h-screen"}
                    data={data}
                    renderItem={({ item }) => <ListItem  item={item} />}
                />
            </View>
        </MotiView>
    )
}

export default SaveCity