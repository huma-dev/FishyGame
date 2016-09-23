function  createUser(varUser, varPass)
{
	var myFirebaseRef = new Firebase("https://gmdemoapp.firebaseio.com/user");
	myFirebaseRef.child(varUser).set({
   loginName: varUser,
  password: varPass,
    level1: "undefined",
    level2: "undefined",
    level3: "undefined"
});
}
