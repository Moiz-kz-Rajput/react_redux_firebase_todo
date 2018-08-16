import fire from '../../config/config';
import 'firebase/database';
import {FETCH_NOTES,CREATE_NOTE, DELETE_NOTE} from './Types';


const Notes =  fire.database().ref().child('notes');

export function fetchNotes(){
    return dispatch=>{
        Notes.on('value',snapshot => {
            dispatch({
                type:FETCH_NOTES,
                payload:snapshot.val()
            })
        })
    }
}
export function createNote(note){
    
    return dispatch => Notes.push(note);
    

}
export function deleteNote(key){
    return dispatch => Notes.child(key).remove();
}
