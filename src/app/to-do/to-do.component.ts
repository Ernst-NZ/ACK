import { Component, OnInit } from '@angular/core';
import { DataService } from '../_core/data.service';
import { IWyke, Wyke, IPacking, Packing, IToDo, ToDo } from '../_shared/interfaces';
import { wykeLys } from '../wyke/wyke.component';
import { LidmaatService } from '../_shared/lidmaat.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SorterService } from '../_core/sorter.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  private service: DataService;
  wyke: Array<IWyke> = [];
  todo: Array<IToDo>
  newWyk: IWyke = new Wyke();
  newToDo: IToDo = new ToDo;    
  oldWyk: any;
  oldToDo: any;
  errors: any;
  wykeNaam: wykeLys[] = [];


  constructor(service: DataService, private lidmaatService: LidmaatService,
    private spinner: NgxSpinnerService, private sorterService: SorterService,
    private toastr: ToastrService) {
    this.service = service;
  }

  ngOnInit() {
    this.spinner.show();
    this.service.getToDoes()
      .subscribe((toDo: IToDo[]) => this.todo = toDo);
        }

  ngAfterContentChecked() {
    if (this.todo) {
      this.spinner.hide();
    }
  }

//  ####  ToDo  ####
getPack(toDoId) {
  this.spinner.show();
  this.service.getToDo(toDoId).
    subscribe((toDo: IToDo[]) => {
      if (toDo) {
        this.oldToDo = toDo;
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
    this.service.getToDoes()
      .subscribe((toDo: IToDo[]) => {
        if (toDo) {
          this.todo = toDo;
          this.spinner.hide();
        };
      });
  }

  addToDo() {
    this.spinner.show();
    this.todo = null;
    this.lidmaatService.postToDo(this.newToDo).
      subscribe(() => {
        this.clearNewToDo();
        this.toastr.success('Information Added', '');
        this.refreshData();
      });
    error => {
      this.errors = error
      alert(this.errors)
    }
  }

  updateToDo() {
    this.spinner.show();
    this.todo = null;
    this.lidmaatService.putToDo(this.oldToDo).
      subscribe(() => {
        this.clearOldToDo();
        this.toastr.info('Info Changed', '');
        this.refreshData();
      });
    error => {
      this.errors = error
      alert(this.errors)
    }
  }

  deleteToDo(ToDoId) {
    this.spinner.show();
    this.todo = null;
    this.lidmaatService.deleteToDo(ToDoId).
      subscribe(() => {
        this.toastr.warning('Record removed', '');
        this.refreshData();
      });
    error => {
      this.errors = error
      alert(this.errors)
    }
  }

  clearNewToDo() {
    this.newToDo = new ToDo();
  }

  clearOldToDo() {
    this.oldToDo = new ToDo();
  }

  sort(prop: string) {
    // A sorter service will handle the sorting
    this.sorterService.sort(this.todo, prop);
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

