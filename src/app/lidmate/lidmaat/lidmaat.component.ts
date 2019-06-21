import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LidmaatService } from 'src/app/_shared/lidmaat.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-lidmaat',
  templateUrl: './lidmaat.component.html',
  styleUrls: ['./lidmaat.component.scss']
})
export class LidmaatComponent implements OnInit {
  @Output() updateLys = new EventEmitter();
  updatelys() {
    this.updateLys.emit();
  }

  errors: any;
  constructor(public service: LidmaatService,
    private toastr: ToastrService, public globals: Globals,
    private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(formWiki?: NgForm) {
    if (formWiki != null)
      formWiki.resetForm();
    this.service.formWiki = {
      Id: 0,
      Subject: '',
      Description: '',      
      Category: '',
      Code: '',
    }
  }

  onSubmit(formWiki: NgForm) {
    this.spinner.show();
    if (formWiki.value.Id == 0)
      this.insertRecord(formWiki);
    else
      this.updateRecord(formWiki);
  }


  insertRecord(formWiki: NgForm) {
    console.log(formWiki.value);
    this.service.postWiki(formWiki.value).subscribe(() => {
      this.toastr.success('Wiki Added', '');
      this.service.refreshWikiList();
      this.updatelys();
      this.resetForm();
      this.spinner.hide();
    });
  }

  updateRecord(formWiki: NgForm) {
    this.service.putWiki(formWiki.value).subscribe(() => {
      this.toastr.info('Wiki Updated', '');
      this.service.refreshList();
      this.updatelys();
      this.resetForm();
      this.spinner.hide();
    });
  }


  deleteWiki(WikiId) {
    this.spinner.show();
    this.service.deleteWiki(WikiId).
      subscribe(() => {
        this.updatelys();
        this.resetForm();
        this.spinner.hide();
        this.toastr.warning('Wiki Deleted', '');
      });
    error => {
      this.errors = error
      alert(this.errors)
    }
  }

}
