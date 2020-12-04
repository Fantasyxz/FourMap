$("#btn-login").click(function(){
  var email = $("#inputEmail").val();
  var password = $("#inputPass").val();
  console.log("tes" + email + "-" + password);

  login(email, password);
});

function login(email, password){
  // firebase.auth().createUserWithEmailAndPassword(email, password)
  // .catch((error) => {
  //   var errorMessage = error.message;
  //   console.log(errorMessage);
  // });
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in
    window.location.href = "map.html";
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error.message)
  });
}