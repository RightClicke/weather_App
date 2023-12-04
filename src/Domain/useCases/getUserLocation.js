import * as Location from "expo-location";
import location from "../entities/Location";


const GetUserlocation = async ()=>{
    try{


    const {status} = await Location.requestForegroundPermissionsAsync()
    if(status !== "granted"){
        return  null
    }
    const userLocation = await Location.getCurrentPositionAsync()
    return new location(userLocation.coords.latitude,userLocation.coords.longitude)
    }catch (error){
        console.error('Error getting user location:', error);
        throw new Error('Could not retrieve user location');
    }
}

export default GetUserlocation