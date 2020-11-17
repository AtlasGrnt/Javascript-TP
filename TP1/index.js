function convertir() {

    let montant = document.getElementById("montant").value;
    if (document.getElementById("deviseFRF").checked == true || document.getElementById("deviseEUR").checked == true) {
        var devise = document.querySelector('input[name=devise]:checked').value;
    }
    console.log(devise);

    if(montant != "") {
        if (devise == "EUR"){
            montant = montant*0.152;
            document.getElementById("text").innerHTML = "Après conversion on a: "+montant.toFixed(2)+" €";
        }
        else if (devise == 'FRF'){
            console.log('devise FRF')
            montant = montant*6.56;
            document.getElementById("text").innerHTML = "Après conversion on a: "+montant.toFixed(2)+" FRF";
        }
        else {
            document.getElementById("text").innerHTML = "Erreur: aucune devise saisie"
        }
    } else  {
        document.getElementById("text").innerHTML = "Erreur: aucun montant saisi"
    }
}