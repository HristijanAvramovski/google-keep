import React from 'react';
import {Button, Paper} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Header = ({search}) => {
    const [text, setText]=React.useState({text: ""});
    function changeHandler(event){
        const searchText=event.target.value;
        setText({text: searchText.toString()})
    }
    console.log(text);
    function clickHandler(){
        search(text.text)
    }
    return (
            <Paper square style={{padding: "5px", display: "flex"}} elevation={4}>
                <img className={"logo"} src={"https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"} alt={"logo"}/>
                <h1>Keep</h1>
                <form>
                    <input className={"search"} type={"text"} name={"search"} placeholder={"Search"} onChange={changeHandler}/>
                    <Button onClick={clickHandler}><SearchOutlinedIcon style={{color: "dimgrey"}}/></Button>
                </form>
            </Paper>
    );
};

export default Header;