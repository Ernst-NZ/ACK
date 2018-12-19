import { Component, OnInit } from '@angular/core';
import { LidmaatService } from '../../_shared/lidmaat.service';
import { Lidmaat } from '../../_shared/lidmaat.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lidmate-lys',
  templateUrl: './lidmate-lys.component.html',
  styleUrls: ['./lidmate-lys.component.scss']
})
export class LidmateLysComponent implements OnInit {
  lidmaatLys$: object;
  constructor(private lidmaatService: LidmaatService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.lidmaatService.refreshList();
    this.lidmaatLys$ = this.lidmaatService;
  }

  populateForm(lid: Lidmaat) {
    this.lidmaatService.formData = Object.assign({}, lid);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.lidmaatService.deleteLidmaat(id).subscribe(res => {
        this.lidmaatService.refreshList();
        this.toastr.warning('Deleted successfully', 'ACK');
      });
    }
  }

}
