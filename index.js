
index.js
// Fügt einen Event-Listener zum Element mit der ID 'dropoffType' hinzu, der auf das 'change'-Ereignis reagiert.
document.getElementById('dropoffType').addEventListener('change', function () {
    // Holt das Element mit der ID pickupInfo.
    const pickupInfo = document.getElementById('pickupInfo');
    // Überprüft, ob der ausgewählte Wert pickup ist.
    if (this.value === 'pickup') {
        // Wenn ja, wird der Anzeige-Stil auf block gesetzt, um das Abhol-Informationsfeld sichtbar zu machen.
        pickupInfo.style.display = 'block';
    } else {
        // Andernfalls wird der Anzeige-Stil auf 'none' gesetzt, um es auszublenden.
        pickupInfo.style.display = 'none';
    }
});

// Fügt einen Event-Listener zum Formular mit der ID clothesForm hinzu, der auf das submit-Ereignis reagiert.
document.getElementById('clothesForm').addEventListener('submit', function (event) {
    // Verhindert das Standardverhalten des Formulars (das Neuladen der Seite).
    event.preventDefault();
    // Ruft die Werte aus den verschiedenen Formularfeldern ab, die für die persönliche Abgabe relevant sind.
    const dropoffClothesType = document.getElementById('dropoffClothesType').value;
    const dropoffDatum = document.getElementById('dropoffDatum').value;
    const dropoffPlace = document.getElementById('dropoffPlace').value;
    const dropoffType = document.getElementById('dropoffType').value;
    const dropoffUhrzeit = document.getElementById('dropoffUhrzeit').value;
    const dropoffZone = document.getElementById('dropoffZone').value;

    // Deklariert Variablen für Abholinformationen, die später bei Bedarf befüllt werden.
    let pickupClothesType, pickupZip, pickupStreet, pickupStreetNumber, pickupZone;
    // Überprüft, ob der Abgabetyp pickup (Abholung) ist.
    if (dropoffType === 'pickup') {
        // Wenn ja, werden die Werte der Abholfelder den entsprechenden Variablen zugewiesen.
        pickupCity = document.getElementById('pickupCity').value;
        pickupClothesType = document.getElementById('pickupClothesType').value;
        pickupDatum = document.getElementById('pickupDatum').value;
        pickupStreet = document.getElementById('pickupStreet').value;
        pickupStreetNumber = document.getElementById('pickupStreetNumber').value;
        pickupUhrzeit = document.getElementById('pickupUhrzeit').value;
        pickupZip = document.getElementById('pickupZip').value;
        pickupZone = document.getElementById('pickupZone').value;
    }

    // Erstellt ein leeres Array, um Fehlermeldungen zu speichern.
    let errors = [];

    // Überprüft, ob der Abgabetyp 'donate' (persönliche Abgabe) ist.
    if (dropoffType === 'donate') {
        // Wenn ja, prüft es, ob die notwendigen Felder ausgefüllt sind und fügt eine Fehlermeldung hinzu, falls nicht.
        if (!dropoffDatum || !dropoffUhrzeit || !dropoffPlace) {
            errors.push('Bitte füllen Sie Datum, Uhrzeit und Ort für die Abgabe aus.');
        }
    }

    // Überprüft, ob der Abgabetyp pickup (Abholung) ist.
    if (dropoffType === 'pickup') {
        // Wenn ja, prüft es, ob die Postleitzahl mit '84' beginnt.
        if (!pickupZip.startsWith('84')) {
            // Fügt eine Fehlermeldung hinzu, wenn die Postleitzahl nicht mit 84 beginnt.
            errors.push('Postleitzahl muss für eine Abholung mit 84 beginnen.');
        }
        // Prüft, ob alle notwendigen Abholfelder ausgefüllt sind und fügt eine Fehlermeldung hinzu, falls nicht.
        if (!pickupCity || !pickupDatum || !pickupStreet || !pickupStreetNumber || !pickupUhrzeit || !pickupZip) {
            errors.push('Bitte füllen Sie Datum, Uhrzeit, Strasse, Hausnummer, Postleitzahl und Stadt für die Abholung aus.');
        }
    }

    // Überprüft, ob Fehlermeldungen vorhanden sind.
    if (errors.length > 0) {
        // Zeigt die gesammelten Fehlermeldungen in einem Alert-Fenster an.
        alert(errors.join('\n'));
        // Beendet die Funktion, um die weitere Verarbeitung zu verhindern.
        return;
    }

    /* 
    // Auskommentierter Alert-Dialog für eine englische Erfolgsmeldung. 
    alert('Submission successful! For a summary of your donation, please close this window (click on  "OK").'); 
    */
    // Zeigt eine Erfolgsmeldung auf Deutsch an.
    alert('Übermittlung erfolgreich! Eine Zusammenfassung Ihrer Spende erscheint in einem separaten Fenster/einer separaten Registerkarte (klicken Sie auf „OK“).');

    // Überprüft, ob der Abgabetyp 'pickup' (Abholung) ist.
    if (dropoffType === 'pickup') {
        // Öffnet ein neues Fenster für die Zusammenfassung.
        const summaryWindow = window.open('', '_blank');
        // Schreibt eine Überschrift in das neue Fenster.
        summaryWindow.document.write("<h2>Zusammenfassung der Abholung</h2>");
        // Schreibt die gesammelten Abholdaten in das neue Fenster.
        summaryWindow.document.write("Art der Kleidung: " + pickupClothesType + "<br>");
        summaryWindow.document.write("Krisenzone: " + pickupZone + "<br>");
        summaryWindow.document.write("Datum: " + pickupDatum + "<br>");
        summaryWindow.document.write("Uhrzeit: " + pickupUhrzeit + "<br>");
        summaryWindow.document.write("Strasse: " + pickupStreet + "<br>");
        summaryWindow.document.write("Hausnummer: " + pickupStreetNumber + "<br>");
        summaryWindow.document.write("Postleitzahl: " + pickupZip + "<br>");
        summaryWindow.document.write("Stadt: " + pickupCity + "<br>");
    }

    // Überprüft, ob der Abgabetyp 'donate' (persönliche Abgabe) ist.
    if (dropoffType === 'donate') {
        // Öffnet ein neues Fenster für die Zusammenfassung.
        const summaryWindow = window.open('', '_blank');
        // Schreibt eine Überschrift in das neue Fenster.
        summaryWindow.document.write("<h2>Zusammenfassung der Abgabe</h2>");
        // Schreibt die gesammelten Abgabedaten in das neue Fenster.
        summaryWindow.document.write("Art der Kleidung: " + dropoffClothesType + "<br>");
        summaryWindow.document.write("Krisenzone: " + dropoffZone + "<br>");
        summaryWindow.document.write("Datum: " + dropoffDatum + "<br>");
        summaryWindow.document.write("Uhrzeit: " + dropoffUhrzeit + "<br>");
        summaryWindow.document.write("Ort: " + dropoffPlace + "<br>");
        /* Schließt den Dokumentstrom im neuen Fenster oder in einer neuen Registerkarte und stellt somit sicher, dass alle Inhalte gerendert werden und weitere Schreibvorgänge verhindert werden. */
        // Schließt das Dokument, um das Laden abzuschließen.
        summaryWindow.document.close();
    }
});
