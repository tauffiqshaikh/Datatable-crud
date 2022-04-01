const button_tags ="<button onClick ='onEdit(this); window.scrollTo(0,document.body.scrollHeight);' class='btn btn-warning' >Edit</button>&nbsp<button onClick ='onDelete(this)' class='btn btn-danger' >Delete</button>"

const data = [
  {
    "name" : "TSC",
    "website":"http://tsc.in",
    "phone" :9695969472,
    "address" :"Mahim",
    "city" : "Mumbai",
    "state" : "MH",
    "country" : "IN",
    "edit" : button_tags
  },
  {
    "name" : "MegaData",
    "website":"http://megadata.in",
    "phone" :9632396947,
    "address" :"Dadar",
    "city" : "Mumbai",
    "state" : "MH",
    "country" : "IN",
    "edit" : button_tags
  },
  {
    "name" : "new solutions",
    "website":"http://newsolutions.in",
    "phone" :969596947,
    "address" :"Bandra",
    "city" : "Mumbai",
    "state" : "MH",
    "country" : "IN",
    "edit" : button_tags
  },
  {
    "name" : "neo",
    "website":"http://neo.in",
    "phone" :969596947,
    "address" :"Andheri",
    "city" : "Mumbai",
    "state" : "MH",
    "country" : "IN",
    "edit" :button_tags
  },
  {
    "name" : "N-gen",
    "website":"http://ngen.in",
    "phone" :969596947,
    "address" :"Byculla",
    "city" : "Mumbai",
    "state" : "MH",
    "country" : "IN",
    "edit" : button_tags
  },
  {
    "name" : "info",
    "website":"http://info.in",
    "phone" :969593347,
    "address" :"Churchgate",
    "city" : "Mumbai",
    "state" : "MH",
    "country" : "IN",
    "edit" : button_tags
  },
  {
    "name" : "Iccenture",
    "website":"http://iccenture.in",
    "phone" :969596947,
    "address" :"Malad",
    "city" : "Mumbai",
    "state" : "MH",
    "country" : "IN",
    "edit" : button_tags
  },
  {
    "name" : "Kignozant",
    "website":"http://kingnozant.in",
    "phone" :969596947,
    "address" :"Lower Parel",
    "city" : "Mumbai",
    "state" : "MH",
    "country" : "IN",
    "edit" :button_tags
  }
]

module.exports = data