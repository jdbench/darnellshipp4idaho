import { burger, fontAwesome, createFooterYear, createFooter, createHeader } from "./utils.js";

document.addEventListener('DOMContentLoaded', function() {
    createHeader();
    createFooter();
    createFooterYear();
    fontAwesome();
    burger();
    let n={};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(e,m,d){n[m]=d});
    n.email||n.phone_number?n.email?document.getElementById("iframeid").src=document.getElementById("iframeid").name+"?email="+n.email:n.phone_number?document.getElementById("iframeid").src=document.getElementById("iframeid").name+"?phone_number="+n.phone_number:document.getElementById("iframeid").src=document.getElementById("iframeid").name+"?email="+n.email+"&phone_number="+n.phone_number:document.getElementById("iframeid").src=document.getElementById("iframeid").name+"?id="+n.id+"&user_id="+n.user_id;
});