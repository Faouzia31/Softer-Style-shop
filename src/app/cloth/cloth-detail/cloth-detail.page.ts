import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Cloth } from '../cloth.model';
import { ClothService } from '../cloth.service';

@Component({
  selector: 'app-cloth-detail',
  templateUrl: './cloth-detail.page.html',
  styleUrls: ['./cloth-detail.page.scss'],
})
export class ClothDetailPage implements OnInit {
  cloths: Cloth[] = [];

  cloth: Cloth;
  constructor(
    private clothService: ClothService,
    private route: ActivatedRoute,
    private toastController: ToastController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param =>{
      const id = +param.get('id');
      //this.getCloth(id);
      //this.cloth = this.getCloth(id);
      this.getCloth(id);
      console.log(this.cloth);
    });
  }

  getCloth(id: number): Cloth{
    this.clothService.getClothById(id).then(toKeep => {
      this.cloth= toKeep;
    });
    return this.cloth;
  }

  deleteCloth(cloth: Cloth) {
    this.clothService.deleteCloth(cloth.id);
      this.showToast('This item has been removed');
     // this.mycloth.closeSlidingCloths();
      this.loadAll();
      this.navCtrl.navigateRoot('');
  }
  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  loadAll(): void{
    this.clothService.getCloth().then(cloths => {

        this.cloths = cloths;

    });
  }

}
