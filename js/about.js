import { dropdownText, burger, fontAwesome, createFooterYear, createFooter, createHeader } from "./utils.js";

document.addEventListener('DOMContentLoaded', function() {
    createHeader();
    createFooter();
    createFooterYear();
    fontAwesome();
    burger();
    const darnellDiv = document.querySelectorAll('.darnell-div-header');
    darnellDiv.forEach(value => dropdownText(value));
});