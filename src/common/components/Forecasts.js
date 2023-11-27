import {useEffect, useState} from "react";
import {format} from "date-fns";
import {fr} from "date-fns/locale";
import {ScrollView, Text} from "react-native";


const Forecast = ({data}) => {
const [forecasts,setForcasts]=useState([])
    useEffect(() => {
        const forcastsData = data.list.map((f) => {
            const dt = new Date(f.dt * 1000)
            return ({
                date: dt,
                hour: dt.getHours(),
                temp: Math.round(f.main.temp),
                icon: f.weather[0].icon,
                name: format(dt, "EEEE", {
                    local: fr
                })
            })
            setForcasts(forcastsData)
        })
    }, [data])
    return (
        <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
            {
                forecasts.map((f)=>{
                    return(
                        <>
                            <Text>{f.name}</Text>
                            <Text>{f.hour}</Text>
                            <Text>{f.temp}</Text>
                        </>
                    )
                })
            }
        </ScrollView>
    )
}

export default Forecast