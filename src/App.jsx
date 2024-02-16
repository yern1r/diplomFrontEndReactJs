import Quiz from "./Quiz/Quiz";
import {kazakhLanguageQuiz} from "./Quiz/constant";
// import Map from "./Map/Map";

function App(){
   
    // return  <Map/>;
    return  <Quiz questions={kazakhLanguageQuiz.questions}/>;
}

export default App;