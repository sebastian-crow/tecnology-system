const { createApp } = Vue;

createApp({

  data() {

    return {
      helloWorld: "Hello world",
      anyo: '',
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
      intento:''
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
    }



  },


  mounted() {
    console.log("App has been mounted");

  },
}).mount("#root");
