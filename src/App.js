import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './store/actions';
import Note from './Note/Note';
import NoteForm from './Noteform/NoteForm';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);


    // We're going to setup the React state of our component
    this.state = {
      notes: [],
    }
  }

    componentWillMount(){
      this.props.fetchNotes();
    }

    addNote(note){
      this.props.createNote({noteContent: note});
    }

    removeNote(noteId){
      this.props.deleteNote(noteId);
    }

    renderNotes(){
      return _.map(this.props.notes,(obj,key)=>{
      if(obj.noteContent!==undefined){
        return( 
          <Note key={key} note={obj.noteContent} noteId={key} removeNote ={this.removeNote}/>       
        )
        
      }
      })
    }

  render() {
    return (
      <div className="notesWrapper">
      <h1 className="heading">React & Firebase To-do List</h1>
      <div className="notesBody">
      {this.renderNotes()}
      </div>
      <div className="notesFooter">
        <NoteForm addNote={this.addNote}/>
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

export default connect(mapStateToProps,actions)(App);
