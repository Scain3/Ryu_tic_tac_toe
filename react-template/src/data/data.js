import React, {useState, useEffect} from 'react';
import ReactDOM, { render } from "react-dom";

const Data = (props) =>{
    const [state, setState] = useState('');


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

    return(
        <div>
            <h1>This is a function component view.</h1>
        </div>
    )

}

ReactDOM.render(<ExampleComponent />, document.getElementById('app'));
