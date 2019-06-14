import { Component, OnInit } from '@angular/core';
import { DataService } from '../_core/data.service';
import { IGroup, IWyke, Wyke } from '../_shared/interfaces';
import { LidmaatService } from '../_shared/lidmaat.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SorterService } from '../_core/sorter.service';

export interface groepLys {
  value: string;
  viewValue: string;
}
export interface wykeLys {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-wyke',
  templateUrl: './wyke.component.html',
  styleUrls: ['./wyke.component.scss']
})
export class WykeComponent implements OnInit {
  private service: DataService;
  wyke: Array<IWyke> = [];
  newWyk: IWyke = new Wyke();
  oldWyk: any;
  errors: any;
  wykeNaam: wykeLys[] = [];

  constructor(service: DataService, private lidmaatService: LidmaatService,
    private spinner: NgxSpinnerService, private sorterService: SorterService,
    private toastr: ToastrService) {
    this.service = service;
  }

  ngOnInit() {
    this.wykeNaam = [{ value: 1, viewValue: 'Dough' }, { value: 2, viewValue: 'Ernst' }, { value: 3, viewValue: 'Hannes' }, { value: 4, viewValue: 'Hendrik' }, { value: 5, viewValue: 'Kitty' }, { value: 6, viewValue: 'MJ' }, { value: 7, viewValue: 'Poppie' },]
    this.spinner.show();
    this.service.getWyke()
      .subscribe((wyk: IWyke[]) => this.wyke = wyk);
  }

  ngAfterContentChecked() {
    if (this.wyke) {
      this.spinner.hide();
    }
  }

  getWyk(wykId) {
    console.log(wykId);
    this.spinner.show();
    this.service.getWyk(wykId).
      subscribe((wyke: IWyke[]) => {
        if (wyke) {
          this.oldWyk = wyke;
          console.log("this.oldWyk");
          console.log(this.oldWyk);
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
    this.service.getWyke()
      .subscribe((wyk: IWyke[]) => {
        if (wyk) {
          this.wyke = wyk;
          this.spinner.hide();
        };
      });
  }

  addWyk() {
    this.spinner.show();
    this.wyke = null;
    this.lidmaatService.postWyk(this.newWyk).
      subscribe(() => {
        this.clearNewWyk();
        this.toastr.success('Inligting bygevoeg', '');
        this.refreshData();
      });
    error => {
      this.errors = error
      alert(this.errors)
    }
  }

  updateWyk() {
    this.spinner.show();
    this.wyke = null;
    this.lidmaatService.putWyk(this.oldWyk).
      subscribe(() => {
        this.clearOldWyk();
        this.toastr.info('Inligting Verander', '');
        this.refreshData();
      });
    error => {
      this.errors = error
      alert(this.errors)
    }
  }

  deleteWyk(wykId) {
    this.spinner.show();
    this.wyke = null;
    this.lidmaatService.deleteWyk(wykId).
      subscribe(() => {
        this.toastr.warning('Rekord verwyder', '');
        this.refreshData();
      });
    error => {
      this.errors = error
      alert(this.errors)
    }
  }


  clearNewWyk() {
    this.newWyk = new Wyke();
  }

  clearOldWyk() {
    this.oldWyk = new Wyke();
  }

  sort(prop: string) {
    // A sorter service will handle the sorting
    this.sorterService.sort(this.wyke, prop);
  }

}

