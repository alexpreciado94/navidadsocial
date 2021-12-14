'use strict'

class Controlador{
  constructor(){
    this.vista = new Vista();
    window.onload = this.iniciar.bind(this);
  }
  iniciar(){
    this.vista.escribirDeseo(this.listaDeseos = document.getElementById('listaDeseos'));
  }
}

class Vista{
  escribirDeseo(listaDeseos){
    let p = document.createElement('p');
    let deseo = document.createTextNode('Hola, pa ti mi cola!!!');
    p.appendChild(deseo);
    listaDeseos.appendChild(p);
  }
}

class Modelo{
  constructor(){

  }
}
new Controlador();
