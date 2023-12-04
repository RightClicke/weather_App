class WeatherData {

    constructor(temperature, description, humidity, windSpeed,date,hour,icon,name,timeZone,dt,city, tempMax,tempMin) {
        this.temperature = temperature;
        this.description = description;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.date = date;
        this.hour = hour;
        this.icon = icon;
        this.name = name;
        this.timeZone = timeZone;
        this.dt= dt;
        this.city=city;
        this.tempMax = tempMax;
        this.tempMin=tempMin;
    }

    // Méthodes pour accéder aux données météorologiques


}

export default WeatherData;