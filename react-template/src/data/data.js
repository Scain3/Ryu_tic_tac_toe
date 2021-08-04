import React, {useState, useEffect} from 'react';
import ReactDOM, { render } from "react-dom";

function Data(){


    useEffect(() => {
        fetch('https://drive.google.com/file/d/1304_41h2fuJ96fOam6eowowOd65vihve/view?usp=sharing', {
            method: "GET"
        })
        .then(res => res.json())
        .then((data)=> {
            console.log('data', data)
        })
        .catch(error => console.log(error));
    })

    

}

export default Data;
