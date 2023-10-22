

// action event listener when user clicks submit button, run addStudentToDatabase function


function addStudentToDatabase() {
    let fName = document.getElementById("firstName");
    let lName = document.getElementById("lastName");
    let uid = document.getElementById("UID");
    output.innerHTML = "<tr><td>"+fName+"<tr><td>"+lName+"<tr><td>"+uid;
}