import { Component, OnInit } from '@angular/core';
import { AlimentService } from '../aliment.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-aliment-list',
  templateUrl: './aliment-list.component.html',
  styleUrls: ['./aliment-list.component.css']
})
export class AlimentListComponent implements OnInit {

  alimentList =  this.alimentService.aliments

  addAlimentForm; /* aussi addAlimentForm : Formgroup */

  constructor(private alimentService : AlimentService, private formBuilder: FormBuilder) {

    this.addAlimentForm = this.formBuilder.group({
      name : '',
      ig: 0,
      carbs : 0.0
    })
   }

  ngOnInit() {
  }

  onSubmit(alimentData) {
    // Process checkout data here
    console.warn('votre aliment a été ajouté', alimentData);
    console.warn('votre aliment a été ajouté', alimentData.name);
    console.warn('votre aliment a été ajouté', alimentData.ig);
    console.warn('votre aliment a été ajouté', alimentData.carbs);

    //window.alert('votre aliment a été ajouté');

    /* this.alimentList.push(alimentData); */
    this.alimentService.aliments.push(alimentData);


    this.addAlimentForm.reset();
  }

  deleteAliment(i){
    /*
    console.log('index: ' + i);
    */
    this.alimentService.aliments.splice(i,1)

  }

}
