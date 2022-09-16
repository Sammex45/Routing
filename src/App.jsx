import React from "react";
import Signup from "./components/sign-up/sign-up"
import Signin from "./components/sign-in/sign-in"
import Home from "./components/home/home"
import {BrowserRouter, Routes,Route} from 'react-router-dom'



class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <div className="App">
            <div className="chatscrum">CHATSCRUM</div>
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route path='/signin' element={<Signin />}/>
                <Route path='/signup' element={<Signup />}/>
                </Routes>
            </div>
            </BrowserRouter>
        )
    }
}
export default App;