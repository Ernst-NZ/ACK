import { Component, OnInit } from '@angular/core';
import { LidmaatService } from '../_shared/lidmaat.service';
import { IWiki } from '../_shared/interfaces';
import { DataService } from '../_core/data.service';
import { Globals } from '../globals';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-lidmate',
  templateUrl: './lidmate.component.html',
  styleUrls: ['./lidmate.component.scss']
})

export class LidmateComponent implements OnInit {

  title: string;
  wikiLys: any[];
  isVisible = true;
  loading = true;
  lidmaatDetails: String;

  constructor(private dataService: DataService, public globals: Globals, private service: LidmaatService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.globals.isSyncing = true;

    this.loading = true;
    this.title = 'My wiki';

    this.dataService.getWiki()
      .subscribe((wikis: IWiki[]) => this.wikiLys = wikis);

    this.spinner.hide();
  }

  persoonlik() {
    this.isVisible = !this.isVisible;
  }

  skoonForm() {
    this.service.formAdd = Object.assign({}, null);
    this.service.formData = Object.assign({ IsActive: 'true', }, null);
  }
  updateList() {
    this.spinner.show();
    this.globals.isSyncing = true;

    this.loading = true;
    this.title = 'My Wikis';
    this.dataService.getWiki()
      .subscribe((wikis: IWiki[]) => this.wikiLys = wikis);


    this.spinner.hide();
    this.globals.filter = true;
  }

}