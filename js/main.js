function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}










// Initialize Firebase
var config = {
    apiKey: "AIzaSyAW_i8iejPgaXljVkyHa3rPXn5FdQ64mPI",
    authDomain: "final-project-9554b.firebaseapp.com",
    databaseURL: "https://final-project-9554b.firebaseio.com",
    projectId: "final-project-9554b",
    storageBucket: "final-project-9554b.appspot.com",
    messagingSenderId: "73530627365"
  };
  firebase.initializeApp(config);

  var messagesRef = firebase.database().ref('messages');
  
  document.getElementById("contactForm").addEventListener("submit",submitForm);

  
function submitForm(e){
    e.preventDefault();
    // Get values
    var firstname = getInputVal("firstname");
    var lastname = getInputVal("lastname");
    var email = getInputVal("email");
    var message = getInputVal("message");
  
    console.log(firstname+"   "+ lastname +"   "+email + "   "+ message);
    saveMessage(firstname,lastname,email, phone);
  }

  

  function saveMessage(firstname,lastname,email,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      firstname: firstname,
      lastname:lastname,
      email:email,
      message:message
    });

    document.getElementById('cantactForm').reset();
}

function getInputVal(id){
    return document.getElementById(id).value;
    
}


database=firebase.database();
  var ref = database.ref('messages');
  ref.on('value',gotData,errData);


 
  function gotData(data){
      console.log(data);

  }

