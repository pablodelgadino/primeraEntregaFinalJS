class item{
        constructor (nombreItem, precio, cantidad){
            this.nombreItem = nombreItem;
            this.precio = precio;
            this.cantidad= cantidad; 
        } 
    }
    
    const listaItems= [];
   
    function pedidoDeDatos(){
    let nombreItem = prompt ("Ingrese el nombre del item")
    nombreItem = nombreItem.toUpperCase()
    while (nombreItem =="") {
        nombreItem = prompt("Por favor, no olvide ingresar el nombre del item")
        }
    let precio = parseInt (prompt ("Ingrese el precio del item"))
    while (precio =="") {
        precio = prompt("Por favor, no olvide ingresar el precio del item")
        }
    let cantidad = parseInt (prompt ("Ingrese la cantidad de items"))
    while (cantidad =="") {
        cantidad = prompt("Por favor, no olvide ingresar la cantidad del item")
        }
        listaItems.push (new item (nombreItem, precio,cantidad ))
    }

    function otropedido(){
        let otroItem = prompt ('¿Desea ingresar otro item? "SI", "NO" O "VERMAS" para ver mas opciones')

        otroItem = otroItem.toUpperCase()

        while (otroItem !='VERMAS') 
        {
        switch (otroItem) {
                    case 'SI':
                        pedidoDeDatos()
                    break;
                    case 'NO':
                        final()
                    break;
                    default:
                    break; 
                    }
        otroItem = prompt ('¿Desea ingresar otro item? "SI", "NO" O "VERMAS"')      
        otroItem = otroItem.toUpperCase()
        }

    }
    

    function final(){
        let listaFinal = ' '
         for (i=0;i < listaItems.length ;i++ )
    {
        listaFinal= listaFinal + ' ' + (i+1) + ' - '  + 'Nombre: ' + listaItems[i].nombreItem + ' ' + ' - ' + 'Precio: ' + ' $ '  + listaItems[i].precio + ' ' + ' - ' + ' '  + 'Cantidad: ' + listaItems[i].cantidad + '\n';
    }
    alert (listaFinal)
    }

    function suma(){

        sumaAlmacenadaTotal=0;
        let sumaAlmacenada = prompt ('¿Desea saber cuanto dinero lleva invertido en cada producto de su inventario? "SI" o "NO" ')

        sumaAlmacenada = sumaAlmacenada.toUpperCase()

        if (sumaAlmacenada == 'SI') {
            let sumaProductos = ' '
                for (i=0;i < listaItems.length ;i++ ) {
                sumaAlmacenadaTotal=sumaAlmacenadaTotal + (listaItems[i].precio * listaItems[i].cantidad)
                sumaProductos= sumaProductos + ' ' + (i+1) + ' - '  + 'Nombre: ' + listaItems[i].nombreItem + ' ' + ' - ' + 'Precio x Cantidad: ' + ' $ '  + (listaItems[i].precio * listaItems[i].cantidad)  + '\n'; 
                }
                    alert (sumaProductos + "La suma total es: $" +sumaAlmacenadaTotal )
            }
            else{
                alert ("Gracias por usar nuestro contador");
            }  
    }



    alert ('Bienvenido al contador de items para inventario')
    
    pedidoDeDatos()
    otropedido()
    suma();

