import Header from "./Header";
import React, {useState} from 'react';
import Note from "./Note";
import CreateArea from "./CreateArea";

const App = () => {
    const [notes, setNotes]=React.useState([]);
    let [searchedNotes, setSearchedNotes]= React.useState([]);
    function addNote(note){
        setNotes((preNotes) => {
            return [...preNotes, note];
        })
    }
    function delNote(id){
        setNotes(preNotes => {
            return preNotes.filter((note, index) => {
                return index !== id;
            })
        })
    }
    function search(text){
        const searchedNotes=notes.filter((note)=> {return note.title.includes(text) || note.content.includes(text)})
        setSearchedNotes(searchedNotes);

    }
    if(searchedNotes.length>0){
        return (
            <div>
                <Header search={search}/>
                <CreateArea addNote={addNote}/>
                {searchedNotes.map((note, index) => {
                    return (
                        <Note id={index} title={note.title} content={note.content} delNote={delNote}/>
                    )
                })}
            </div>
        )
    }
    else {
        return (
            <div>
                <Header search={search}/>
                <CreateArea addNote={addNote}/>
                {notes.map((note, index) => {
                    return (
                        <Note id={index} title={note.title} content={note.content} delNote={delNote}/>
                    )
                })}
            </div>
        )
    }
}

export default App;
