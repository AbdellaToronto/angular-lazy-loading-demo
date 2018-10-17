import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooService } from '../foo.service';
import { SharedService } from '../shared.service';


@Component({
  template: `
    This is the Foo View
    <h2>Some Shared Service Data:</h2>
    {{shared.data}}
  `
})
export class FooComponent {
  constructor(public shared: SharedService) {}
}


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: FooComponent
    }
  ])],
})
export class FooRouting { }

@NgModule({
  imports: [
    CommonModule,
    FooRouting
  ],
  providers: [FooService],
  declarations: [FooComponent]
})
export class FooModule { }
