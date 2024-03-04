import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  public isUpperCase: boolean = false;

  public heros: Hero[] = [
    {
      name: 'superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'batman',
      canFly: false,
      color: Color.black,
    },

    {
      name: 'daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'robin',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'green lantern',
      canFly: true,
      color: Color.green,
    },
  ];

  public sortBy: keyof Hero = 'canFly';

  public toggleUpperCase(): void {
    console.log(
      '🚀 turbo-cl ⯈ file: order.component.ts:12 ⯈ OrderComponent ⯈ toggleUpperCase ⯈ toggleUpperCase: '
    );
    this.isUpperCase = !this.isUpperCase;
  }

  public changeOrder(value: keyof Hero): void {
    this.sortBy = value;
  }
}
