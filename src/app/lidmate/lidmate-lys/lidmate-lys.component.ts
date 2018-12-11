import { Component, OnInit } from '@angular/core';
import { LidmaatService } from 'src/app/_shared/lidmaat.service';
import { Lidmaat } from 'src/app/_shared/lidmaat.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lidmate-lys',
  templateUrl: './lidmate-lys.component.html',
  styleUrls: ['./lidmate-lys.component.scss']
})
export class LidmateLysComponent implements OnInit {

  constructor(private service: LidmaatService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(lid: Lidmaat) {
    this.service.formData = Object.assign({}, lid);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteLidmaat(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'ACK');
      });
    }
  }

}
