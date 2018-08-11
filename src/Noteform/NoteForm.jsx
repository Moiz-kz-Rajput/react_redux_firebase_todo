import React,{Component} from 'react';
import './Noteform.css';

export default class NoteForm extends Component{
    constructor(props){
        super(props);

        this.state={
            newNoteContent:'',
        }

        this.handleUseInput = this.handleUseInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
    }

    handleUseInput(e){
        this.setState({
            newNoteContent:e.target.value, //the value of user input
        })
    }

    writeNote(){
        //call a method that sets the noteContent for a note to
        //the value of the input
       this.props.addNote(this.state.newNoteContent);
       //set newNoteContent back to an empty string.
        this.setState({
            newNoteContent:'',
        }); 
    }

    render(){
        return(
            <div className="formWrapper">
                <input className="noteInput" 
                placeholder="Write a new note..."
                value={this.state.newNoteContent} 
                onChange={this.handleUseInput}/>
                <button className='noteButton'
                onClick={this.writeNote}>Add Note</button>    
            </div>
        )
    }
}