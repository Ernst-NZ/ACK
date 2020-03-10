import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LidmaatService } from '../_shared/lidmaat.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../_shared/user.service';
import { HttpClient } from '@angular/common/http';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';


@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService]
})
export class EmailsComponent implements OnInit {
  @ViewChild('myInput')
  myInputVariable: ElementRef;
  public tools: object = {
    items: [
           'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
           'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
           'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
           'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
           'Indent', 'Outdent', '|', 'CreateLink', 'CreateTable',
           'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
   };
  composeEmail = {
    EmailType: 'navraag', EmailTo: 'ernst@hotmail.co.nz',
    EmailNaam: '', EmailFrom: '',
    Subject: 'ACK Afkondigings', Body: '', Attachment: ''
  };
  public progress: number;
  public message: string;
  testEmail = false;
  fd = new FormData();
  tempList: any;
  selectedFile: File = null;
  constructor(public service: LidmaatService, private toastr: ToastrService,
    private spinner: NgxSpinnerService, private userService: UserService, private http: HttpClient
    ) { }


  ngOnInit() {
    window.scrollTo(0, 0);

  }

  sendEmail() {
    // if (confirm('Is jy seker jy will die epos aan die hele gemeente stuur? Die stuur van die epos kan tot 5 minute neem.')) {
      this.spinner.show();
      if (this.testEmail) {
        var test = 'XXXTestXXX';
        this.composeEmail.Body = test.concat('<br>', this.composeEmail.Body);
      }
      if (this.tempList) {
        const fileCount: number = this.tempList.target.files.length;
        if (fileCount > 0) {
          console.log('>0'); // a file was selected
          console.log(this.composeEmail.Body);
          for (let i = 0; i < fileCount; i++) {
            this.selectedFile = <File>this.tempList.target.files[i];
            this.fd.append(this.composeEmail.Body, this.selectedFile, this.selectedFile.name);
            console.log(i, 'files uploaded');
          }
          console.log(this.fd);
            this.service.sendEmailAttach(this.fd).subscribe(res => {
              this.toastr.success('Emails is gestuur');
              this.reset();
            },
              (err) => {
                console.log(err);
                this.toastr.error('Something went wrong');
                this.reset();
              });
        } else {
          console.log('empty');
          this.composeEmail.EmailType = 'Batch';
          this.composeEmail.EmailFrom = 'admin@acktauranga.nz';
          this.service.sendEmail(this.composeEmail).subscribe(res => {
            this.toastr.success('Email gestuur');
            this.reset();
            this.spinner.hide();
          });
        }

      } else {
        console.log('empty');
        this.composeEmail.EmailType = 'Batch';
        this.composeEmail.EmailFrom = 'admin@acktauranga.nz';
        this.service.sendEmail(this.composeEmail).subscribe(res => {
          this.toastr.success('Email gestuur');
          this.reset();
          this.spinner.hide();
        });
      }
      this.spinner.hide();
  //  }
  }


  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.tempList = event;
    }
  }

  reset() {
    console.log(this.myInputVariable.nativeElement.files);
    this.myInputVariable.nativeElement.value = '';
    console.log(this.myInputVariable.nativeElement.files);
 //   this.composeEmail.Body = '';
  }

}
