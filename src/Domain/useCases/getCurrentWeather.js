import {isSameDay} from "date-fns";


const getCurrentWeather = (data) => {
    const currentW = data?.filter(forecast => {
        const today = new Date().getTime() + Math.abs(forecast.timeZone * 1000)
        const forecastDate = new Date(forecast.dt * 1000)
        return isSameDay(today, forecastDate)
    })
    // return currentW[0]
    return data[0]
}

export default getCurrentWeather