// ---Primer entrega proyecto final---

    class Campeon{
        constructor (pais, continente, anio){
        this.pais = pais;
        this.continente = continente;
        this.vecesCampeon = anio;

        this.votos = [];
        }

        agregarVoto(votos){
            this.votos.push(votos);
        }

        eliminarVoto(votos){
            this.votos.pop();
        }
    }
    
    
    const campeonArgentina = new Campeon("Argentina", "America", 1986);

    campeonArgentina.agregarVoto(1);
    campeonArgentina.agregarVoto(1);
    campeonArgentina.agregarVoto(1);
    campeonArgentina.agregarVoto(1);
    campeonArgentina.agregarVoto(1);
    campeonArgentina.agregarVoto(1);

    alert("Argentina campeon del 86 recibió " + campeonArgentina.votos.length + " votos");

    