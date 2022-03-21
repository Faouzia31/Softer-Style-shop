import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Cloth } from '../cloth.model';

export class ClothService {
  private cloths: Cloth[] = [
    {
      id: 1,
      name: 'T-shirt',
      price: 10,
      size: 'L',
      link: 'assets/icon/images/tshirtW1',
      infos: {
        status: true ,
        category: 'Woman',
        color: 'white'
      }
    },

    {
      id: 2,
      name: 'Pant',
      price: 35 ,
      size: 'M',
      link: 'assets/icon/images/pantM1',
      infos: {
        status: false,
        category: 'Man',
        color: 'yellow'
      }
    },

    {
      id: 3,
      name: 'Dress',
      price: 50,
      size: 'S',
      link: 'assets/icon/images/dressW1',
      infos: {
        status: false,
        category: 'Woman',
        color: 'pink'
      }
    },

    {
      id: 4,
      name: 'Longue Sleeve shirt',
      price: 25,
      size: 'XL',
      link:'assets/icon/images/shirtM1',
      infos: {
        status: false,
        category: 'Man',
        color: 'blue'
      }
    },

    {
      id: 5,
      name: 'Pant',
      price: 8,
      size: 'L',
      link: 'assets/icon/images/pantW1',
      infos: {
        status: true,
        category: 'Woman',
        color: 'blue'
      }
    },

    {
      id: 6,
      name: 'T-shirt',
      price: 10,
      size: 'L',
      link: 'assets/icon/images/tshirtM1',
      infos: {
        status: true ,
        category: 'Man',
        color: 'white'
      }
    },
    {
      id: 7,
      name: 'Shirt',
      price: 25,
      size: 'XL',
      link: 'assets/icon/images/shirtW1',
      infos: {
        status: false,
        category: 'Woman',
        color: 'blue'
      }
    },
  ];

}
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage: Storage
  ) { }

  addCloth(cloth: Cloth) {
   // return this.storage.getCloth();

  }

  getCloth(){

  }

  updateCloth(cloth: Cloth){

  }

  deleteCloth(id: number){

  }
}
