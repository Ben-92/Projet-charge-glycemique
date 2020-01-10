import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlimentListComponent } from './aliment-list/aliment-list.component';
import { CalculatorComponent } from './calculator/calculator.component';


const routes: Routes = [{ path: '', component: AlimentListComponent }, { path: 'calculator', component: CalculatorComponent } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
