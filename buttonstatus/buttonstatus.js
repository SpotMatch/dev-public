//alert("Hier ist die JS-Datei!")

$( "#mydiv" ).text( "Hallo Welt in DIV" )
$( "#mytext" ).text( "Hallo Welt in P" )

let testdiv = document.getElementById("mydiv")
let testtext = document.getElementById("mytext")

testdiv.innerHTML("JS to DIV")
testtext.innerHTML("JS to TEXT")