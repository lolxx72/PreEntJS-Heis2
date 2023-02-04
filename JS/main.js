alert('Bienvenido a Librerías Marie! - Elija el producto deseado a continuación:')


const Productos = [
    {   nombre : "Lapices",
        precio: 100
    },
    {
        nombre : "Cuadernillos",
        precio: 250
    },
    {
        nombre : "Lapiceras",
        precio: 150
    },
    {
        nombre : "Mochilas lisas",
        precio: 8000
    },
    {
        nombre : "Mochilas diseño variado",
        precio: 25000
    }
    ];

    let obtenerTotal = 0;

    function obtenerProducto(seleccion) {

        if (Productos.length >= seleccion) {
            return Productos[seleccion - 1];
        }

        return null;

    }

    function obtenerStringProducto(producto){
        return producto.nombre + " - $" + producto.precio + " c/u -";
    }

    function obtenerListadeProducto(){
        let lista = "";

        for (let i = 0; i < Productos.length; i++) {
            lista += `${i+1}) ${obtenerStringProducto(Productos[i])}`;
        }

        return lista;
    }

    let Carrito = {
        arrayProductos : [],
        obtenerTotal: function() {
            obtenerTotal = this.arrayProductos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
        },

        Agregar: function(producto, cantidad) {
            this.arrayProductos.push({ producto: '' , cantidad: cantidad });
        },

        Vaciar: function() {
            this.arrayProductos = [];
        }
    }

    function compraProductos(){

        let listado = parseInt(prompt(obtenerListadeProducto()));

        let producto = obtenerProducto(listado);

        if (producto != null) {
            cantidad = parseInt(prompt("Cuantas desea llevar?"));
            Carrito.Agregar(producto, cantidad);
    
            compra = parseInt(prompt('Quiere agregar mas cosas al carrito? 1)Si 2)No'))
            if( compra == 1 ){
                compraProductos();
            }
            else
            {
                alert(`Total a pagar: $${Carrito.obtenerTotal()} `)
            }
        }
        else{
            alert("Opcion Erronea");

            compraProductos();
        }
    }

    compraProductos();

    const envio = () => {

        if (obtenerTotal >= 10000) {
            alert("El envio es gratuito")
        }else{
        obtenerTotal += 1000
            alert("El costo de envio es de 1000, el total es: " + obtenerTotal)
        }
    }
