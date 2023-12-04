import {createContext, useState} from "react";

export const WeatherDataContext = createContext()
 const RenderweatherDataContext=({children})=>{
    const [data, setData] = useState(null)

    const updateRenderWeatherData = (newData)=>{
        setData(newData)
    }

    return(
        <WeatherDataContext.Provider value={{data,updateRenderWeatherData}}>
            {children}
        </WeatherDataContext.Provider>
    )

}

export default RenderweatherDataContext

