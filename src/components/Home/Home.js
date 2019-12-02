import React from "react";
import fire from "../../config/fire";


class Home extends React.Component{
    constructor(props){
        super(props);
        this.logout=this.logout.bind(this);
        
        this.state = {
            data : null
        }
    }

    logout(){
        fire.auth().signOut();
    }
    componentDidMount(){
        fetch("http://127.0.0.1:5000").then(response => response.json()).then(data => this.setState({data:data}));
    }

    render(){
        if(this.state.data != null)
        {
        
        console.log(this.state.data)
        }
        return (
            <div className="base-container">
                <button onClick={this.logout} type="btn" >Logout</button>
                <h2>{this.state.data ==null && "News Loading..."}</h2>
                <h2>{this.state.data !=null && "The Age news"}</h2>
                {this.state.data !=null && this.state.data.the_age_news['headlines'].map((headline,i) =><div><h3 key={i}>{headline}</h3><p key={i+"a"}>{this.state.data.the_age_news['news'][i]}</p></div>)}
                <h2>{this.state.data !=null && "The Australian news"}</h2>
                {this.state.data !=null && this.state.data.the_austrailian_news['headlines'].map((headline,i) =><div><h3 key={i}>{headline}</h3><p key={i+"a"}>{this.state.data.the_austrailian_news['news'][i]}</p></div>)}

            </div>
        );
    }
}

export default Home;