let d = new Date();
let dd = String(d.getDate()).padStart(2, '0');
let m = String(d.getMonth() + 1);
let yyyy = d.getFullYear();
//find span
let yearSpan = document.getElementById("year");
//place current year in span
yearSpan.innerHTML = yyyy;