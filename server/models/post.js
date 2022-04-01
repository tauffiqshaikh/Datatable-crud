const mongoose = require('mongoose')

const PostSchema  = mongoose.Schema({
  name : {
    type :String,
    required : true
  },
  website : {
    type :String,
    required : true
  },
  phone : {
    type :Number,
    required : true
  },
  address : {
    type :String,
    required : true
  },
  city : {
    type :String,
    required : true
  },
  state : {
    type :String,
    required : true
  },
  country : {
    type :String,
    required : true
  },
  edit :{
    type : String,
    required : true
  }
})

module.exports = mongoose.model('Posts', PostSchema)