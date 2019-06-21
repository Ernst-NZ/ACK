import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ILidmaat, IAddress, IWyke, IWiki } from '../../_shared/interfaces'
import { LidmaatService } from '../../_shared/lidmaat.service';
import { SorterService } from '../../_core/sorter.service';
import { DataService } from '../../_core/data.service';
import { filter } from 'rxjs/operators';
import { Globals } from '../../globals';
import { NgxSpinnerService } from 'ngx-spinner';

export interface isActive {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-lidmate-lys',
    templateUrl: './lidmate-lys.component.html'
})


export class LidmateLysComponent implements OnInit {

    private _wikiLys: IWiki[] = [];
    @Input() get wikiLys(): IWiki[] {
        return this._wikiLys;
    }

    set wikiLys(value: IWiki[]) {
        if (value) {
            this.filteredWiki = this._wikiLys = value;
            this.globals.isSyncing = false;
        }
    }

    filteredWiki: any[] = [];
    formData: ILidmaat;
    formAdd: IAddress;

    constructor(private dataService: DataService, private sorterService: SorterService, private lidmaatService: LidmaatService,
        public globals: Globals, private spinner: NgxSpinnerService) { }

    ngOnInit() {
        this.globals.filter = true;
    }

    filter(data: string) {
        this.globals.myFilter = data;
        if (data) {
            this.filteredWiki = this.wikiLys.filter((wiki: IWiki) => {
                return wiki.Subject.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                    wiki.Description.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                    wiki.Code.toLowerCase().indexOf(data.toLowerCase()) > -1;
            });
        }
        else {
            this.filteredWiki = this.wikiLys;
        }
    }

    sort(prop: string) {
        // A sorter service will handle the sorting
        this.sorterService.sort(this.filteredWiki, prop);
    }

    populateForm(wiki: IWiki) {
        this.lidmaatService.formWiki = Object.assign({}, wiki);
        this.globals.lidmaatDetails = wiki.Subject;
    }
    changeVisibility() {
        this.globals.filter = true;
        this.filter("");
    }

}
