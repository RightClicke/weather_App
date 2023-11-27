import {Text, View, Image} from "react-native";
import getIcons from "../../Domain/useCases/getIcons";

const Forecast=({forecast})=>{

    return(
        <View className={"h-48 w-32 py-6 flex items-center justify-center mr-5 rounded-2xl"} style={{backgroundColor: "rgba(255, 255, 255, 0.15)"}} >
            <Text className={"text-xl text-white font-bold "}>{forecast.name}</Text>
            {/*<Image source={{uri:getIcons(forecast?.icon)}} className={"w-20 h-20"}/>*/}
            <View style={{ width: 90, height: 80, marginTop: 2, marginBottom: 2 }}>
                {
                    forecast?.icon &&
                    <Image source={getIcons(forecast?.icon,"X1")} style={{ width: 90, height: 80 , objectFit:"fill"}} />
                }
            </View>
            <Text className={"text-xl text-white font-bold "}>{forecast.temperature}°C</Text>
        </View>
    )
}
export default Forecast

