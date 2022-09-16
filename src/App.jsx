import React from "react";
import Signup from "./components/sign-up/sign-up"
import Signin from "./components/sign-in/sign-in"



class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="chatscrum">CHATSCRUM</div>
                <Signup />
                <Signin />
            </div>

        )
    }
}
export default App;