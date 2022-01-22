//alert("Hier ist die JS-Datei!")

$( "#mydiv" ).text( "Hallo Welt in DIV" )
$( "#mytext" ).text( "Hallo Welt in P" )

$( "#button" ).click(function(){
    alert("funktionier!")
})




let testdiv = document.getElementById("mydiv")
let testtext = document.getElementById("mytext")
let testbutton = document.getElementById("button")


testdiv.innerHTML("JS to DIV")
testtext.innerHTML("JS to TEXT")


testbutton.addEventListener("click", function () {
    alert("funktionier!")
})