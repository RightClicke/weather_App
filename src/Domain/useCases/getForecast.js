

const getForecast=(data)=>{
    const newForecastData=data?.map((forecast)=>{
        return forecast.name
    }).filter((day,index,self)=>{
        return self.indexOf(day)===index
    }).map((day)=>{
        return {
            day,
            data:data.filter((forecast)=>forecast.name===day)
        }
    })
    return newForecastData
}

export default getForecast