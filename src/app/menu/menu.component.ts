import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { DataService } from '../_core/data.service';
import { IGroup } from '../_shared/interfaces';
import { UserService } from '../_shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { LidmaatService } from '../_shared/lidmaat.service';
import { SorterService } from '../_core/sorter.service';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private service: DataService;
  tema: Array<IGroup> = [];
  skrif: Array<IGroup> = [];
  today: Date = new Date();
  weekEinde: Date = new Date(this.today.setDate(this.today.getDate() + 7));

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  composeEmail = {
    EmailType: 'Navraag', EmailTo: 'admin@acktauranga.nz',
    EmailNaam: '', EmailFrom: '',
    Subject: '', Body: ''
  }
  kerkraad: Array<IGroup> = [];
  welkom: Array<IGroup> = [];
  gasvry: Array<IGroup> = [];
  jeug: Array<IGroup> = [];
  maandEinde: Date = new Date(this.today.setDate(this.today.getDate() + 27));
  hasTema: Boolean = true;
  sending: Boolean = false;

  constructor(private userService: UserService,
    public globals: Globals, service: DataService,
    private sorterService: SorterService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    public lidservice: LidmaatService,
    private breakpointObserver: BreakpointObserver,

  ) {
    this.service = service;
  }

  ngOnInit() {

    if (!localStorage.getItem("userToken")) {
      this.userService.userAuthentication("ack", "123").subscribe((data: any) => {
        console.log("set User")
        localStorage.setItem('userToken', data.access_token);
        this.userService.setUser();
      },
        (err: HttpErrorResponse) => {
          console.log(HttpErrorResponse)
        });
    }
    else {
      this.userService.setUser();
    }

    this.service.getGroups("Tema", this.weekEinde)
      .subscribe((Tema: IGroup[]) => {
        if (Tema.length > 0) {
          this.tema = Tema;
          console.log("this.tema = Tema");
          console.log(Tema)
        }
      },
        error => {
          console.log('No data')
        });
    this.service.getGroups("Skriflesing", this.weekEinde)
      .subscribe((Skrif: IGroup[]) => this.skrif = Skrif);



    this.spinner.show();

    this.service.getGroups("Tema", this.weekEinde)
      .subscribe((Tema: IGroup[]) => this.tema = Tema);

    this.service.getGroups("Skriflesing", this.weekEinde)
      .subscribe((Skrif: IGroup[]) => this.skrif = Skrif);

    this.service.getGroups("Kerkraad", this.maandEinde)
      .subscribe((groep: IGroup[]) => this.kerkraad = groep);

    this.service.getGroups("Verwelkoming", this.maandEinde)
      .subscribe((Welkom: IGroup[]) => this.welkom = Welkom);

    this.service.getGroups("Gasvryheid", this.maandEinde)
      .subscribe((Gasvry: IGroup[]) => this.gasvry = Gasvry);

    this.service.getGroups("Jeug", this.maandEinde)
      .subscribe((Jeug: IGroup[]) => this.jeug = Jeug);
  }

  ngAfterContentChecked() {
    if (this.kerkraad) {
      this.sorterService.sort(this.kerkraad, "Date");
    }
    if (this.kerkraad.length > 0) {
      if (this.kerkraad[0]['Date'] > this.kerkraad[(this.kerkraad.length) - 1]['Date']) {
        this.sorterService.sort(this.kerkraad, "Date");
      }
    }

    if (this.welkom) {
      this.sorterService.sort(this.welkom, "Date");
    }
    if (this.welkom.length > 0) {
      if (this.welkom[0]['Date'] > this.welkom[(this.welkom.length) - 1]['Date']) {
        this.sorterService.sort(this.welkom, "Date");
      }
    }

    if (this.gasvry) {
      this.sorterService.sort(this.gasvry, "Date");
    }
    if (this.gasvry.length > 0) {
      if (this.gasvry[0]['Date'] > this.gasvry[(this.gasvry.length) - 1]['Date']) {
        this.sorterService.sort(this.gasvry, "Date");
      }
    }

    if (this.jeug) {
      this.sorterService.sort(this.jeug, "Date");
      this.spinner.hide();
    }
    if (this.jeug.length > 0) {
      if (this.jeug[0]['Date'] > this.jeug[(this.jeug.length) - 1]['Date']) {
        this.sorterService.sort(this.jeug, "Date");
      }
    }
  }

  sendEmail() {
    this.spinner.show();
    this.sending = true
    var msg = this.composeEmail.Body;
    var Naam = "<h3><b><u>Web Navraag</u></b></h3><br><b><u>Naam</u></b>- ";
    if (this.composeEmail.EmailNaam !== '') {
       this.composeEmail.Body = Naam.concat(this.composeEmail.EmailNaam,
         '<br><b><u>Kontak details</u></b> -  ', this.composeEmail.EmailFrom,
         '<br><br><b><u>Boodskap</u></b> - ', this.composeEmail.Body)
     }
     this.composeEmail.EmailType = "Navraag";
     this.composeEmail.EmailFrom = 'admin@acktauranga.nz';
     this.lidservice.sendEmail(this.composeEmail).subscribe(res => {
      this.toastr.success('E-Pos gestuur', '');
      this.spinner.hide();
      this.sending = false;
      this.composeEmail.Body = "E-Pos is gestuur.";
    });
  };

}
