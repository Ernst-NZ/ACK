import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-filter-textbox',
//     template: `    Soek: <input style="width: 60%;" type="text" [(ngModel)]="filter" />
// `
template: `
        Filter: <input style="width: 60%;" type="text" [(ngModel)]="filter" />
    `
})
export class FilterTextboxComponent implements OnInit {
  
    private _filter: string;
    @Input() get filter() {
        return this._filter;
    }
    
    set filter(val: string) { 
        this._filter = val;
        this.changed.emit(this.filter); //Raise changed event
    }

    @Output() changed: EventEmitter<string> = new EventEmitter<string>();
    
    
    constructor() {}
    
    ngOnInit() {
        
    }
}