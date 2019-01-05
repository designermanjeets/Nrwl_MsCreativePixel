const express = require('express');
const app = express();
const msv7knwroutes = express.Router();

// Require Business model in our routes module
let NavbarLinks = require('../models/Navbar');

// Defined store route
msv7knwroutes.route('/add').post(function (req, res) {
  
  NavbarLinks.find(function(err, navlinks){
    if(navlinks.length < 1) {

      let navlinks = new NavbarLinks({
        links: req.body
      });
    
      navlinks.save()
        .then(navlinks => {
          res.status(200).json({'status' : 'Navbar Saved, Here is your Data!', data: navlinks.links});
        })
        .catch(err => {
          res.status(400).send("unable to save to navlinks");
      });
      
    } else {
      res.status(200).json({'status': "Navlinks Exists! Sending Saved Data", data:navlinks[0].links});
    }
  });
});

// Defined get data(index or listing) route
msv7knwroutes.route('/navlinks').get(function (req, res) {
  NavbarLinks.find(function (err, navlinks){
    if(err){
      console.log(err);
    }
    else {
      res.json(navlinks);
    }
  });
});

/* 
// Defined edit route
msv7knwroutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  NavbarLinks.findById(id, function (err, business){
      res.json(business);
  });
});

//  Defined update route
msv7knwroutes.route('/update/:id').post(function (req, res) {
  NavbarLinks.findById(req.params.id, function(err, next, business) {
    if (!business)
      return next(new Error('Could not load Document'));
    else {
        business.person_name = req.body.person_name;
        business.business_name = req.body.business_name;
        business.business_gst_number = req.body.business_gst_number;

        business.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
msv7knwroutes.route('/delete/:id').get(function (req, res) {
  NavbarLinks.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
}); */

module.exports = msv7knwroutes;