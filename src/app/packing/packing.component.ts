import { Component, OnInit } from '@angular/core';
import { DataService } from '../_core/data.service';
import { IWyke, Wyke, IPacking, Packing } from '../_shared/interfaces';
import { wykeLys } from '../wyke/wyke.component';
import { LidmaatService } from '../_shared/lidmaat.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SorterService } from '../_core/sorter.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-packing',
  templateUrl: './packing.component.html',
  styleUrls: ['./packing.component.scss']
})
export class PackingComponent implements OnInit {
    private service: DataService;
    wyke: Array<IWyke> = [];
    packing: Array<IPacking>
    newWyk: IWyke = new Wyke();
    newPak: IPacking = new Packing;    
    oldWyk: any;
    oldPak: any;
    errors: any;
    wykeNaam: wykeLys[] = [];

  
    constructor(service: DataService, private lidmaatService: LidmaatService,
      private spinner: NgxSpinnerService, private sorterService: SorterService,
      private toastr: ToastrService) {
      this.service = service;
    }
  
    ngOnInit() {
      this.spinner.show();     
        this.service.getPacking()
        .subscribe((pak: IPacking[]) => this.packing = pak)
        
    }
  
    ngAfterContentChecked() {
     
      if (this.packing) {
        this.spinner.hide();
      }
    }
  
  //  ####  Packing  ####
  getPak(PakId) {
    this.spinner.show();
    this.service.getPak(PakId).
      subscribe((pak: IPacking[]) => {
        if (pak) {
          this.oldPak = pak;
          this.spinner.hide();
        }
        error => {
          this.errors = error
          console.log(this.errors);
        }
      });
  }

    refreshData() {
      this.spinner.show();
      this.service.getPacking()
        .subscribe((pak: IPacking[]) => {
          if (pak) {
            this.packing = pak;
            this.spinner.hide();
          };
        });
    }
  
    addPak() {
      this.spinner.show();
      this.packing = null;
      this.lidmaatService.postPacking(this.newPak).
        subscribe(() => {
          this.clearNewPak();
          this.toastr.success('Information Added', '');
          this.refreshData();
        });
      error => {
        this.errors = error
        alert(this.errors)
      }
    }
  
    updatePak() {
      this.spinner.show();
      this.wyke = null;
      this.lidmaatService.putPacking(this.oldPak).
        subscribe(() => {
          this.clearOldPak();
          this.toastr.info('Info Changed', '');
          this.refreshData();
        });
      error => {
        this.errors = error
        alert(this.errors)
      }
    }
  
    deletePak(pakId) {
      this.spinner.show();
      this.packing = null;
      this.lidmaatService.deletePacking(pakId).
        subscribe(() => {
          this.toastr.warning('Record removed', '');
          this.refreshData();
        });
      error => {
        this.errors = error
        alert(this.errors)
      }
    }
  
    clearNewPak() {
      this.newPak = new Packing();
    }
  
    clearOldPak() {
      this.oldPak = new Packing();
    }
  
    sort(prop: string) {
      // A sorter service will handle the sorting
      this.sorterService.sort(this.packing, prop);
    }

    // getWyk(WykId) {
    //   this.spinner.show();
    //   this.service.getWyk(WykId).
    //     subscribe((wyke: IWyke[]) => {
    //       if (wyke) {
    //         this.oldWyk = wyke;
    //         this.spinner.hide();
    //       }
    //       error => {
    //         this.errors = error
    //         console.log(this.errors);
    //       }
    //     });
    // }

    // refreshDatax() {
    //   this.spinner.show();
    //   this.service.getWyke()
    //     .subscribe((wyk: IWyke[]) => {
    //       if (wyk) {
    //         this.wyke = wyk;
    //         this.spinner.hide();
    //       };
    //     });
    // }
  
    // addWykx() {
    //   this.spinner.show();
    //   this.wyke = null;
    //   this.lidmaatService.postWyk(this.newWyk).
    //     subscribe(() => {
    //       this.clearNewWyk();
    //       this.toastr.success('Inligting bygevoeg', '');
    //       this.refreshData();
    //     });
    //   error => {
    //     this.errors = error
    //     alert(this.errors)
    //   }
    // }
  
    // updateWykx() {
    //   this.spinner.show();
    //   this.wyke = null;
    //   this.lidmaatService.putWyk(this.oldWyk).
    //     subscribe(() => {
    //       this.clearOldWyk();
    //       this.toastr.info('Inligting Verander', '');
    //       this.refreshData();
    //     });
    //   error => {
    //     this.errors = error
    //     alert(this.errors)
    //   }
    // }
  
    // deleteWykx(WykId) {
    //   this.spinner.show();
    //   this.wyke = null;
    //   this.lidmaatService.deleteWyk(WykId).
    //     subscribe(() => {
    //       this.toastr.warning('Rekord verwyder', '');
    //       this.refreshData();
    //     });
    //   error => {
    //     this.errors = error
    //     alert(this.errors)
    //   }
    // }
  
  
    // clearNewWykx() {
    //   this.newWyk = new Wyke();
    // }
  
    // clearOldWykx() {
    //   this.oldWyk = new Wyke();
    // }
  
    // sortx(prop: string) {
    //   // A sorter service will handle the sorting
    //   this.sorterService.sort(this.wyke, prop);
    // }
  
  }
  
  