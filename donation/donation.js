function copyPhrase() {
    
    var phraseText = document.getElementById("phrase").textContent;
    navigator.clipboard.writeText(phraseText);
    
    var copyIcon = document.getElementById("copyIcon");
    var copiedIcon = document.getElementById("copiedIcon");
    
    copyIcon.style.display = "none";
    copiedIcon.style.display = "inline-block";
    x
}