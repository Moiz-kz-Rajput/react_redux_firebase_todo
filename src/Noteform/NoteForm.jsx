import React,{Component} from 'react';
import './Noteform.css';
import fire from '../config/config'; 

export default class NoteForm extends Component{
    constructor(props){
        super(props);

        this.state={
            newNoteContent:'',
            userId:'',
        }

        this.handleUseInput = this.handleUseInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
    }

    componentDidMount(){
        this.authListener();
    }

    authListener(){
        fire.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({userId:user.uid});
                // localStorage.setItem('user',user.uid)
            }else{
                this.setState({userId:null});
                // localStorage.removeItem(user);
            }
        })
      }

    handleUseInput(e){
        this.setState({
            newNoteContent:e.target.value, //the value of user input
        })
        
    }

    writeNote(){
        //call a method that sets the noteContent for a note to
        //the value of the input
    //    this.props.addNote(this.state.newNoteContent);
       this.props.addNote(this.state);
       //set newNoteContent back to an empty string.
        this.setState({
            newNoteContent:'',
        }); 
    }

    render(){
        return(
            <div className="formWrapper col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-9 col-xs-offset-1">
                <input className="noteInput col-xs-12 col-sm-12" 
                placeholder="Write a new note..."
                value={this.state.newNoteContent} 
                onChange={this.handleUseInput}/>
                <button className='noteButton col-sm-12 col-xs-12'
                onClick={this.writeNote}>Add Note</button>    
            </div>
        )
    }
}