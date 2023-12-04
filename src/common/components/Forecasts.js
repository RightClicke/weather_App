import {useEffect, useState} from "react";
import {ScrollView, Text, View, StyleSheet} from "react-native";
import Forecast from "./Forecast";
import getForecast from "../../Domain/useCases/getForecast";


const Forecasts = ({data}) => {
    const [forecasts, setForcasts] = useState([])
    useEffect(() => {
        setForcasts(getForecast(data))
    }, [data])
    return (
        <ScrollView
            className={"px-4"}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            {
                forecasts && forecasts.map((f, index) => {
                    return (
                        <View key={index}>
                            <View>
                                <Forecast forecast={f.data[0]} key={index}/>
                            </View>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}

export default Forecasts

