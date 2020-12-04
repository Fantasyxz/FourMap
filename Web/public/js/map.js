// Initialize Variable
var database = firebase.database();

var e11 = document.getElementById('E11');
var e12 = document.getElementById('E12');
var e13 = document.getElementById('E13');
var e14 = document.getElementById('E14');

var f11 = document.getElementById('F11');
var f12 = document.getElementById('F12');
var f13 = document.getElementById('F13');
var f14 = document.getElementById('F14');
var f15 = document.getElementById('F15');

var g11 = document.getElementById('G11');
var g12 = document.getElementById('G12');
var g13 = document.getElementById('G13');
var g14 = document.getElementById('G14');
var g15 = document.getElementById('G15');

var d11 = document.getElementById('D11');
var d12 = document.getElementById('D12');
var d13 = document.getElementById('D13');
var d14 = document.getElementById('D14');
var d15 = document.getElementById('D15');

var h11 = document.getElementById('H11');
var h12 = document.getElementById('H12');
var h13 = document.getElementById('H13');
var h14 = document.getElementById('H14');
var h15 = document.getElementById('H15');

e11.addEventListener('click', (e) => {
  var id = 1;
  var ruangRef = database.ref('ruang/' + id);
  ruangRef.on('value', showData, showError);
});

e12.addEventListener('click', (e) => {
  var id = 2;
  var ruangRef = database.ref('ruang/' + id);
  ruangRef.on('value', showData, showError);
});

e13.addEventListener('click', (e) => {
  var id = 3;
  var ruangRef = database.ref('ruang/' + id);
  ruangRef.on('value', showData, showError);
});

e14.addEventListener('click', (e) => {
  var id = 4;
  var ruangRef = database.ref('ruang/' + id);
  ruangRef.on('value', showData, showError);
});

f11.addEventListener('click', (e) => {
  var id = 5;
  var ruangRef = database.ref('ruang/' + id);
  ruangRef.on('value', showData, showError);
});

f12.addEventListener('click', (e) => {
  var id = 6;
  var ruangRef = database.ref('ruang/' + id);
  ruangRef.on('value', showData, showError);
});

f13.addEventListener('click', (e) => {
  var id = 7;
  var ruangRef = database.ref('ruang/' + id);
  ruangRef.on('value', showData, showError);
});

f14.addEventListener('click', (e) => {
  var id = 8;
  var ruangRef = database.ref('ruang/' + id);
  ruangRef.on('value', showData, showError);
});

f15.addEventListener('click', (e) => {
  var id = 9;
  var ruangRef = database.ref('ruang/' + id);
  ruangRef.on('value', showData, showError);
});

g11.addEventListener('click', (e) => {
  var id = 10;
  var ruangRef = database.ref('ruang/' + id);
  ruangRef.on('value', showData, showError);
});

g12.addEventListener('click', (e) => {
  var id = 11;
  var ruangRef = database.ref('ruang/' + id);
  ruangRef.on('value', showData, showError);
});

g13.addEventListener('click', (e) => {
  var id = 12;
  var ruangRef = database.ref('ruang/' + id);
  ruangRef.on('value', showData, showError);
});

g14.addEventListener('click', (e) => {
  var id = 13;
  var ruangRef = database.ref('ruang/' + id);
  ruangRef.on('value', showData, showError);
});

g15.addEventListener('click', (e) => {
  var id = 14;
  var ruangRef = database.ref('ruang/' + id);
  ruangRef.on('value', showData, showError);
});

d11.addEventListener('click', (e) => {
  var id = 15;
  var ruangRef = database.ref('ruang/' + id);
  ruangRef.on('value', showData, showError);
});

d12.addEventListener('click', (e) => {
  var id = 16;
  var ruangRef = database.ref('ruang/' + id);
  ruangRef.on('value', showData, showError);
});

d13.addEventListener('click', (e) => {
  var id = 17;
  var ruangRef = database.ref('ruang/' + id);
  ruangRef.on('value', showData, showError);
});

d14.addEventListener('click', (e) => {
  var id = 18;
  var ruangRef = database.ref('ruang/' + id);
  ruangRef.on('value', showData, showError);
});

d15.addEventListener('click', (e) => {
  var id = 19;
  var ruangRef = database.ref('ruang/' + id);
  ruangRef.on('value', showData, showError);
});

h11.addEventListener('click', (e) => {
  var id = 20;
  var ruangRef = database.ref('ruang/' + id);
  ruangRef.on('value', showData, showError);
});

h12.addEventListener('click', (e) => {
  var id = 21;
  var ruangRef = database.ref('ruang/' + id);
  ruangRef.on('value', showData, showError);
});

h13.addEventListener('click', (e) => {
  var id = 22;
  var ruangRef = database.ref('ruang/' + id);
  ruangRef.on('value', showData, showError);
});

h14.addEventListener('click', (e) => {
  var id = 23;
  var ruangRef = database.ref('ruang/' + id);
  ruangRef.on('value', showData, showError);
});

h15.addEventListener('click', (e) => {
  var id = 24;
  var ruangRef = database.ref('ruang/' + id);
  ruangRef.on('value', showData, showError);
});


function showData(items) {
  var data = document.getElementById('data-map');
  var content = "";

  items.forEach(function(child){
    content += "<ul>";
    content += 	"<li> Ruangan : " + child.val().ruangan + "</li>";
    content += 	"<li> waktu   : " + child.val().time + "</li>";
    content += 	"<li> Kelas   : " + child.val().kelas + "</li>";
    content += 	"<li> Matpel  : " + child.val().matpel + "</li>";
    content += 	"<li> Status  : " + child.val().status + "</li>";
    content += "<ul>";
  });

  data.innerHTML = content;
}

function showError(err) {
  console.log(err)
}

  // note : baca data pake dataRef terus panggil status nah statusnya jadiin statement
  var id = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
  var statusRef = database.ref('ruang/' + id[0]);
  statusRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
      var a = child.val().status;
      if(a == "dipakai"){
        $('#E11').css({'background':'red'});
      }
    });
  });

  var statusRef = database.ref('ruang/' + id[1]);
  statusRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
      var a = child.val().status;
      if(a == "dipakai"){
        $('#E12').css({'background':'red'});
      }
    });
  });

  var statusRef = database.ref('ruang/' + id[2]);
  statusRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
      var a = child.val().status;
      if(a == "dipakai"){
        $('#E13').css({'background':'red'});
      }
    });
  });

  var statusRef = database.ref('ruang/' + id[3]);
  statusRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
      var a = child.val().status;
      if(a == "dipakai"){
        $('#E14').css({'background':'red'});
      }
    });
  });

  var statusRef = database.ref('ruang/' + id[4]);
  statusRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
      var a = child.val().status;
      if(a == "dipakai"){
        $('#F11').css({'background':'red'});
      }
    });
  });
  
  var statusRef = database.ref('ruang/' + id[5]);
  statusRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
      var a = child.val().status;
      if(a == "dipakai"){
        $('#F12').css({'background':'red'});
      }
    });
  });

  var statusRef = database.ref('ruang/' + id[6]);
  statusRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
      var a = child.val().status;
      if(a == "dipakai"){
        $('#F13').css({'background':'red'});
      }
    });
  });

  var statusRef = database.ref('ruang/' + id[7]);
  statusRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
      var a = child.val().status;
      if(a == "dipakai"){
        $('#F14').css({'background':'red'});
      }
    });
  });
  
  var statusRef = database.ref('ruang/' + id[8]);
  statusRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
      var a = child.val().status;
      if(a == "dipakai"){
        $('#F15').css({'background':'red'});
      }
    });
  });

  var statusRef = database.ref('ruang/' + id[9]);
  statusRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
      var a = child.val().status;
      if(a == "dipakai"){
        $('#G11').css({'background':'red'});
      }
    });
  });

  var statusRef = database.ref('ruang/' + id[10]);
  statusRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
      var a = child.val().status;
      if(a == "dipakai"){
        $('#G12').css({'background':'red'});
      }
    });
  });

  var statusRef = database.ref('ruang/' + id[11]);
  statusRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
      var a = child.val().status;
      if(a == "dipakai"){
        $('#G13').css({'background':'red'});
      }
    });
  });

  var statusRef = database.ref('ruang/' + id[12]);
  statusRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
      var a = child.val().status;
      if(a == "dipakai"){
        $('#G14').css({'background':'red'});
      }
    });
  });

  var statusRef = database.ref('ruang/' + id[13]);
  statusRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
      var a = child.val().status;
      if(a == "dipakai"){
        $('#G15').css({'background':'red'});
      }
    });
  });

  // Ruang D
  var statusRef = database.ref('ruang/' + id[14]);
  statusRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
      var a = child.val().status;
      if(a == "dipakai"){
        $('#D11').css({'background':'red'});
      }
    });
  });

  var statusRef = database.ref('ruang/' + id[15]);
  statusRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
      var a = child.val().status;
      if(a == "dipakai"){
        $('#D12').css({'background':'red'});
      }
    });
  });

  var statusRef = database.ref('ruang/' + id[16]);
  statusRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
      var a = child.val().status;
      if(a == "dipakai"){
        $('#D13').css({'background':'red'});
      }
    });
  });

  var statusRef = database.ref('ruang/' + id[17]);
  statusRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
      var a = child.val().status;
      if(a == "dipakai"){
        $('#D14').css({'background':'red'});
      }
    });
  });

  var statusRef = database.ref('ruang/' + id[18]);
  statusRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
      var a = child.val().status;
      if(a == "dipakai"){
        $('#D15').css({'background':'red'});
      }
    });
  });

  // Ruang H
  var statusRef = database.ref('ruang/' + id[19]);
  statusRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
      var a = child.val().status;
      if(a == "dipakai"){
        $('#H11').css({'background':'red'});
      }
    });
  });

  var statusRef = database.ref('ruang/' + id[20]);
  statusRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
      var a = child.val().status;
      if(a == "dipakai"){
        $('#H12').css({'background':'red'});
      }
    });
  });

  var statusRef = database.ref('ruang/' + id[21]);
  statusRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
      var a = child.val().status;
      if(a == "dipakai"){
        $('#H13').css({'background':'red'});
      }
    });
  });

  var statusRef = database.ref('ruang/' + id[22]);
  statusRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
      var a = child.val().status;
      if(a == "dipakai"){
        $('#H14').css({'background':'red'});
      }
    });
  });

  var statusRef = database.ref('ruang/' + id[23]);
  statusRef.on('value', function(snapshot){
    snapshot.forEach(function(child){
      var a = child.val().status;
      if(a == "dipakai"){
        $('#H15').css({'background':'red'});
      }
    });
  });

  // ref.child(key).on('value', function(snapshot){
  // refID.child(snap.key).on('value', function(){

  //  });
  // });

  