
FAQs.js
// Wählt alle Elemente mit der Klasse "collapsible" aus und speichert sie in der Variable `coll` als HTMLCollection.
var coll = document.getElementsByClassName("collapsible");
// Deklariert eine Variable i, die als Zähler für die Schleife verwendet wird.
var i;
// Beginnt eine Schleife, die über alle Elemente in der HTMLCollection coll iteriert.
for (i = 0; i < coll.length; i++) {
    // Fügt jedem Element einen click-Event-Listener hinzu.
    coll[i].addEventListener("click", function () {
        // Fügt dem geklickten Element die Klasse active hinzu oder entfernt sie, um den Zustand zu ändern. Dies kann zum Styling verwende werden (z.B. Aenderung der Hintergrundfarbe.)
        this.classList.toggle("active");
        // Wählt das unmittelbar folgende Element (den Inhalt) aus.
        var content = this.nextElementSibling;
        // Überprüft, ob der Anzeigestil des Inhaltselements block ist (also sichtbar).
        if (content.style.display === "block") {
            // Wenn ja, ändert den Anzeigestil auf none, um es auszublenden.
            content.style.display = "none";
        } else {
            // Andernfalls ändert den Anzeigestil auf block, um es einzublenden.
            content.style.display = "block";
        }
    });
}
