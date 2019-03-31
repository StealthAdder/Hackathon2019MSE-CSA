  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBu7YnTS6eiEDSoPWqwOA8iTjP-cmLTGus",
    authDomain: "csa-dded3.firebaseapp.com",
    databaseURL: "https://csa-dded3.firebaseio.com",
    projectId: "csa-dded3",
    storageBucket: "csa-dded3.appspot.com",
    messagingSenderId: "871212535733"
  };

  firebase.initializeApp(config);

  var imran = 18;

  const dbRef = firebase.database().ref().child('object'); 
  dbRef.on('value', snap => console.log(snap,val()));

var SCI
var ART
var COM