document.getElementById("heading").addEventListener("keydown", setHeader);

function setHeader(e) {
    if(e.key==="Enter") {
        document.getElementById("content").focus();
    }
}