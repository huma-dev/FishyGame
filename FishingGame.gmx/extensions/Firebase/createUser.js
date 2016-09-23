function  createUser(varUser, varPass)
{
	//alert("HelloWrld create User");
	
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
