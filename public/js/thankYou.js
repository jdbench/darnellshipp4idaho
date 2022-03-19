import {burger, fontAwesome, createFooterYear, createFooter, createHeader} from "./utils.js";
document.addEventListener("DOMContentLoaded", function() {
    createHeader(),
    createFooter(),
    createFooterYear(),
    fontAwesome(),
    burger()
});
const args = new URLSearchParams(document.location.search);
let name = args.get('name');
name = name.charAt(0).toUpperCase() + name.slice(1);
const amount = args.get('amount');
let donOut = document.getElementById('donation-text');
donOut.innerHTML = `${name}, thank you for your donation of $${amount}!`
