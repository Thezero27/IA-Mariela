// Obtener la voz femenina
function getFemaleVoice() {
    var voices = speechSynthesis.getVoices();
    // Buscar la voz específica
    var voice = voices.find(function (voice) {
        return voice.name === "Microsoft Sabina - Spanish (Mexico)";
    });
    return voice;
}



// API de Clima
const apiKey = '0b15df09486e5a9db2cf2f9a615cee08';
const ciudad = 'Tingo Maria';
var clima;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const climaActual = data;
        const temperaturaKelvin = climaActual.main.temp;
        const temperaturaCelsius = temperaturaKelvin - 273.15;
        clima = "El clima en Tingo Maria es " + temperaturaCelsius.toFixed(2) + "°C";

        // Aquí puedes realizar otras operaciones con el clima actual si es necesario
    })
    .catch(error => {
        console.error('Error al obtener los datos del clima:', error);
    });

var btnEnviar = document.getElementById("btnE");
btnEnviar.onclick = function () {
    // Preguntas NOMBRE DE IA
    var preguntaNom = "cual es tu nombre,como te llamas";
    var text = document.getElementById("text-to-speech").value;
    var valores = preguntaNom.split(",");
    var valorEncontrado = valores.find(function (valor) {
        return text.includes(valor);
    });

    // PREGUNTA SI QUIERE SER TU AMIGA   
    var pregAmiga = "puedes ser mi amiga,quiero ser tu amiga";
    var Amigos = pregAmiga.split(",");
    var valorAmigo = Amigos.find(function (valor) {
        return text.includes(valor);
    });

    // PREGUNTA QUE PELICULA RECOMIENDAS
    var pregPeli = "recuerdas ese dia tan bonito amor";
    var Pelicula = pregPeli.split(",");
    var valorPeli = Pelicula.find(function (valor) {
        return text.includes(valor);
    });

    // PREGUNTA DEL CLIMA--------   
    var pregClim = "como esta el clima,como va el clima,va llover";
    var Climax = pregClim.split(",");
    var valorClime = Climax.find(function (valor) {
        return text.includes(valor);
    });

    // REDIRECCIONAR A WEBSITE DE SEARCH-DNI
    var pregDni = "buscar dni,hallar dni,dni por nombre,consultar dni";
    var Dnisearch = pregDni.split(",");
    var valorDni = Dnisearch.find(function (valor) {
        return text.includes(valor);
    });

    //poema pregunta
    var pregPoeta = "dime un poema Merly,dime un poema";
    var Poetax = pregPoeta.split(",");
    var valorPoeta = Poetax.find(function (valor) {
        return text.includes(valor);
    });

    //informacion pregunta
    var locinfo= "dame una informacion adecuada";
    var infope = locinfo.split(",");
    var neinfo = infope.find(function (valor) {
        return text.includes(valor); 
    });

    //bonito pregunta
    var dutbonito = "dime algo bonito mariela"
    var bonitoed = dutbonito.split(",");
    var nubonito = bonitoed.find(function (valor) { 
        return text.includes(valor);
    });

    //novedoso pregunta
    var arnovedoso = "dime algo novedoso mariela"
    var ernovedoso = arnovedoso.split(",");
    var ornovedoso = ernovedoso.find(function(valor) {
        return text.includes(valor);
    })
    






    
    
    
    
    var fechaActual = new Date(); // Obtener la fecha y hora actual
    var horaExacta = fechaActual.toLocaleTimeString(); // Obtener la hora exacta en formato de cadena

    console.log(horaExacta); // Imprimir la hora exacta en la consola

    // Respuestas
    var nombreIA = "Mi nombre es Mariela y me crearon para estar a tu lado y poder ayudarte en lo que necesites";
    var friends = "No se diga más, a partir de ahora, siendo " + horaExacta + ", me declaro tu amiga incondicional";
    var fue = "No entiendo lo que me quieres decir, aún estoy en desarrollo y no logro entender muchas cosas";
    var mantenimientox = "Servicio no disponible por temas de mantenimiento Fabian esta mejorando dicho servicio, puedes revisar en la tabla los diferentes comandos";
    var peli = "lo recuerdo perfectamente,fue algo lindo y maravilloso,ademas fue lindo de tu parte,gracias hans";
    var informacion = "te brindo una informacion muy adecuado,para que luego saque tus propias conclusiones,primero que nada te hago saber que me puedes a apoyar con una colaboracion,te será agredecido muy cordialmente"
    var bonito = "bueno es dificil de explicar,pero lo intentare,eres una persona maravillosa,unico en este mundo sos espectacular,y no dejes que otras personas digan lo contrario si bebito fiu fiu"
    var novedoso = "bueno soy una persona espectacular,me gusta la literatura,los deportes,ayudar a los animales,me gustan ayudar a las personas, y para terminar ssoy una linda persona,proyectandose hacia al futuro"
    var poetiv = "el día y la noche son tan lindos,pero nada se compara a ti,ya que resplandeces la luz sobre la oscurida,eres una de las octabas maravillas del mundo,nada se compara a ti,eres la lúz de mis ojos,mi bebito fiu fiu"
    var speechSynthesis = window.speechSynthesis;
    var speechUtterance = new SpeechSynthesisUtterance();

    // Establecer la voz femenina
    speechUtterance.voice = getFemaleVoice();

    if (valorEncontrado) {
        speechUtterance.text = nombreIA;
    } else if (valorAmigo) {
        speechUtterance.text = friends;
    } else if (valorPeli) {
        speechUtterance.text = peli;
    } else if (valorClime) {
        speechUtterance.text = clima;
    } else if (valorDni) {
        speechUtterance.text = mantenimientox;
    } else if (valorPoeta) {
        speechUtterance.text = poetiv;
    } else if (neinfo) {
        speechUtterance.text = informacion;
    } else if (nubonito) {
        speechUtterance.text = bonito;
    } else if (ornovedoso) {
        speechUtterance.text = novedoso;
    } else {
        speechUtterance.text = fue;
    } 
    
    speechSynthesis.speak(speechUtterance);
};

window.speechSynthesis.onvoiceschanged = function () {
    var voices = window.speechSynthesis.getVoices();
    console.log(voices);
};