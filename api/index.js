// import express from 'express';
// import getAllUsers from "./controllers/users";
const express = require('express');
const app = express();
const bcrypt = require("bcryptjs");
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const users = require('./controllers/userController');

// ExtractJwt to help extract the token
let ExtractJwt = passportJWT.ExtractJwt;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// JwtStrategy which is the strategy for the authentication
let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'volaverum';

// create our strategy for web token
let strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
   console.log('payload received', jwt_payload);
   let user = users.getUser({ id: jwt_payload.id });
   if (user) {
     next(null, user);
   } else {
     next(null, false);
   }
 });
 // use the strategy
 passport.use(strategy);

 app.use(passport.initialize());


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

app.get('/users',passport.authenticate('jwt', { session: false }),function (req, res) {

  try {
   //  const users = require('./controllers/userController');
    
    if(!req.body.id){
      users.getAllUsers().then((result) =>{
       
         data = result.map((d) =>{
            return d.dataValues;
           });
         try {
          r = {
            msg: "ok",
            code: 200,
            data: data,
          }
          res.send(r);
        } catch (error) {
          data = {
            msg: "users no found",
            code: 400,
            data: error,
          }
          res.send(data);
        }
      });
    }else{
      users.getUser(req.body).then((result) =>{
         try {
           // console.log(result);      
           data = {
             msg: "ok",
             code: 200,
             data: result.dataValues,
           }
           res.send(data);
           
         } catch (error) {
           data = {
             msg: "user no found",
             code: 400,
             data: "",
           }
           res.send(data);
         }
     
       });
    }
      
  } catch (error) {
    data = {
      msg: 'error',
      code: 500,
      data: error,
    }
    res.send(data);
  }

});


app.post('/register',function(req,res) {
   try {
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
      console.log(error);
      
      data = {
         msg: 'error',
         code: 400,
      }
      
      res.send(data);
   }

});

app.put('/users',passport.authenticate('jwt', { session: false }) ,function(req,res){
   bcrypt.hash(req.body.password, 8)
   .then(password => {
   return password
   })
   .then(password =>{
      data={
         ...req.body,
         password: password,
      }
      return users.updateUser(data)
   })
   .then(result => {
      res.status(result.code).send(result);
   })
   .catch (errors =>{
      result = {
         msg: "error",
         code: 400,
         data: errors.message,
   };
   return result;
   });
})

app.delete('/users',passport.authenticate('jwt', { session: false }), function(req,res){
  try {
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

app.post('/login', async function(req, res){
   const { name, password } = req.body;
   if(name && password){

      // we get the user with the name and save 
      // the resolved promise returned
      await users.getUser({ name })
         .then((result) =>{
            // console.log(result);
            
            return user = result.dataValues;
            
         })
         .then(() => {
            return userpwd = bcrypt.hash(password, 8)
         })
         .then((userpwd)=>{
            console.log(userpwd);
            console.log(user.password);
            
            
            return bcrypt.compare(password, user.password);
         })
         .then(isEqual => {
            console.log(isEqual); // true
            if(isEqual){
               let payload = { id: user.id };
               let token = jwt.sign(payload, jwtOptions.secretOrKey);
               res.json({ msg: 'ok', code: 200, token: token });         
            }else{
               res.status(401).json(
                  {  msg: 'user or password invalid',
                     code: 401,
                     data:{}
                  });
            }
         }).catch(errors => {
            console.log(errors);
            
            res.status(401).json(
               {  msg: 'user or password invalid',
                  code: 401,
                  data:errors 
               }
               );
         });
      
   }
})

app.get('/profiles',passport.authenticate('jwt', { session: false }),function (req, res) {

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