function generateFinalCode() {
    const inputCode = document.getElementById('game-code').value;
    
    // Liste des codes de départ valides et leurs codes finaux associés
    const codesMapping = {
        "92810": "wof-92810-2024",
        "34567": "wof-34567-2024",
        "12345": "wof-12345-2024",
        "67890": "wof-67890-2024"
    };

    // Vérifie si le code entré correspond à un code valide
    if (codesMapping[inputCode]) {
        // Récupère le code final associé
        const finalCode = codesMapping[inputCode];

        // Affiche le code final
        document.getElementById('final-code').textContent = finalCode;
        document.getElementById('final-code-section').style.display = 'block';
    } else {
        alert("Code non valide. Veuillez entrer un code valide.");
    }
}
