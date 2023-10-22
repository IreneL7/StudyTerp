
var counter = 1;

function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(counter++);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = document.getElementById('firstName').value;
    cell2.innerHTML = document.getElementById('lastName').value;
    cell3.innerHTML = document.getElementById('UID').value;
    cell4.innerHTML = document.getElementById('courses').value;
  }
