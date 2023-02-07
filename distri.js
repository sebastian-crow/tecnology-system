const { createApp } = Vue;

createApp({

  data() {

    return { 
        baseB1:0,
        baseB2:0,
        kilosB1: 100000,
        kilosB2: 230000,
        kilos: 0,
        base:0,
        mensaje: "a",
        caja: "Caja de Bodega 1",
        inputKl: undefined,
        inputLb: undefined,
        inputGm: undefined,
        selected:true,
        ventasB1: [],
        ventasB2: [],
        ventas: [],
        totalVentas: 0
    };

  },
  methods: {
    cajaB1(){
        this.kilos = this.kilosB1
        this.caja= "Caja de Bodega 1"
        this.base = this.baseB1
        this.selected = true
        this.ventas = this.ventasB1
        this.totalVentas = 0
        this.totalV(this.ventas)
        this.almacenado()
    },

    cajaB2(){
        this.kilos = this.kilosB2
        this.caja= "Caja de Bodega 2"
        this.base = this.baseB2
        this.selected = false 
        this.ventas = this.ventasB2
        this.totalVentas = 0
        this.totalV(this.ventas)
        this.almacenado()

    },

    vender(){
        if(this.inputGm != undefined || this.inputLb != undefined || this.inputKl != undefined){
            this.totalVentas = 0
            this.mensaje = ""
            //convertir gramos a kilos
            if(this.inputGm === undefined){
                this.inputGm = 0
            }
            let gmKl = parseInt( this.inputGm )/ 1000 
            //convertir libras a kilos
            if(this.inputLb === undefined){
                this.inputLb = 0
            }
            let lbKl = parseInt(this.inputLb )/ 2
            
            //total kilos vendidos
            if(this.inputKl === undefined){
                this.inputKl = 0
            }

            if(this.kilos > 0 ){
                this.kilos = (this.kilos - parseInt(this.inputKl) - lbKl - gmKl).toFixed(4)
                this.ventas.push(
                    parseInt(this.inputKl) + lbKl + gmKl 
                )
            }
            
            if(this.selected){
                this.kilosB1 = this.kilos
                this.ventasB1 = this.ventas
            }else{
                this.kilosB2 = this.kilos
                this.ventasB2 = this.ventas
            }
            
            this.totalV(this.ventas)
            this.inputGm = undefined
            this.inputLb = undefined
            this.inputKl = undefined
            this.almacenado()
        }else{
            this.mensaje = "LLene los campos"
        }

    },
    
    almacenado(){
        if(this.kilos < this.base*0.1){
            this.mensaje = "Almacenamiento inferior al 10%"
        }else if(this.kilos < this.base*0.5){
            this.mensaje = "Almacenamiento inferior al 50%"
        }else{
            this.mensaje = ""
        }
    },
    totalV(ventaL){
        this.ventas = ventaL
        this.ventas.map( venta => {
            this.totalVentas += venta
        })
    }


  },


  mounted() {
    this.baseB1 = this.kilosB1
    this.baseB2 = this.kilosB2
    this.cajaB1()
    this.almacenado()
    


  },
}).mount("#root");


