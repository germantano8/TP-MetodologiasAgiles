var counter = 0;

var arrayPalabrasDifBajaES = ["scrum", "perro", "casa", "gato", "sol", "libro", "mesa", "amarillo", "planta", "auto"];
var arrayPalabrasDifMediaES = ["historia", "esfuerzo", "persona", "agilidad", "equilibrio", "cascada", "ceremonia", "usuario",
                                "cliente", "iteracion"];
var arrayPalabrasDifAltaES = ["simplicidad", "retrospectiva", "impresionante", "manifiesto", "colaboracion", "compromiso",
                            "refactorización", "inigualable", "requerimiento", "mantenimiento"];

var arrayPalabrasDifBajaEN = ["scrum", "daily", "sprint"];
var arrayPalabrasDifMediaEN = ["review", "refactoring", "ceremony"];
var arrayPalabrasDifAltaEN = ["retrospective", "incremental", "development"];

// Palabra que se va formando a medida que el jugador adivina
var palabra = [];
var alertShown = "";
var contadorAT = 0;

const gameMethods = {

    getRandomNumber: function(max) {
        return Math.floor(Math.random() * max);
    },

    startGame: function(){
        let language = "spanish";
        let dificultad = "baja";
        let palabraSecreta = this.getWord(language, dificultad);
        for (let i = 0; i < palabraSecreta.length; i++) {
            palabra[i] = "_";
        }
    
        for(let i = 0; i < palabraSecreta.length; i++){
            this.guess(palabra[i]);
            if(!this.counterOfAttempts(counter)){
                break;
            }
        }
    },
    
    checkWord: function(word) {
        if (word == "hola") {
            return word;
        } else {
            return "La palabra ingresada no coincide con la palabra secreta";
        }
    },
    
    checkEmptyWord: function(word) {
        if (word == "") {
            return true;
        }
        return false;
    },

    checkLetter:function(letra, palabraDePrueba){
        // Tests
        if(palabraDePrueba){
            if (palabraDePrueba.includes(letra)){
                contadorAT++;
                if (contadorAT == palabraDePrueba.length){
                    alertShown = "Felicitaciones! Haz ganado..";
                    return alertShown;
                }
                return true;
            }
            else{
                return false;
            }
        }
    },
    
    guess: function(p){
        var flag = this.counterOfAttempts(counter);
        if (flag){
            this.checkLetter(p);
        }
    },
    
    counterOfAttempts: function(numeroDeIntento){
        if (numeroDeIntento < 7){
            return true;
        }
        else{
            return false;
        }
    },    
    
    chooseLevelES: function(dificultad){
        switch(dificultad) {
            case "baja":
                return arrayPalabrasDifBajaES;
            case "media":
                return arrayPalabrasDifMediaES;
            case "alta":
                return arrayPalabrasDifAltaES;
            default:
                return arrayPalabrasDifBajaES; // Por default se juega en dificultad baja
        }
    },
    
    chooseLevelEN: function(dificultad){
        switch(dificultad) {
            case "baja":
                return arrayPalabrasDifBajaEN;
            case "media":
                return arrayPalabrasDifMediaEN;
            case "alta":
                return arrayPalabrasDifAltaEN;
            default:
                return arrayPalabrasDifBajaEN; // Por default se juega en dificultad baja
        }
    },
    
    chooseLanguage: function(language){
        if(language == "spanish"){
            return 1;
        }
        else if (language == "english"){
            return 2;
        }
    },

    getWord: function(idioma, dificultad){
        switch(true){
            case (dificultad=="baja") && (idioma=="spanish"):
            return arrayPalabrasDifBajaES[this.getRandomNumber(arrayPalabrasDifBajaES.length)];
        
        case (dificultad=="media") && (idioma=="spanish"):
            return arrayPalabrasDifMediaES[this.getRandomNumber(arrayPalabrasDifMediaES.length)];

        case (dificultad=="alta") && (idioma=="spanish"):
            return arrayPalabrasDifAltaES[this.getRandomNumber(arrayPalabrasDifAltaES.length)];

        case (dificultad=="baja") && (idioma=="english"):
            return arrayPalabrasDifBajaEN[this.getRandomNumber(arrayPalabrasDifBajaEN.length)];
            
        case (dificultad=="media") && (idioma=="english"):
            return arrayPalabrasDifMediaEN[this.getRandomNumber(arrayPalabrasDifMediaEN.length)];
    
        case (dificultad=="alta") && (idioma=="english"):
            return arrayPalabrasDifAltaEN[this.getRandomNumber(arrayPalabrasDifAltaEN.length)];
        }
    },
    
};

gameMethods.startGame();

module.exports = {gameMethods,
                   arrayPalabrasDifBajaES, arrayPalabrasDifMediaES, arrayPalabrasDifAltaES,
                   arrayPalabrasDifBajaEN, arrayPalabrasDifMediaEN, arrayPalabrasDifAltaEN};