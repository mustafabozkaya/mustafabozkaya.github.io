const firebaseConfig = {
  apiKey: "AIzaSyB9mNIbqi8BCkD1XcySTk1bdSXXkomlxKM",
  authDomain: "contactform-66c45.firebaseapp.com",
  projectId: "contactform-66c45",
  storageBucket: "contactform-66c45.appspot.com",
  messagingSenderId: "412080761885",
  appId: "1:412080761885:web:ce2095ee1e3eea8420aaf4",
  measurementId: "G-NG97JH6H2F",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const db = firebase.firestore();

// Reference messages collection
var messageRef = db.collection("messages");

// listen for form  submit

document.getElementById("contactform").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  // get values
  var name = getInputVal("name");
  var email = getInputVal("email");
  var message = getInputVal("message");

  console.log(name);
  console.log(email);
  console.log(message);

  // save message to firebase
  saveMessage(name, email, message);
}

// function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// save message to firebase
function saveMessage(name, email, message) {
  const timemsg = new Date().getTime();
  var newMessageRef = messageRef.doc("_" + timemsg); // create a new document
  newMessageRef
    .set({
      name: name,
      email: email,
      message: message,
    })
    .then(function () {
      console.log("Document successfully written!");
      msgcontaier = document.getElementById("msgsuccess");
      msgcontaier.attributes.style.value = "display:block";
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });

  // clear form
  document.getElementById("contactform").reset();
}
