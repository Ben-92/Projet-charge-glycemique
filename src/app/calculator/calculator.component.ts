import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlimentService } from '../aliment.service';
import { PortionService } from '../portion.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  alimentList =  this.alimentService.aliments;
  portionList = this.portionService.portions;

  portionTotal = this.portionService.portionTotal;

  addPortionForm : FormGroup;

  

  
  constructor(
    private alimentService : AlimentService, 
    private formBuilder: FormBuilder,
    private portionService : PortionService) {
    
    this.addPortionForm = this.formBuilder.group({
      nameP : '',
      weightP: 0.0
    })

   }

  ngOnInit() {
    let tot = 0;
    for (let ind=0; ind < this.portionService.portions.length; ind++){
     /*console.log(this.portionService.portions[ind])*/
        tot= tot + this.portionService.portions[ind].cg;
    }
    this.portionTotal = Math.round(tot*100)/100;
  }

  onSubmite(a) {
/*
    console.warn(a);
    console.warn(a.nameP);
    console.warn(a.weightP);

    console.warn(a.nameP.name);
    console.warn(a.nameP.ig);
    console.warn(a.nameP.carbs);
    */

    let portionProto = {
      name : a.nameP.name,
      ig : a.nameP.ig,
      carbs : a.nameP.carbs,
      cg : Math.round((a.weightP/100*a.nameP.ig)*100)/100
    }

  /*paragraphe 1 ou paragraphe 2 marche */

    /* paragraphe 1*/
    const portionObject = Object.create(portionProto);
    /*console.log(portionObject);*/
    this.portionList.push(portionObject); 
    
  
  /*ici paragraphe 2
  this.portionList.push(portionProto);
  */

    /* ci-dessous autre option du paragraphe 2
   this.portionService.portions.push(portionProto);
   */

  /*
  console.log(this.portionTotal);
  */

  /*
  console.log(this.portionList.length);
  console.log(this.portionList);
  */

  let tot = 0;
  for (let ind=0; ind < this.portionService.portions.length; ind++){
   /*console.log(this.portionService.portions[ind])*/
      tot= tot + this.portionService.portions[ind].cg;
  }
  
  this.portionTotal = Math.round(tot*100)/100;
  console.log(this.portionTotal);

  }

  deletePortion(j){
      
   this.portionService.portions.splice(j,1)

   let tot = 0;
   for (let ind=0; ind < this.portionService.portions.length; ind++){
    /*console.log(this.portionService.portions[ind])*/
       tot= tot + this.portionService.portions[ind].cg;
   }
   this.portionTotal = Math.round(tot*100)/100;

  }

}
