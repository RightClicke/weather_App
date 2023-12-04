import firebaseService from "../../infrastructure/database/firebase/firebaseService";


const getHistory = () => {
      return   firebaseService.readVilleDataFromFirestore()

}

export default getHistory