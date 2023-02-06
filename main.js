const { createApp } = Vue;

createApp({

  data() {

    return {
      helloWorld: "Hello world",
      anyo: undefined,
      mensaje: "",
      personas: [
        {
          nombre: "Camilo",
          año: 2002
        },
        {
          nombre: "José",
          año: 2009
        },
        {
          nombre: "Sebastian",
          año: 1995
        },
        {
          nombre: "Luis",
          año: 2014
        },
        {
          nombre: "Andersson",
          año: 1997
        },
      ],
      intento:undefined,
      fin: false
    };

  },
  methods: {

    // tomar año de nacimiento
    anyoNacimiento() {
      const r = Math.floor(Math.random() * 5)
      this.anyo = this.personas[r].año;
      console.log(this.anyo);
    },

    // pista
    pista() {
      const dif = this.anyo - this.intento;
      const prueba = dif * Math.sign(dif);

      if(dif < 10){
        console.log('estas cerca');
      }
      else if(dif <= 10 && dif <20){
        console.log('estas un poco lejos');
      }
      console.log(prueba);
    },

    /** 
     Validamos si el año ingresado es mayor, menor o el correcto, además de que 
     Se este dentro de los 7 intentos permitidos.
    
    **/
    validar(){
      if(this.intento <= 7){
        //verificamos si es mayor o menor
        if(this.anyo > this.persona.año || this.anyo < this.persona.año){
          if(this.anyo > this.persona.año ){
            this.mensaje = "el año ingresado es mayor"
            console.log(mensaje)
  
          }else if(this.anyo < this.persona.año){
            this.mensaje = "el año ingresado es menor"
            console.log(this.mensaje)
  
          }
          //aumentamos el contador de intentos
          intento ++;

        }
        else{
          //el año digitado es igual al escogido.
          this.mensaje = "correcto"
          console.log(this.mensaje)
          //guardar el dato

          //seteamos el intento
          this.intento=0;

        }
        this.intento++;

      }else{
        //el intento es mayor a 7
        this.mensaje = "juego terminado"
        console.log(this.mensaje)
        this.fin = true
      }
    }



  },


  mounted() {
    console.log("App has been mounted");

  },
}).mount("#root");


