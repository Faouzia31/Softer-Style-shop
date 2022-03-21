import { Component, OnInit } from '@angular/core';
import { NavController, Platform, ToastController } from '@ionic/angular';
import { Cloth } from './cloth.model';
import { ClothService } from './cloth.service';


@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.page.html',
  styleUrls: ['./cloth.page.scss'],
})
export class ClothPage implements OnInit {

  cloths: Cloth[] = [];

  newCloth: Cloth;

  constructor(
    private clothService: ClothService,
    private navCtrl: NavController,
    private toastController: ToastController,
    private plt: Platform
  ) {this.plt.ready().then(()=>{
    this.loadAll();
  });}

  ngOnInit() {

  }

  loadAll(){
    this.clothService.getCloth().then(cloth => {

        this.cloths = cloth;

    });
  }

  goTo(id: number): void{
    this.navCtrl.navigateForward(`/cloths/${id}`);
  }

  goToUpdate(id: number){
    this.navCtrl.navigateForward(`/update/${id}`);
  }

  addCloth() {
    this.clothService.addCloth(this.newCloth).then(cloth => {
      this.cloths = cloth;
      this.showToast('New item added!');
      this.loadAll();
    });
  }

  updateCloth(cloth: Cloth) {
    this.clothService.updateCloth(cloth);
      this.showToast('Item updated');
  }

  deleteCloth(cloth: Cloth) {
    this.clothService.deleteCloth(cloth.id);
      this.showToast('This item has been removed');
     // this.mycloth.closeSlidingCloths();
      this.loadAll();
      this.navCtrl.navigateRoot('');
  }

  seeDetail(id: number){
    this.navCtrl.navigateForward(`d/${id}`);
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }





}
