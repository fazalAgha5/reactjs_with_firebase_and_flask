import React from "react";
import loginImg from "../../login.svg";
import fire from "../../config/fire";

export class Login extends React.Component{


	constructor(props){
		super(props);
		// bind action listeners
		this.login=this.login.bind(this);
		this.dataChange=this.dataChange.bind(this);
		this.signup=this.signup.bind(this);
		this.state={
			email:"",
			password:""
		}
	}

	dataChange(e){
		this.setState({[e.target.name]: e.target.value});
	}
	login(e){
		// e.preventDefault();
		fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{}).catch((error)=>
		{
			alert("User Name or Password Wrong or User not exists");
		});
	}
	signup(e){
		fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{console.log(u)})
		.catch((error)=>{
			alert("Error while creating user");
			console.log(error);
		});

	}

	render() {
		return (
		  <div className="base-container" ref={this.props.containerRef}>
			<div className="header">Login / Register</div>
			<div className="content">
			  <div className="image">
				<img src={loginImg} />
			  </div>
			  <form>
				<div className="form-group">
				  <label htmlFor="user Email">Username</label>
					<input type="email" value={this.state.email} required onChange={this.dataChange} name="email" placeholder="Email"></input>
				</div>
				<div className="form-group">
				  <label htmlFor="password">Password</label>
				  <input type="password" value={this.state.password} required onChange={this.dataChange} name="password" placeholder="password" />
				</div>
				
				<input type="button" className="button" onClick={this.login} value="Login"/> 
				<input type="button" className="button" onClick={this.signup} value="Register"/> 	
			  
			  </form>
			</div>
			<div className="footer">
			 
			</div>
		  </div>
		);
	  }
	}