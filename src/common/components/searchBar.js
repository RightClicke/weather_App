import {useContext, useState} from "react";
import {Button, Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import searchIcone from "../../../assets/icons8-search-31.png"
import {AnimatePresence, MotiView} from "moti"
import {WeatherDataContext} from "../context/RenderweatherDataContext";
import getWeatherDataByCityName from "../../Domain/useCases/getWeatherDataByCityName";
import { Keyboard } from "react-native"


const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchOn, setSearchOn] = useState(false)
    const {data,updateRenderWeatherData} =useContext(WeatherDataContext)

    const handlePopUp = () => {
        setSearchOn(!searchOn)
    }
    const handleSearch = () => {

       if(searchQuery !==''){
           getWeatherDataByCityName(searchQuery).then((weatherData)=>{
               if(weatherData !== undefined){
                   updateRenderWeatherData(weatherData)
               }
           })
           setSearchQuery('');
           setSearchOn(false);
           Keyboard.dismiss()
       }
    };
    return (
        <View className={"w-full flex "}>
            <View className={"w-full h-10 pr-4 items-end z-50"} >
                <TouchableOpacity onPress={handlePopUp}>
                    <View className={"p-6 h-10 w-10 flex justify-center items-center rounded-full"}
                          style={{backgroundColor: "rgba(255, 255, 255, 0.15)"}}>
                        <Image source={searchIcone} className={"h-8 w-8"}/>
                    </View>
                </TouchableOpacity>
            </View>

            <AnimatePresence>
                <MotiView
                    animate={searchOn ? {translateY: -35, height: 350} : {translateY: -360, height: 0}}
                    transition={searchOn? {type:"spring", stiffness: 80,}: {type: 'timing', duration: 500}}
                    style={{backgroundColor: "rgba(75, 0, 130, 0.90)", width: "100%", padding: 10, top: -100}}
                >
                    <TextInput
                        className={"w-full h-16 placeholder-black bg-white px-6 mt-40 rounded-3xl text-xl"}
                        placeholder="Entrez la ville que vous recherchez."
                        value={searchQuery}
                        onChangeText={(text) => setSearchQuery(text)}
                    />
                    <TouchableOpacity className={"w-full  p-4 rounded items-center mt-4 rounded-full"}
                                      onPress={handleSearch}
                                      style={{backgroundColor: "rgba(255, 255, 255, 0.20)"}}
                    >
                        <Text className={"text-xl font-bold text-white"}>Rechercher</Text>
                    </TouchableOpacity>
                </MotiView>
            </AnimatePresence>
        </View>
    )
}
export default SearchBar