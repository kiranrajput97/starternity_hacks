let listOfRecentContacts = document.getElementsByClassName("_3j7s9");
console.log("listOfRecentContacts.length = " + listOfRecentContacts.length);
var eventToSwitchMessageBox = new MouseEvent('mousedown', {
    bubbles: true,
});
let count =1;
let openMessageBox = setInterval(function(){
    // if(count>listOfRecentContacts.length) {
    if(count>5) {
        console.log("Clearing interval with clearInterval...");
        clearInterval(openMessageBox);
    }
    listOfRecentContacts[count].dispatchEvent(eventToSwitchMessageBox);
    console.log("Opening message box of " + listOfRecentContacts[count].getElementsByClassName("_1wjpf")[0].title + " -> " + count);

    // let textToSend = "Hello " + listOfRecentContacts[count-1].getElementsByClassName("_1wjpf")[0].title + ". I hope you are doing great. This is an autogenerated message from Bisso. Please Ignore. Do not reply.";
    let textToSend = "Hello. Wish you a very happy new year from team trinity. PS: Ignore this message I am testing out a program.";

    let textbox = document.querySelector('div._2S1VP');
    let sendMessageEvent = new InputEvent('input', {
        bubbles: true
    });
    textbox.textContent =textToSend;
    textbox.dispatchEvent(sendMessageEvent);
    document.querySelector("button._35EW6").click();  
    count++;
 }, 3000);
