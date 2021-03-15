/*
const fs = require('fs');
const path = require('path');



function testFunc(req, res) {

}
*/

function validate(req, res) {
    console.log("안녕하세요!");
    console.log(req.query.name);
    return;
}


module.exports = {
    validate: validate
}