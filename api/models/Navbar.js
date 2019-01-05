const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let NavbarLinks = new Schema(
  {
    links :[
      {
        label: {
          type: String
        },
        route: {
          type: String
        },
        href: {
          type: String
        }
      }
    ]
  }
,{
    collection: 'navbarlinks'
}); 

module.exports = mongoose.model('NavbarLinks', NavbarLinks);