import snowIcon from "../../../assets/weatherIcon/snowIcon.png"
import sunIcon from "../../../assets/weatherIcon/sunIcon.png"
import cloudSunIcon from "../../../assets/weatherIcon/cloudSunIcon.png"
import cloudIcon from "../../../assets/weatherIcon/cloudIcon.png"
import brokenCloudIcon from "../../../assets/weatherIcon/brokenCloudIcon.png"
import rainIcon from "../../../assets/weatherIcon/rainIcon.png"
import thunderIcon from "../../../assets/weatherIcon/stormIcon.png"
import cloudNightIcon from "../../../assets/weatherIcon/cloudNightIcon.png"
import clearNightIcon from "../../../assets/weatherIcon/clearNightIcon.png"
import sunIconX1 from "../../../assets/weatherIcon/X1/sunIconX1.png"
import cloudSunIconX1 from "../../../assets/weatherIcon/X1/cloudSunIconX1.png"
import cloudIconX1 from "../../../assets/weatherIcon/X1/cloudIconX1.png"
import brokenCloudIconX1 from "../../../assets/weatherIcon/X1/brokenCloudIconX1.png"
import rainIconX1 from "../../../assets/weatherIcon/X1/rainIconX1.png"
import thunderIconX1 from "../../../assets/weatherIcon/X1/stormIconX1.png"
import cloudNightIconX1 from "../../../assets/weatherIcon/X1/cloudNightIconX1.png"
import clearNightIconX1 from "../../../assets/weatherIcon/X1/clearNightIconX1.png"
import snowIconX1 from "../../../assets/weatherIcon/X1/snowIconX1.png"

const icons = {
    "01n": { default: clearNightIcon, X1: clearNightIconX1 },
    "01d": { default: sunIcon, X1: sunIconX1 },
    "02n": { default: cloudNightIcon, X1: cloudNightIconX1 },
    "02d": { default: cloudSunIcon, X1: cloudSunIconX1 },
    "03d": { default: cloudIcon, X1: cloudIconX1 },
    "04n": { default: brokenCloudIcon, X1: brokenCloudIconX1 },
    "04d": { default: brokenCloudIcon, X1: brokenCloudIconX1 },
    "10n": { default: rainIcon, X1: rainIconX1 },
    "10d": { default: rainIcon, X1: rainIconX1 },
    "09n": { default: rainIcon, X1: rainIconX1 },
    "09d": { default: rainIcon, X1: rainIconX1 },
    "11n": { default: thunderIcon, X1: thunderIconX1 },
    "11d": { default: thunderIcon, X1: thunderIconX1 },
    "13n": { default: snowIcon, X1: snowIconX1 },
    "13d": { default: snowIcon, X1: snowIconX1 },
};

const getIcons = (icon, size) => {
    const iconSet = icons[icon];
    if (iconSet) {
        return iconSet[size] || iconSet.default;
    }
    return `https://openweathermap.org/img/wn/${icon}@4x.png`;
};

export default getIcons