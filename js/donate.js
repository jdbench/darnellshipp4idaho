import { fontAwesome, createFooterYear, createFooter, createHeader } from "./utils.js";

window.onload= async function(){
    createHeader();
    createFooter();
    createFooterYear();
    fontAwesome();
}