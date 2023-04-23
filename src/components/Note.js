import React, {Component} from 'react';
import {Button, Fab, Paper} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({title, content, id, delNote}) => {
    function clickHandler() {
        delNote(id);
    }
    return (
        <Paper style={{minWidth: "200px", minHeight: "100px", padding: "10px", margin: "10px", display: "inline-flex"}} elevation={4}>
            <div>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
            <Button onClick={clickHandler} style={{marginLeft: "45px"}}><DeleteIcon style={{color: "red"}}/></Button>
        </Paper>
    );
}

export default Note;