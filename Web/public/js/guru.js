// Register new teacher
$("#btn-register").click(function(){
  var valNip = $("#inputNIP").val();
  var valNama = $("#inputNama").val();
  var valGender = $("#inputGender").val();
  var valBidang = $("#inputBidang").val();
  var email = $("#inputEmail").val();
  var password = $("#inputPass").val();

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {  
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref('guru/' + user.uid).set({
          nip : valNip,
          nama : valNama,
          gender : valGender,
          bidang : valBidang,
          email: user.email
        });
      }
    });
  })
  .catch((error) => {
    var errorMessage = error.message;
    console.log(errorMessage);
  });
});


$("#btn-logout").click(function(){
  firebase.auth().signOut();
  window.location.href = "login.html";
});

// Read Data Function
var guruRef = firebase.database().ref().child('guru');
guruRef.on("value", function(snapshot){
  $("#data-guru").empty();
  var content = "";

  snapshot.forEach(function(childsnapshot){
    var x = childsnapshot.val();  
    content += "<tr>";
    content +=	"<td>" + x.nip  + "</td>";
    content +=	"<td>" + x.nama + "</td>";
    content +=	"<td>" + x.email + "</td>";
    content +=	"<td>"+ x.gender +"</td>";
    content +=	"<td>" + x.bidang + "</th>";
    content +=	"<td class='d-flex'>"
    content += 		"<a href='#' class='btn btn-delete btn-danger btn-sm mr-1' id='btn-delete'><i class='fas fa-trash fa-sm text-light'></i></a>";
    content +=  	"<a href='#' class='btn btn-edit btn-warning btn-sm' id='btn-edit'><i class='fas fa-edit fa-sm text-light'></i></a>";
    content += 	"</td>"
    content += "</tr>";
  });
  $("#data-guru").html(content);
});
