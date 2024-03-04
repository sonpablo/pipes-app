import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  //i18nSelect
  public name: string = 'Pablo';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  public changeClient() {
    this.name = 'Melisa';
    this.gender = 'female';
  }

  // i18nPlural

  public clients: string[] = [
    'maria',
    'pedro',
    'fernando',
    'hernando',
    'eduardo',
    'luisa',
    'ether',
  ];

  public clientMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  public deleteClient(): void {
    this.clients.shift();
  }

  // keyvalue pipe

  public person = {
    name: 'pablo',
    age: '34',
    address: 'arg, esp',
  };

  // async pipe

  public myObservableTimer = interval(100);

  // public promisseValue: Promise<string> = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('Tenemos data en el promesa');
  //   }, 2000);
  // });
}
