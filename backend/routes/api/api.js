const express = require('express');
const asyncHandler = require('express-async-handler');
const fetch = require('node-fetch');
const router = express.Router();


//Get All NFL Player Data
router.get('/', asyncHandler(async(req, res) => {
    //Get the token
    const getAll = await fetch('https://drive.google.com/file/d/1304_41h2fuJ96fOam6eowowOd65vihve/view?usp=sharing', {

    })
        .then(res => res.json())
        //Get all of the players data by using temptoken
        .then(data => {
            console.log('data', data)
            return data
        })
        .catch(error => console.log(error));


        return res.json(
            getAll
        )
}))

module.exports = router;
