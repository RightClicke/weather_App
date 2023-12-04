import RenderweatherDataContext from "./src/common/context/RenderweatherDataContext";
import Home from "./src/pages/Home";
import Toast from "react-native-toast-message";



export default function App() {



    return (
       <RenderweatherDataContext>
            <Home/>
           <Toast/>
       </RenderweatherDataContext>
    );
}


