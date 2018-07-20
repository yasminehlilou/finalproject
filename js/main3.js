
// Initialize Firebase
var config = {
    apiKey: "AIzaSyA8geOA-fUbJfQDR58-1LxED3Tqxmbc3Ug",
    authDomain: "tabhirti-a8a47.firebaseapp.com",
    databaseURL: "https://tabhirti-a8a47.firebaseio.com",
    projectId: "tabhirti-a8a47",
    storageBucket: "tabhirti-a8a47.appspot.com",
    messagingSenderId: "973510027172"
  };
  firebase.initializeApp(config);
 
 
 document.getElementById('contactForm').addEventListener('submit',submitForm);
 function submitForm(e){
    e.preventDefault();
    console.log("hello");
    var email= input('email');
    var nom = input('nom');
    var prenom  = input ('prenom');
    var a= input('tel');
   
 saveMessage(email,nom);
 document.getElementById('contactForm').reset();
 }
 function input(id){
    return document.getElementById(id).value
 }
 
  var messageRef =firebase.database().ref('messages');
 
  function saveMessage(email, prenom,nom, tel)
  {
      var newMessageRef=messageRef.push();
      newMessageRef.set({
          email:email,
          nom:nom,
          tel:tel,
          prenom:prenom,
      })
  }
 
 
 
 
 
 
 
 
  