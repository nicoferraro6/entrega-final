// ---Primer entrega proyecto final---

function CampeonesMundiales(pais, continente, vecesCampeon){
    this.pais = pais;
    this.continente = continente;
    this.vecesCampeon = vecesCampeon;
    }
    
    let uruguay = new CampeonesMundiales("Uruguay", "América", 2);
    let brasil = new CampeonesMundiales("Brasil", "América", 5);
    let italia = new CampeonesMundiales("Italia", "Europa", 4);
    let alemania = new CampeonesMundiales("Alemania", "Europa", 4);
    let francia = new CampeonesMundiales("Francia", "Europa", 2);
    let inglaterra = new CampeonesMundiales("Inglaterra", "Europa", 1);
    let espania = new CampeonesMundiales("España", "Europa", 1);
    
    console.log(uruguay, brasil, italia, alemania, francia, inglaterra, espania)
    
    
    const campeonesMundiales = ["Brasil", "Uruguay", "Italia", "Alemania", "Francia", "Inglaterra", "España"];
    
    campeonesMundiales.push("Argentina")
    
    console.log(campeonesMundiales)
    
    
    let paisesCampeones = prompt("Ingresa un país campeon mundialista")
    
    const paisCampeon = [];
    
    while (paisesCampeones != "ESC"){
        paisCampeon.push(paisesCampeones)
        paisesCampeones = prompt("Ingresa otro país campeón o ESC para finalizar")
    }
    
    for (const element of paisCampeon) {
    alert("Países campeones: " + element)
    }