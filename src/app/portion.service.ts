import { Injectable } from '@angular/core';
import { Portion } from './portion';

@Injectable({
  providedIn: 'root'
})
export class PortionService {


  portions : Portion[] = []

  portionTotal = 0;

    /*
  portions : Portion[] = [
    {
      "name": "test",
      "ig": 0,
      "carbs": 0.0,
      "cg" : 0.0
    }
  ]
  */

  constructor() { }
}
