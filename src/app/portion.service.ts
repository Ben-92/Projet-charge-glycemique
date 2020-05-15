import { Injectable } from '@angular/core';
import { Portion } from './portion';

@Injectable({
  providedIn: 'root'
})
export class PortionService {


  portions : Portion[] = []

  portionTotal = 0;



  constructor() { }
}
