import firebaseService from "../../infrastructure/database/firebase/firebaseService";

const addVillesToBDD=(city)=>{
    firebaseService.writeVilleDataToFirestore(city)

}

export default addVillesToBDD