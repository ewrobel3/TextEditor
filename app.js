document.getElementById("heading").addEventListener("keyup", setHeader);

function setHeader(e) {
    if(e.key==="Enter") {
        document.getElementById("content").focus();
    }
}

document.getElementById("heading").innerHTML = 
    localStorage["title"] || ""; //default text
document.getElementById("content").innerHTML = 
    localStorage["text"] || ""; //default text

setInterval(function() {
    //function that is saving the InnerHTML of the div
    localStorage["title"] = document.getElementById("heading").innerHTML; // heading div
    localStorage["text"] = document.getElementById("content").innerHTML; // content div
}, 1000);