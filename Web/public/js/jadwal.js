$("#btn-logout").click(function(){
  firebase.auth().signOut();
  window.location.href = "login.html";
});