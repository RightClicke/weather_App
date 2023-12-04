



import db from "./firebaseConfig";

const FirebaseService = {

    // Fonction pour écrire des données dans Firestore
    writeVilleDataToFirestore: (city) => {
           db.collection("villes").doc(city).set({nom:city},{merge:true})
    },

    // Fonction pour lire des données depuis Firestore
    readVilleDataFromFirestore: () => {
          const villes=db.collection("villes")
        .get()
        .then((result => result.docs))
        .then(docs=>docs.map(doc=>(
            {
            name:doc.id,
        })))
        .then(villes=>{
            return villes
        })
    return villes
    },

    // Autres opérations Firestore...
};

export default FirebaseService;