import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, Platform } from '@ionic/angular';
import { Cloth } from '../cloth.model';
import { ClothService } from '../cloth.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.page.html',
  styleUrls: ['./new-item.page.scss'],
})
export class NewItemPage implements OnInit {
  c: Cloth;
  cloth: Cloth[] = [];
  id = 1 ;

  clothForm: FormGroup = this.fb.group({
    name: [[], Validators.required],
    price: [[], Validators.required],
    size: [[], Validators.required],
    link: [[], Validators.required],

      status: [[], Validators.required],
      category: [[], Validators.required],
      color: [[], Validators.required]

  });
  error = false;

  constructor(
    private fb: FormBuilder,
    private clothService: ClothService,
    private navCtrl: NavController,
    private plt: Platform) {this.plt.ready().then(()=> {
      this.loadAll();
    }); }

  ngOnInit() {
  }

  createCloth(){
    if (this.clothForm.valid){
      const cloth: Cloth = {
        //id: this.getId(),
        id: Date.now(),
        name: this.clothForm.get('name')?.value,
        price: this.clothForm.get('price')?.value,
        size: this.clothForm.get('size')?.value,
        link: this.clothForm.get('link')?.value,
        infos:{
          status: this.clothForm.get('status')?.value,
          category: this.clothForm.get('category')?.value,
          color: this.clothForm.get('color')?.value,
        }
      };
      this.clothService.addCloth(cloth);
      this.navCtrl.navigateRoot('');
    }

    else {this.error = true;}
  }

  // clearError(){
  //   this.error = false;
  // }

  previousState(){
    window.history.back();
  }

  onChange(){
    this.c.infos.status = true;
  }

  getId(): number{
    this.clothService.getId().then((toKeep: Cloth) =>{
      this.id = toKeep.id + 1;
    });
    console.log(this.id);
    return this.id;
  }

  // getId(): number{
  //   this.clothService.getId().then(toKeep =>{
  //     this.cloth = toKeep;
  //     this.id = this.cloth.id+1;
  //   });
  //   console.log(this.id);
  //   return this.id;
  // }

  loadAll(){
    this.clothService.getCloth().then(item =>{
      this.cloth = item;
    });
  }
}
