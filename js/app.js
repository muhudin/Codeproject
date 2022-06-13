$(document).ready(function(){
  $(".bi").hover(function(){
    $(this).css("color", "black");
    }, function(){
    $(this).css("color", "yellow");
    
    
  });
 
});





  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDP3ODEYYtOi3d_KjuVBo7itSTeJcSC_Ns",
    authDomain: "form-1ad81.firebaseapp.com",
    databaseURL: "https://form-1ad81-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "form-1ad81",
    storageBucket: "form-1ad81.appspot.com",
    messagingSenderId: "470299712012",
    appId: "1:470299712012:web:927818814b15b4b737ec29",
    measurementId: "G-9XZJPRK3J0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// Canteact Info app

 var contactInfo = firebase.database().ref("infos");




document.querySelector("#contactForm").addEventListener("submit", submidForm);

function submidForm(e) {
    e.preventDefault();

    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var phone = document.querySelector("#phone").value; //name").value;
    var message = document.querySelector("#message").value;
    console.log(name, email, phone, message);

  // saveContactInfo
    saveContactInfo(name, email, phone, message);


    // show alert 

document.querySelector(".alert").style.display = 'block';

 // hide alert message

 setTimeout (function () {
  document.querySelector(".alert").style.display = 'none';
 },3000);



 document.getElementById('contactForm').reset();

 
}




// Save Infos to Firebase and

function saveContactInfo(name, email, phone, message) {
 var newContactInfo = contactInfo.push();
  
 newContactInfo.set({
     name: name,
     email: email,
     phone: phone,
     message: message
 });

}
