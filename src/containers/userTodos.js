import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions';
import Note from '../Note/Note';
import NoteForm from '../Noteform/NoteForm';
import './css/login.css';
import fire from '../config/config';

class UserTodos extends Component {

  constructor(props){
    super(props);
    
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);


    // We're going to setup the React state of our component
    this.state = {
      userId:'',
    }
  }

    componentWillMount(){
      this.props.fetchNotes();
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

    addNote(note){
      this.props.createNote({noteContent: note});
    }



    removeNote(noteId){
      this.props.deleteNote(noteId);
    }

    renderNotes(){
      return _.map(this.props.notes,(obj,key)=>{
        
        // let noteContent = obj.noteContent;
        // let newNoteContent = noteContent.newNoteContent;
        let objNote = obj.noteContent;
        let noteContent = objNote && objNote.newNoteContent;
        let uId = objNote && objNote.userId;
        if(uId && uId===this.state.userId){
          if(noteContent!==undefined){
          return( 
            <Note key={key} note={noteContent} noteId={key}  removeNote ={this.removeNote}/>       
          ) 
          }
        }
      })
    }

    logout(){
        fire.auth().signOut();
    }

  render() {
    return (
      <div className="notesWrapper row">
        <div className="row">
        <button className="btn btn-danger col-xs-offset-9 col-sm-offset-10 col-md-offset-10" onClick={this.logout}>logout</button>
        </div>
      
        <h1 className="heading row">React & Firebase To-do List</h1>
      
      <div className="row">
        <NoteForm addNote={this.addNote}/>
      </div>
      <div className="row">
      {this.renderNotes()}
      </div>
      
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    notes:state.notes,
  }
}

export default connect(mapStateToProps,actions)(UserTodos);
