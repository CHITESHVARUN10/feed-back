const firebaseConfig = {
  apiKey: "AIzaSyBDT_mqcq_NNkGgKDXA7wZWdtJkB5sjjKU",
  authDomain: "feed-back-d5df7.firebaseapp.com",
  databaseURL: "https://feed-back-d5df7-default-rtdb.firebaseio.com",
  projectId: "feed-back-d5df7",
  storageBucket: "feed-back-d5df7.appspot.com",
  messagingSenderId: "432809730358",
  appId: "1:432809730358:web:0b60ff8086d1068c27d397"
};

firebase.initializeApp(firebaseConfig);

var feedFormDB =firebase.database().ref('feedForm');

document.getElementById('feedForm').addEventListener("submit",submitForm);
function submitForm(e){
e.preventDefault();
var name = getElementVal("name");
var email = getElementVal("email");
var message = getElementVal("message");

saveMessages(name, email, message);




document.getElementById("feedForm").reset();
alert("Feedback sent successful!"); 
}

const saveMessages = (name, email ,message) => {
var newFeedForm = feedFormDB.push();

newFeedForm.set({
  name: name,
  email: email,
  message: message,
});
};

const getElementVal = (id) => {
return document.getElementById(id).value;
};

 