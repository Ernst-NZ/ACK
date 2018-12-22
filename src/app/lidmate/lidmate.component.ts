import { Component, OnInit } from '@angular/core';
import { LidmaatService } from '../_shared/lidmaat.service';
import { ILidmaat } from '../_shared/interfaces';

@Component({
  selector: 'app-lidmate',
  templateUrl: './lidmate.component.html',
  styleUrls: ['./lidmate.component.scss']
})
export class LidmateComponent implements OnInit {

  title: string;
  mense: ILidmaat[];
  
  constructor() {}
  
  ngOnInit() {
      this.title = 'Lidmate';
      this.mense = [
        {LidmaatId:1, FirstName: 'John', LastName: 'Doe', NickName: 'John', Gemeente: 'Tauranga' },
        {LidmaatId:2, FirstName: 'Koos', LastName: 'Nel', NickName: 'Koos', Gemeente: 'Tauranga' },
        {LidmaatId:3, FirstName: 'Piet', LastName: 'Venter', NickName: 'Piet', Gemeente: 'Tauranga' },
        {LidmaatId:4, FirstName: 'Gert', LastName: 'Botha', NickName: 'Gert', Gemeente: 'Tauranga' }
           ];
  }
}

