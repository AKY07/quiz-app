
// import { Switch } from '@material-ui/core';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import {useState} from 'react';

function App() {
  const [name,setName]=useState("");
  const fetchQuestions=()=>{

  }

  return (
    <BrowserRouter>
    <div className="app" style={{backgroundImage:"url(./ques1.png)"}}>
<Header />

<Routes>
  <Route path='/' exact element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>}> </Route>
  <Route path='/quiz' element={<Quiz/>}> </Route>
  <Route path='/result'  element={<Result/>}> </Route>
 
</Routes>
      
    </div>

    <Footer />
    </BrowserRouter>
  );
}

export default App;
