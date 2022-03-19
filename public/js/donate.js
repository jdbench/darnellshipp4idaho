import {burger, fontAwesome, createFooterYear, createFooter, createHeader} from "./utils.js";
document.addEventListener("DOMContentLoaded", function() {
    createHeader(),
    createFooter(),
    createFooterYear(),
    fontAwesome(),
    burger();
    let e = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(t, m, n) {
        e[m] = n
    }),
    e.email || e.phone_number ? e.email ? document.getElementById("iframeid").src = document.getElementById("iframeid").name + "?email=" + e.email : e.phone_number ? document.getElementById("iframeid").src = document.getElementById("iframeid").name + "?phone_number=" + e.phone_number : document.getElementById("iframeid").src = document.getElementById("iframeid").name + "?email=" + e.email + "&phone_number=" + e.phone_number : document.getElementById("iframeid").src = document.getElementById("iframeid").name + "?id=" + e.id + "&user_id=" + e.user_id
});