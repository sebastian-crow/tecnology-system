const { createApp } = Vue;

createApp({

  data() {

    return {
      helloWorld: "Hello world",
      anyo: undefined,
      mensaje: "",
      nombre: "",
      jugadores: [],
      intentos: [],
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
      intento: undefined,
      fin: false,
      anyoIngresado: undefined
    };

  },
  methods: {

    // tomar año de nacimiento aleatorio del array personas
    anyoNacimiento() {
      const r = Math.floor(Math.random() * 5)
      this.anyo = this.personas[r].año;
      console.log(this.anyo);
    },

    /*
    pista 
    niño < 10
    adolecente < 17
    adulto >18 && <60
    anciano < 60

    valida si el año ingresado por el usuario es el año generado aleatoriamente
    si es asi se llamara la funcion anyoNacimiento()
    de lo contrario se llamara la funcion darPista()
    */
    validarAcierto() {
      if (this.anyoIngresado == this.anyo) {
        console.log('acertaste');
        this.anyoNacimiento();
      } else {
        this.darPista();
      }
    },


    /*
    Da una pista de acuerdo al año generado por la funcion anyoNacimiento()
    y por el año ingresado por el usuario
    */
    darPista() {
      const dif = this.anyo - this.anyoIngresado;
      const rango = dif * Math.sign(dif);
      const edad = 2023 - this.anyo;

      if (edad <= 10) {
        if (rango < 5) {
          this.pista = 'Es un niño y estas muy cerca';
        } else {
          this.pista = 'Es un niño';
        }
      }

      if (edad > 10 && edad <= 17) {
        if (rango < 5) {
          this.pista = 'Es un adolescente y estas muy cerca';
        } else {
          this.pista = 'Es un adolescente';
        }
      }

      if (edad > 17 && edad < 60) {
        if (rango < 5) {
          this.pista = 'Es un adulto y estas muy cerca';
        } else {
          this.pista = 'Es un adulto';
        }
      }

      if (edad >= 60) {
        if (rango < 5) {
          this.pista = 'Es un anciano y estas muy cerca';
        } else {
          this.pista = 'Es un anciano';
        }
      }
    },

    /** 
     Validamos si el año ingresado es mayor, menor o el correcto, además de que 
     Se este dentro de los 7 intentos permitidos.
    
    **/
    validar() {
      if (this.intento <= 7) {
        //verificamos si es mayor o menor
        if (this.anyo > this.persona.año || this.anyo < this.persona.año) {
          if (this.anyo > this.persona.año) {
            this.mensaje = "el año ingresado es mayor"
            console.log(mensaje)

          } else if (this.anyo < this.persona.año) {
            this.mensaje = "el año ingresado es menor"
            console.log(this.mensaje)

          }
          //aumentamos el contador de intentos
          this.intento ++;

        }
        else {
          //el año digitado es igual al escogido.
          this.mensaje = "correcto"
          console.log(this.mensaje)
          //guardar el dato
          this.intentos.push(
            {nombre: this.persona.nombre, 
              intento: this.intento
            }
          )

          //seteamos el intento
          this.intento = 0;

        }
        
        this.intento++;

      } else {
        //el intento es mayor a 7
        this.mensaje = "juego terminado"
        console.log(this.mensaje)
        this.intentos.push(
          {nombre: this.persona.nombre,  
            intento: this.intento
          }
        )
        this.jugadores.push(
          {
            nombre: this.nombre,
            intentos: this.intentos
          }
        ) 

        localStorage.setItem('registro', JSON.stringify(this.jugadores))

        this.intento=0;
        
        this.fin = true

      }
    }



  },


  mounted() {
    let registro = JSON.parse(localStorage.getItem('registro'));

    if(registro === null){
      this.jugadores = []
    }else{
      this.jugadores = registro
    }

  },
}).mount("#root");

