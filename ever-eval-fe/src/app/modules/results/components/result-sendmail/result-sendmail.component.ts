import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Candidate } from 'src/app/modules/candidates/models/Candidate';
import { ResultsService } from '../../services/results.service';
import { Email } from '../../models/result.model';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { CandidateServiceService } from 'src/app/modules/candidates/services/candidate-service.service';

@Component({
  selector: 'app-result-sendmail',
  templateUrl: './result-sendmail.component.html',
  styleUrls: ['./result-sendmail.component.css']
})
export class ResultSendmailComponent implements OnInit {
  @ViewChild('emaildSwal', { static: false }) private emaildSwal: SwalComponent;
  @Input() selectedRow: Candidate;
  from: string;
  emails: Array<Email>;
  mail: Email = new Email("", "");

  constructor(private resultsService: ResultsService, private candidateService: CandidateServiceService) { }

  ngOnInit() {
    this.from = sessionStorage.getItem('mail');
    const emailsObservable = this.resultsService.getAllMailsContent();
    emailsObservable.subscribe((emailsData: Email[]) => {
      this.emails = emailsData;
    });

  }
  chooseText(index) {
    this.mail.messageText = this.emails[index.target.selectedIndex - 1].messageText;
  }
  convokeCandidate(candidate: Candidate, mail: Email) {
    console.log(candidate);
    this.resultsService.sendMail(candidate, mail).subscribe(res => {
      candidate.convoked = true;
      this.candidateService.updateCandidate(candidate).subscribe(data => {
        this.emaildSwal.show();
        document.getElementById('sentmail').click();
      });
    });

  }
}
