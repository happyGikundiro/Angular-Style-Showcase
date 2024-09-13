import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { CommonModule } from '@angular/common';
import { HoverEffectDirective } from '../../Hover-directive/hover-effect.directive';

@NgModule({
  declarations: [],
  imports: [
    MainRoutingModule,
    CommonModule,
    HoverEffectDirective
  ],
})
export class MainModule { }
