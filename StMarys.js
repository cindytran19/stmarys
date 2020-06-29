// St Marys

// Import file system
var fs = require('fs');

// Read in titles data
var titleData = fs.readFileSync('titles.json');
var titles = JSON.parse(titleData);
var characterData = fs.readFileSync('characters.json');
var characters = JSON.parse(characterData);

// Import Express, web framework
var express = require('express');
var app = express();

// Import understore library for querying
var _ = require('underscore');

var port = 18000;

// Set up routes
app.route('/titles').get(displayTitles);
app.route('/titles/:storyType').get(displayTitlesByStoryType);
app.route('/titles/orderBy/story').get(displayTitlesByStoryOrder);
app.route('/titles/orderBy/published').get(displayTitlesByPublishDate);
app.route('/characters').get(displayCharacters);
app.route('/characters/orderBy/name').get(displayCharactersByName); 
app.route('/characters/section/:section').get(displayCharactersBySection); 
app.route('/characters/status/:status').get(displayCharactersByStatus);
app.route('/jump').get(initiateJump);

app.listen(port, () => console.log("St. Mary's app listening at http://localhost:" + port))


// Helper Functions
function displayTitles(req, resp) {
  displayTitlesByPublishDate(req,resp);
}

function displayTitlesByStoryType(req, resp) {
  var storyType = req.params.storyType;
  console.log("Requested titles by type: "+storyType);
  var result = _.where(titles,{storyType: storyType});
  resp.send(result);
}

function displayTitlesByStoryOrder(req, resp) {
  console.log("Requested titles in sorted story order");
  var result = _.sortBy(titles,'order');
  resp.send(result);
}

function displayTitlesByPublishDate(req, resp) {
  console.log("Requested titles in sorted publish data");
  var result = _.sortBy(titles,'published');
  resp.send(result);
}

function displayCharacters(req, resp) {
  resp.send(characters);
}

function displayCharactersByName(req, resp) {
  console.log("Requested characters sorted in alphabetical order");
  var result = _.sortBy(characters,'name');
  resp.send(result);
}

function displayCharactersBySection(req, resp) {
  var sectionCharacters = req.params.section;
  console.log("Requested characters by type: "+sectionCharacters);
  var result = _.where(characters,{section: sectionCharacters});
  resp.send(result);
}

function displayCharactersByStatus(req, resp) {
  var statusCharacters = req.params.status;
  console.log("Requested characters by status: "+statusCharacters);
  var result = _.where(characters,{status: statusCharacters});
  resp.send(result);
}

function initiateJump(req, resp){
  var pod = ["1", "2", "3", "4", "5", "6", "7", "8", "TB2"];
  var randomPod = pod[Math.floor(Math.random()*pod.length)];
  var historian = ["Dr. Maxwell" , "Dr. Peterson" , "Mr. Bashford" , "Mr. Clerk" ,"Mr. Roberts" , "Miss Prentiss", "Mr. Sands", "Miss Sykes", "Mr. Atherton" , "Miss Van Owen"];
  var randomHistorian = historian[Math.floor(Math.random()*historian.length)];
  var security = ["Mr. Markham" , "Mr. Evans", "Mr. Cox", "Mr. Keller", "Mr. Gallacio", "Mr. Scott", "Mr. Gregg", "Mr. Irving"];
  var randomSecurity = security[Math.floor(Math.random()*security.length)];
  var time = ["The Peterloo Massacre of 1819", "The Fall of Troy, c.1190 BCE", "The Cretaceous Period, ~67 million years ago", 
  "The Battle of Thermopylae, 480 BCE", "The Battle of Hastings, 1066", "Stonehenge, 3000-2000 BCE", 
  "Pompeii during the eruption of Mount Vesuvius, 79 AD"];
  var randomTime = time[Math.floor(Math.random()*time.length)];
  var outcome = ["successful! St. Mary's thanks you for your service.", "a bloody mess! Have you thought of an office job?"];
  var randomOutcome = outcome[Math.floor(Math.random()*outcome.length)];
  console.log("Requested pod #" + randomPod + "historian:" + randomHistorian + "security:" +randomSecurity + "time:" + randomTime);
  resp.send("Your assignment was: " + randomTime + ". Your team was: " +randomHistorian + " and " + randomSecurity + 
  ". You took pod: " + randomPod + ". The outcome of your assignment was: " + randomOutcome);
}