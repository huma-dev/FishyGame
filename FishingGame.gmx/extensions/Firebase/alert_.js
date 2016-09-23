function alert_fn()
{


alert("Hello World");

}


function setUserOption(user, question, answer)
{
	var myFirebaseRef = new Firebase("https://gmdemoapp.firebaseio.com/questionnaire/user");
	
var hopperRef = myFirebaseRef.child(user);
hopperRef.update
({
	
  if (question == "1")
  {
	  "question1": answer
} if (question == "2")
  {
	  "question2": answer
} if (question == "3")
  {
	  "question3": answer
} if (question == "4")
  {
	  "question4": answer
} if (question == "5")
  {
	  "question5": answer
}
});

}

/*

function  createUser(varUser, varPass)
{
	
alert("Hello World Create USer");
	/*
	var myFirebaseRef = new Firebase("https://gmdemoapp.firebaseio.com/questionnaire/user");
	myFirebaseRef.child(varUser).set({
   loginName: varUser,
  password: varPass,
    question1: "undefined",
    question2: "undefined",
    question3: "undefined",
	question4: "undefined",
	question5: "undefined"
});

}
*/