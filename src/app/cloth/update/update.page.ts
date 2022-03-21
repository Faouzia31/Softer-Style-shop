import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Cloth } from '../cloth.model';
import { ClothService } from '../cloth.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
id: number;
c: Cloth;
cloth: Cloth;

  updtForm: FormGroup = this.fb.group({
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
    private route: ActivatedRoute) { }



    ngOnInit() {
      this.route.paramMap.subscribe(param =>{
        this.id = +param.get('id');
      });
      this.updtForm = this.fb.group({
        name: [[], Validators.required],
        price: [[], Validators.required],
        size: [[], Validators.required],
        link: [[], Validators.required],

          status: [[], Validators.required],
          category: [[], Validators.required],
          color: [[], Validators.required]

      });
      this.getCloth();
    }

    // getCloth(id: number): Cloth{
    //   return this.clothService.getClothById(id);
    // }

    getCloth(): void{
      this.clothService.getClothById(this.id).then(toKeep => {
        this.cloth= toKeep;

        this.updtForm.get('name').setValue(this.cloth.name);
        this.updtForm.get('price').setValue(this.cloth.price);
        this.updtForm.get('size').setValue(this.cloth.size);
        this.updtForm.get('link').setValue(this.cloth.link);
        this.updtForm.get('category').setValue(this.cloth.infos.category);
        this.updtForm.get('status').setValue(this.cloth.infos.status);
        this.updtForm.get('color').setValue(this.cloth.infos.color);

    });
  }

  updtCloth(): void {
    if (this.updtForm.valid) {
      const cloth: Cloth = {
        id: this.id,
        name: this.updtForm.get('name')?.value,
        price: this.updtForm.get('price')?.value,
        size: this.updtForm.get('size')?.value,
        link: this.updtForm.get('link')?.value,
        infos:{
          status: this.updtForm.get('status')?.value,
          category: this.updtForm.get('category')?.value,
          color: this.updtForm.get('color')?.value,
        }
      }; console.log(this.cloth);
      this.clothService.updateCloth(cloth);
      this.navCtrl.navigateRoot('');
    }

    else {this.error = true;}
  }


  clearError(){
    this.error = false;
  }

  previousState(){
    window.history.back();
  }

  onChange(){
    this.c.infos.status = true;
  }

  // getId(): number{
  //   this.clothService.getId().then(toKeep =>{
  //     this.cloth = toKeep;
  //     this.id = this.cloth.id+1;
  //   });
  //   console.log(this.id);
  //   return this.id;
  // }

}
