import React, {useState} from 'react';
import {Fab, Paper, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const CreateArea = ({addNote}) => {
    const [note, setNote]=useState({
        title: "",
        content: ""
    })
    function clickHandler(){
        addNote(note);
        setNote({
            title: "",
            content: ""
        })
    }
    function changeHandler(event){
        const {name, value}=event.target;
        setNote((preValues) => {
            return {
                ...preValues,
                [name]: value,
            };
        });
    }
    return (
        <Paper elevation={4}
               style={{margin: "30px 30%", padding: "25px 50px", borderRadius: "5px"}}>
            <form>
                <TextField placeholder={"Title"}
                           fullWidth
                           autoComplete={"off"}
                           name={"title"}
                           value={note.title}
                           onChange={changeHandler}/>
                <TextField placeholder={"Content"}
                           fullWidth autoComplete={"off"}
                           multiline
                           rows={4}
                           name={"content"}
                           value={note.content}
                           onChange={changeHandler}/>
                <Fab onClick={clickHandler} style={{marginTop: "20px"}}>
                    <AddIcon/>
                </Fab>
            </form>
        </Paper>
    );
};

export default CreateArea;