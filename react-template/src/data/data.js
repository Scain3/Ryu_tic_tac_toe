import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";

function Data(){
    const 
}

class Listing extends React{
    constructor(props){
        super(props)
        this.state = {
            records: []
        }
    }
}

componentDidMount(){
    fetch('this is the url')
        .then(response => response.json())
        .then(records => {
            this.setState({
                records: records
            })
        })
        .catch(error => console.log(error))
}
