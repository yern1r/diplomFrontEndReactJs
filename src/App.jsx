import Quiz from "./components/Quiz/Quiz";
import {kazakhLanguageQuiz} from "./components/Quiz/constant";
// import Map from "./Map/Map";

function App(){
   
    // return  <Map/>;
    return  <Quiz questions={kazakhLanguageQuiz.questions}/>;
}

export default App;