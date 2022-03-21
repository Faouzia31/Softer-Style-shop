import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Cloth, MoreInfos } from './cloth.model';

const CLOTHS_KEY = 'my-cloths';

@Injectable({
  providedIn: 'root'
})
export class ClothService {
  idMax= 1;

   cloths: Cloth[] = [
    //{
    //   id: 1,
    //   name: 'T-shirt',
    //   price: 10,
    //   size: 'L',
    //   link: 'assets/icon/images/tshirtW1',
    //   infos: {
    //     status: true ,
    //     category: 'Woman',
    //     color: 'white'
    //   }
    // },

    // {
    //   id: 2,
    //   name: 'Pant',
    //   price: 35 ,
    //   size: 'M',
    //   link: 'assets/icon/images/pantM1',
    //   infos: {
    //     status: false,
    //     category: 'Man',
    //     color: 'yellow'
    //   }
    // },

    // {
    //   id: 3,
    //   name: 'Dress',
    //   price: 50,
    //   size: 'S',
    //   link: 'assets/icon/images/dressW1',
    //   infos: {
    //     status: false,
    //     category: 'Woman',
    //     color: 'pink'
    //   }
    // },

    // {
    //   id: 4,
    //   name: 'Longue Sleeve shirt',
    //   price: 25,
    //   size: 'XL',
    //   link:'assets/icon/images/shirtM1',
    //   infos: {
    //     status: false,
    //     category: 'Man',
    //     color: 'blue'
    //   }
    // },

    // {
    //   id: 5,
    //   name: 'Pant',
    //   price: 8,
    //   size: 'L',
    //   link: 'assets/icon/images/pantW1',
    //   infos: {
    //     status: true,
    //     category: 'Woman',
    //     color: 'blue'
    //   }
    // },

    // {
    //   id: 6,
    //   name: 'T-shirt',
    //   price: 10,
    //   size: 'L',
    //   link: 'assets/icon/images/tshirtM1',
    //   infos: {
    //     status: true ,
    //     category: 'Man',
    //     color: 'white'
    //   }
    // },

    // {
    //   id: 7,
    //   name: 'Shirt',
    //   price: 25,
    //   size: 'XL',
    //   link: 'https://loozap.com/storage/files/tg/coin_17-10-2020/thumb-816x460-9oc26tp_2697483_uploaded_image1_1602782989.jpg',
    //   infos: {
    //     status: false,
    //     category: 'Woman',
    //     color: 'blue'
    //   }
    // }
  ];


  constructor(
    private storage: Storage
  ) { this.onInit();
  }

  onInit(){
    this.storage.create();
  }


  addCloth(cloth: Cloth): Promise<any> {
    return this.storage.get(CLOTHS_KEY).then((cloths: Cloth[]) =>{
      if (cloths){
        // cloth.id = this.getId();
        cloths.push(cloth);
        return this.storage.set(CLOTHS_KEY, cloths);
      }
      else{
           return this.storage.set(CLOTHS_KEY, [cloth]);
      }
    }).then(()=>{
      window.location.reload();
    });
  }

  getCloth(): Promise<Cloth[]> {
    //return [...this.cloths];
    return this.storage.get(CLOTHS_KEY);
  }


  getAll(): void{
    this.getCloth().then(cloths => {

    this.cloths = cloths;

    });
    console.log(this.cloths);

  }
  // getAll(): void{
  //   this.getCloth().then(cloths =>{
  //     this.cloths=cloths;
  //     //console.log(this.cloths.length);
  //    });
  //    console.log(this.cloths.length);

  //  }

  updateCloth(cloth: Cloth): Promise<any>{
    return this.storage.get(CLOTHS_KEY).then((cloths: Cloth[]) => {
      if (!cloths || cloths.length === 0){
        return null;
      }

      const newCloths: Cloth[] = [];

      for (const i of cloths){
        if (i.id === cloth.id) {
          newCloths.push(cloth);
        }
        else{
          newCloths.push(i);
        }
      }

      return this.storage.set(CLOTHS_KEY, newCloths);
    }).then(()=>{
      window.location.reload();
    });
  }

  deleteCloth(id: number): Promise<any>  {
    return this.storage.get(CLOTHS_KEY).then((cloths: Cloth[]) => {
      if (!cloths || cloths.length === 0){
        return null;
      }

      const toKeep: Cloth[] = [];

      for (const i of cloths) {
        if (i.id !== id) {
          toKeep.push(i);
        }
      }
      return this.storage.set(CLOTHS_KEY, toKeep);
    }).then(()=>{
      window.location.reload();
    });;

  }

  getClothById(id: number): Promise<Cloth> {
    // const item = this.cloths.find(value => value.id === id);
    // return item;
    return this.storage.get(CLOTHS_KEY).then((cloths: Cloth[]) =>{
      if (!cloths || cloths.length === 0){
        return null;
      }
    let toKeep: Cloth;
      for (let i of cloths){
        if (i.id === id) {
          toKeep = i;
        }
      }
      return toKeep;
    });


  }

  getId(): Promise <any> {
    return this.storage.get(CLOTHS_KEY).then((cloths: Cloth[]) =>{
      if(!cloths || cloths.length === 0){

        return this.idMax;
      }else{
        for(let i of cloths){
          if (i.id >= this.idMax){
            console.log(this.idMax);
            this.idMax = i.id + 1;
            return this.idMax;
          }
        }
      }
    });
  }


//   private getId(): number {

//    this.getCloth().then(cloths => {

//     this.cloths = cloths;

//     this.cloths.forEach(cloth => {
//       if(cloth.id && cloth.id > this.idMax){
//         this.idMax = cloth.id;
//       }
//      // console.log(idMax);
//     });
//     const a=this.idMax+1;
//     console.log('ok'+ a);

//   return this.idMax+1;
// });
// console.log(this.idMax+1);
// return this.idMax+1;
//   }




}
