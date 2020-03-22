// import express from 'express';
// import getAllUsers from "./controllers/users";
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(5000, () => {
 console.log("server running in 5000 port");
});

app.get('/',function (req, res) {
    response = {
        error: true,
        code: 200,
        msg: 'Start here'
    }
    res.send(response);
  });

app.get('/users',function (req, res) {

  try {
    const users = require('./controllers/userController');
  
    users.getAllUsers().then((result) =>{
    
      data = {
        msg: result.msg,
        code: result.code,
        data: result.data,
      }
      res.send(data);
  
    });
    
  } catch (error) {
    data = {
      msg: 'error',
      code: 500,
    }
    res.send(data);
  }

});

app.post('/users',function(req,res) {
  try {
    const users = require('./controllers/userController');
    users.createUser(req.body).then((result) =>{
    
      data = {
        msg: result.msg,
        code: result.code,
        data: result.data,
      }
      res.send(data);
  
    });
    // console.log(users);
    
  } catch (error) {

    data = {
      msg: 'error',
      code: 500,
    }
    
    res.send(data);
  }

});

app.put('/users', function(req,res){
  try {
    const users = require('./controllers/userController');
    users.updateUser(req.body)
      .then((result) =>{
      res.send(result);
  
    });
  } catch (error) {
    data = {
      msg: 'error',
      code: 500,
    }
    
    res.send(data);
  }
})

app.delete('/users', function(req,res){
  try {
    const users = require('./controllers/userController');
    users.deleteUser(req.body)
      .then((result) =>{
      res.send(result);
  
    });
  } catch (error) {
    data = {
      msg: 'error',
      code: 500,
    }
    
    res.send(data);
  }
})

app.get('/profiles',function (req, res) {

  try {
    const profile = require('./controllers/profileController');
  
    profile.then((result) =>{
    
      data = {
        msg: result.msg,
        code: result.code,
        data: result.data,
      }
      res.send(data);
  
    });
    
  } catch (error) {
    console.log(error);
    
    data = {
      msg: 'error',
      code: 500,
    }
    res.send(data);
  }

});



  app.use(function(req, res, next) {
    response = {
     error: true, 
     code: 404, 
     msg: 'URL no found'
    };
    res.status(404).send(response);
   });