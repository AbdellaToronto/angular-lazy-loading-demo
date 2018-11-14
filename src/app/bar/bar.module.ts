import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BarService } from '../bar.service';

@Component({
  template: `This is the Bar View`
})
export class BarComponent {}


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: BarComponent
    }
  ])],
})
export class BarRouting { }

@NgModule({
  imports: [
    CommonModule,
    BarRouting
  ],
  providers: [BarService],
  declarations: [BarComponent]
})
export class BarModule { }
