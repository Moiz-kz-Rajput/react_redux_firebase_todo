import React,{Component} from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component{

    constructor(props){
        super(props);
        this.noteContent = props.note;
        this.noteId = props.noteId;
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
    }
    
    handleRemoveNote(id){
        this.props.removeNote(id);
    }

    render(){
        return(
            <div className="note fade-in">
                <span className="closebtn" onClick={()=>this.handleRemoveNote(this.noteId)}>
                &times;
                </span>
                <div className="noteContent">{this.noteContent}</div>
            </div>
        )
    }

} 

Note.propTypes = {
    noteContent: PropTypes.string,
}

export default Note;