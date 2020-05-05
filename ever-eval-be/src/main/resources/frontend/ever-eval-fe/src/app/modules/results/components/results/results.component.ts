import { Component, OnInit, ViewChild } from '@angular/core';
import { ResultsService } from '../../services/results.service';
import { Result } from '../../models/result.model';
import { Subject } from 'rxjs';
import { Candidate } from 'src/app/modules/candidates/models/Candidate';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  results: Result[];
  candidates: Array<Candidate> = [];
  selectedRow:Candidate;
  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 100

    };
    const candidatesObservable = this.resultsService.getAllResults();
    candidatesObservable.subscribe((candidatesData: Candidate[]) => {
      this.candidates = candidatesData;
      this.dtTrigger.next();
    });
  }
  open(candidate:Candidate){
    this.selectedRow=candidate;

  }
}
