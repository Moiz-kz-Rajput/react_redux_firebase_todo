import React,{Component} from 'react';
import {fire,config} from '../config/config';

export default class ResetPassword extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(config.apiKey);
        return(
            <div></div>
        )
    }
}