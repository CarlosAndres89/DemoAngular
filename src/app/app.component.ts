import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoAngular';

  cantidad = 3;

 /** Ejemplo #1*/ 

 /**developers: any[] =[];

 nombreV: any ='';
 tipoV: any ='';

 constructor(){
 }
 */

 add(){
  console.log('Add!!!! '+this.nombreV+ ','+this.tipoV);
  
  this.developers.push({
   nombre: this.nombreV,
   tipo: this.tipoV 
  });

 this.nombreV = '';
 this.tipoV='';
  
  console.log(this.developers);
    
  }
 
  
 /** Ejemplo #2*/ 
  developers: any[] =[];

  nombreV: any ='';
  tipoV: any ='';

  form: FormGroup;
 
  constructor(protected fb: FormBuilder){
    this.form = this.fb.group({
     nombre: [''],
     tipo: ['']
     

    }); 
  
  }

  add2(){
   console.log('Add!!!! '+ this.form.get('nombre')?.value + ','+this.form.get('tipo')?.value);
   
   this.developers.push({
     nombre: this.form.get('nombre')?.value,
     tipo: this.form.get('tipo')?.value
   });
    
   this.form.get('nombre')?.setValue('');
   this.form.get('tipo')?.setValue('');
   
       
   }


}
