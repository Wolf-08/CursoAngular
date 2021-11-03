(function () {
    function saludar(nombre) {
        console.log('hola', nombre);
    }
    saludar('pedro');
    //Argumentos por defecto y obligatorios
    function activar(quien, momento, objeto) {
        if (objeto === void 0) { objeto = 'batisenial'; }
        console.log(quien + " activo la " + objeto + " en la " + momento);
    }
    activar('Gordon', 'hace rato');
    //Funciones flecha 
    // Esta es una funcion tradicional...
    var miFunciont = function (parametro) {
        return parametro;
    };
    //Transformando la funcion a una funcion Flecha 
    var funcionF = function (parametro) {
        return parametro;
    };
    // Lo que hace mas beneficioso a las funciones flecha es 
    // poder quitar las llaves si solo se regresa una linea de codigo 
    var funcionF2 = function (parametro) { return parametro; };
    var funcionF3 = function (numeroa, numerob) { return numeroa + numerob; };
    console.log(funcionF3(6, 8));
    var hulk = {
        nombre: "hulk",
        smash: function () {
            var _this = this;
            setTimeout(function () {
                console.log(_this.nombre + " smashh ");
            }, 1000);
        }
    };
    hulk.smash();
    //DESTRUCTURACION DE UN OBJETO 
    var developer = {
        nivel: "basico",
        lenguaje: " python javascript",
        meta: "senior"
    };
    var nivel = developer.nivel, meta = developer.meta;
    console.log(nivel, meta);
    var EXTRAER_DATOS = function (_a) {
        var nivel = _a.nivel, meta = _a.meta;
        console.log(nivel + ' la meta es' + meta);
    };
    EXTRAER_DATOS(developer);
    //Destructuracion de un arreglo 
    var lenguajes = ['javascript', 'python', 'c',];
    var uno = lenguajes[0], dos = lenguajes[1], tres = lenguajes[2];
    console.log(uno);
    console.log(dos);
    console.log(tres);
    var EXTRAER_DATOS_ARR = function (_a) {
        var uno = _a[0], dos = _a[1], tres = _a[2];
        console.log(uno);
        console.log(dos);
        console.log(tres);
    };
    EXTRAER_DATOS_ARR(lenguajes);
    console.log('Inicio');
    //Las promesas necesitan como parametro una funcion flecha 
    //los parametros de la funcion flecha son valores que normalmente se usan 
    // cuando todo sale bien  y cuando todo sale mal resolve y reject al parecer son metodos.
    var prom1 = new Promise(function (resolve, reject) {
        //Definicion de la promesa
        setTimeout(function () {
            reject('Mensaje DE FALLO');
        }, 1000);
    });
    //then es para cachar cuando se resulve correctamente la prmeso con resolve
    //cath es para cachcar cuando no se resuelve la promesa con reject 
    prom1.then(function (mensaje) { return console.log(mensaje); })["catch"](function (err) { return console.warn(err); });
    console.log('Final');
    var retirarDinero = function (montoRetirar) {
        var dineroTotal = 1000;
        return new Promise(function (resolve, reject) {
            if (montoRetirar > dineroTotal) {
                reject('Fondos Insuficientes');
            }
            else {
                dineroTotal -= montoRetirar;
                resolve(dineroTotal);
            }
        });
    };
    retirarDinero(1500).then(function (montoActual) { return console.log("Dinero actual " + montoActual); })["catch"](function (err) { return console.warn(err); });
    var enviarMision = function (xmen) {
        console.log("Enviando a " + xmen.nombre + " a la mision");
    };
    var wolwerine = {
        nombre: "perro",
        edad: 30
    };
    enviarMision(wolwerine);
    var Avenger = /** @class */ (function () {
        //Propiedad inicializada en la clase con el valor que se le manda al momento de crear el objeto 
        function Avenger(nombre, edad, poder, puedePelear) {
            this.nombre = nombre;
            this.edad = edad;
            this.poder = poder;
            this.puedePelear = puedePelear;
        }
        return Avenger;
    }());
    var antman = new Avenger('spiderman', 45, 'piquete', true);
    console.log(antman);
    //Examen practica Curso de Angular- Typescript
    // Uso de Let y Const
    var nombre = "Ricardo Tapia";
    var edad = 23;
    var PERSONAJE = {
        nombre: nombre,
        edad: edad
    };
    var batman = {
        nombre: "Bruno Díaz",
        artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
    };
    // Convertir esta funcion a una funcion de flecha
    function resultadoDoble(a, b) {
        return (a + b) * 2;
    }
    var resultadoDobleExamen = function (a, b) { return (a + b) * 2; };
    console.log(resultadoDobleExamen(2, 3));
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = "arco"
    function getAvenger(nombre, poder, arma) {
        if (arma === void 0) { arma = 'arco'; }
        var mensaje;
        if (poder) {
            mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
        }
        else {
            mensaje = nombre + " tiene un " + arma;
        }
        return mensaje;
    }
    ;
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.
    var Rectangulo = /** @class */ (function () {
        function Rectangulo(base, altura) {
            var _this = this;
            this.base = base;
            this.altura = altura;
            //La funcion flecha va aqui porque no modifica el objeto this. :D
            this.calcularArea = function () { return _this.base * _this.altura; };
        }
        return Rectangulo;
    }());
    var rectangulo = new Rectangulo(4, 5);
    console.log(rectangulo.calcularArea());
})();
