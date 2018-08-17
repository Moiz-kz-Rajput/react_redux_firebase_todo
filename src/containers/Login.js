import React,{Component} from 'react';
import fire from '../config/config';
import './css/login.css';


export default class Login extends Component{
    constructor(props){
        super(props);
        
        this.state={
            email:'',
            password:'',
        }

        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
    }
    login(e){
        // console.log(this.state.email);
        // console.log(this.state.password);
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        }).catch((error)=>{
            console.log(error);
        })
    }
    
    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).catch((error)=>{
            console.log(error);
        })
    }


    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                {/* form start */}
                        
                        <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12">
                        <div className="form-container">         
                                <div className="input-group input-group-lg form-group">
                                {/* <span className="input-group-addon" id="sizing-addon1">@</span> */}
                                <input type="email" name='email' value={this.state.email}  onChange={(e)=>this.setState({email:e.target.value})} className="form-control" placeholder="Username" aria-describedby="sizing-addon1"/>
                                </div>
                               
                                <div className="input-group input-group-lg form-group">
                                {/* <span className="input-group-addon" id="sizing-addon1">pass</span> */}
                                <input type="password" name='password' value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} className="form-control" placeholder="Password" aria-describedby="sizing-addon1"/>
                                </div>
                               
                                <button type="button" onClick={this.login} className="btn btn-success">SignIn</button>&nbsp;&nbsp;&nbsp;
                                <button type="button" onClick={this.signup} className="btn btn-default">SignUp</button>
                        
                        </div>
                    </div>
                {/* form closed */}
                </div>
            </div>
        )
    }
}