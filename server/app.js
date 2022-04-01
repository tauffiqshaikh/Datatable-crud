const express = require('express');
const data = require('./data')
const mongoose = require('mongoose');
const Post = require('./models/post')
const app= express();
const cors = require('cors')
const path = require('path')

mongoose.connect('mongodb://localhost:27017/CRM',()=>{
  console.log("DB CONNECTED");
})

const static_path = path.join(__dirname, '../client/home.html')

app.use(express.json())
app.use(cors());
app.use(express.static(static_path))

const button_tags ="<button onClick ='onEdit(this); window.scrollTo(0,document.body.scrollHeight);' class='btn btn-warning' >Edit</button>&nbsp<button onClick ='onDelete(this)' class='btn btn-danger' >Delete</button>"


app.get('/api/company',(req,res)=>{
  console.log(static_path);
  Post.find()
  .then(data=>{res.json(data)})
})

app.post('/api/company/',(req,res)=>{
  const post = new Post({
    name : req.body.name,
    website : req.body.website,
    phone : req.body.phone,
    address : req.body.address,
    city : req.body.city,
    state : req.body.state,
    country : req.body.country,
    edit : button_tags
  });
  post.save()
  
  res.json(post)
})

app.delete('/api/company/:name',async(req,res)=>{
  const deleted = await Post.deleteOne({name : req.params.name})
  console.log(deleted);
  res.send('deleted')
})

app.patch('/api/company/:name',async(req,res)=>{
  const updated = await Post.updateOne(
    {name : req.params.name},
    {$set:{
      name : req.body.name,
      website : req.body.website,
      phone : req.body.phone,
      address : req.body.address,
      city : req.body.city,
      state : req.body.state,
      country : req.body.country
    }})
  console.log(updated);
  res.json(updated)
})

app.listen(3001,()=>{console.log(`server is listening at port 3001`);})