import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage {

  constructor() { }

  display = '0';
  op = '';

  numbers(num: string) {

    if (this.display === 'NaN'){
      this.display = '0';
    }

    if (this.display === '0') {
      this.display = '';
    }

    if (this.display.includes('.') && num === '.') {
      
    } else {
      this.display += num;
    }

  }

  borrar() {

    if (this.display.slice(0, -1).length > 0) {
      this.display = this.display.slice(0, -1);
    } else {
      this.display = '0';
    }
  }

  limpiarDisplay(){
    this.display = '0'
  }

  operacion(op: string){

    if (this.display.endsWith('+') || this.display.endsWith('-') || this.display.endsWith('*') || this.display.endsWith('/')){
      return;
    }else{
      this.display += op;
    }
  }

  igual() {
    this.display = eval(this.display);
    this.display = String(this.display) 
  }

  trigo(operador: string){
    

    if (operador === 'sen') {
      this.display = String( Math.sin( Number(this.display) * (Math.PI / 180) ).toFixed(6) );
    } else if (operador === 'cos') {
      this.display = String( Math.cos( Number(this.display) * (Math.PI / 180) ).toFixed(6) );
    } else if (operador === 'tan') {
      this.display = String( Math.tan( Number(this.display) * (Math.PI / 180) ).toFixed(6) );
    }

  }

}
