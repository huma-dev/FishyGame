
function setUserScore(user, level, score)
{
	
	var myFirebaseRef = new Firebase("https://gmdemoapp.firebaseio.com/user");
	
var hopperRef = myFirebaseRef.child(user);
	
  if (level == "1" )
  {
hopperRef.update
({
	
	 "level1": score
  });
  
  }

  if (level == "2" )
  {
hopperRef.update
({
	
	 "level2": score
  });
  }
  


}
/*
function setUserInfo(){
	var myFirebaseRef = new Firebase("https://gmdemoapp.firebaseio.com");
	myFirebaseRef.set({
  title: "Hello World!",
  author: "Firebase",
  location: {
    city: "San Francisco",
    state: "California",
    zip: 94103
  }
});
}

function getUserInfo(user, pass){
var data = null;
var key = null;
var ref = new Firebase("https://gmdemoapp.firebaseio.com/user");
ref.orderByChild("loginName").equalTo(user).on("child_added", function(snapshot) {
  if (pass == snapshot.val().password)
  {
	  console.log("verified");
      return "valid";
  }
  else
  {
	  console.log("invalid");
	  return "invalid";}
});
}

function getUserScore(user, level){
	
var data = null;
var key = null;
var ref = new Firebase("https://gmdemoapp.firebaseio.com/user");
ref.orderByChild("loginName").equalTo(user).on("child_added", function(snapshot) {
  console.log( snapshot.child("score/level1").val());
  if (level == "1")
  return snapshot.child("score/level1").val();
  if (level == "2")
  return snapshot.child("score/level2").val();
  if (level == "3")
  return snapshot.child("score/level3").val();
  
});
}

function  getLecture(lecName)
{	var lecText;
	var myFirebaseRef = new Firebase("https://gmdemoapp.firebaseio.com/"+lecName);
	myFirebaseRef.once("value", function(snapshot) {
	var a = snapshot.numChildren()
	 console.log("num of slidef of the lec = "+a);
	

	//lecText += snapshot.child("slide1"+i);
	for (i = 1; i <=  a ; i ++)
	{
		lecText += snapshot.child("slide"+i).val();
		
	}
	console.log(lecText);

	});
		return lecText;
}



function getTotalQuestions(level){
	
	var myFirebaseRef = new Firebase("https://gmdemoapp.firebaseio.com/questions/"+level+"");
	myFirebaseRef.once("value", function(snapshot) {
	var a = snapshot.numChildren()
	 console.log("num of questions of the user "+level+"= "+a);
	});
 

}
function setUserScore(user, level,score)
{
	
	var myFirebaseRef = new Firebase("https://gmdemoapp.firebaseio.com");
	
var hopperRef = myFirebaseRef.child(user);
hopperRef.update
({
	
  if (level == "1")
  {
	  "level1": score;
}
else if{
	"level2": score;
}
else
{
  "level3": score;
}
alert("in update");
});
}
*/