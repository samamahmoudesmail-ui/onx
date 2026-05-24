const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();

app.use(cors());
app.use(express.json());

const users = [
  {  email:'test@test.com',
    password:'123456'
  }
];

app.post('/login',(req,res)=>{

  const {email,password} = req.body;

  const user = users.find(u=>u.email===email && u.password===password);

  if(!user){
    return res.status(401).json({message:'Invalid Credentials'});
  }const token = jwt.sign({email},'SECRET_KEY');

  res.json({token});

});

app.listen(5000,()=>{
  console.log('Server Running');
});
