import { dropdownText, burger, createFooterYear, createFooter, createHeader, fontAwesome } from "./utils.js";

document.addEventListener('DOMContentLoaded', function() {
    createHeader();
    createFooter();
    createFooterYear();
    fontAwesome();
    burger();
    dropdownText();
});