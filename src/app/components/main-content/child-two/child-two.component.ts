import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrl: './child-two.component.scss',
  standalone: true,
  imports:[CommonModule]
})
export class ChildTwoComponent {

}
