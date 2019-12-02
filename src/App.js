import React from "react";
import "./App.css";
import { Login } from "./components/login/index";
import Home from "./components/Home/Home";
import fire from "./config/fire";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user:{},
    };
  }
  // for already signin user
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      console.log(user);
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }

  // this method will run after component is render
  componentDidMount() {
    this.authListener();
  }

  render() {
    return (
      <div className="App">
        
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {/* check the user is login or not */}
          {this.state.user ? (<Home/>):(<Login/>)}
          </div>
         
        </div>
      </div>
    );
  }
}

export default App;