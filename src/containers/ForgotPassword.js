import React,{Component} from 'react';
import './css/login.css'
export default class ForgotPassword extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
        }
    }

    render(){
        console.log(this.state.email);
        return(
            <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12">
            <div className="form-container">
            <div className="form-group">
            <input type="email" name='email' value={this.state.email}  onChange={(e)=>this.setState({email:e.target.value})} className="form-control" placeholder="Enter your email" aria-describedby="sizing-addon1"/>
            </div>
            <button type="button" onClick={this.login} className="btn btn-success">SignIn</button>            
            </div>
            </div>
        )
    }
}