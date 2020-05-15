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

    this.calculateTotal();
    
  }

  onSubmite(portionForm) {

    let carbsProportion = Math.round(((portionForm.nameP.carbs/100)*portionForm.weightP)*100)/100;
    let calculatedGly = Math.round(((carbsProportion*portionForm.nameP.ig)/100)*100)/100;

    let portionProto = {
      name : portionForm.nameP.name,
      ig : portionForm.nameP.ig,
      carbs : carbsProportion,
      cg : calculatedGly
    }



    const portionObject = Object.create(portionProto);

    this.portionList.push(portionObject); 
    

    this.calculateTotal();


  }

  deletePortion(j){
      
   this.portionService.portions.splice(j,1);

   this.calculateTotal();

  }

  calculateTotal(){
    let tot = 0;
    for (let ind=0; ind < this.portionService.portions.length; ind++){

        tot= tot + this.portionService.portions[ind].cg;
    }
    this.portionTotal = Math.round(tot*100)/100;
  }

}
