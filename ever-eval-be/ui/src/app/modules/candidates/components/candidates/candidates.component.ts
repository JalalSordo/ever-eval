import { Component, OnInit, ViewChild } from '@angular/core';
import { CandidateServiceService } from '../../services/candidate-service.service';
import { Candidate } from '../../models/Candidate';
import {
  Question,
  QuizQuestion,
  ProposedResponse,
  Level,
  Techno,
  Type,
  Answer
} from 'src/app/modules/questions/models/question';
import { Quiz } from 'src/app/modules/quizzes/models/Quiz.model';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
  @ViewChild('deletedSwal', { static: false }) private deletedSwal: SwalComponent;
  @ViewChild('convokeFailSwalAll', { static: false }) private convokeFailSwalAll: SwalComponent;
  dtOptions: DataTables.Settings = {};
  candidatesCheckList: Candidate[];
  public selectedRow: Candidate = new Candidate('', '', Level.Default,Techno.Default, 0, false);
  answers: Array<Answer> = [];
  quizQuestions: Array<QuizQuestion> = [];
  proposedResponses: Array<ProposedResponse> = [];
  public question: Question = new Question(
    '',
    Level.Default,
    Techno.Default,
    Type.Default,
    0,
    0,
    this.proposedResponses
  );
  quiz: Quiz;
  dtTrigger: Subject<any> = new Subject();
  showedModal: string;

  constructor(private candidateService: CandidateServiceService) { }
  ngOnInit() {
    this.showedModal = "";
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 100

    };
    this.candidateService
      .listCandidates()
      .subscribe(
        Candidates => {
          this.candidatesCheckList = Candidates,
            this.dtTrigger.next();
        },
        err => console.error(err),
      );
  }
  open(candidate: Candidate) {
    this.selectedRow = candidate;
  }
  deleteCandidate(candidate: Candidate) {
    this.candidateService.deleteCandidate(candidate).subscribe(res => res);
    this.candidatesCheckList.splice(this.candidatesCheckList.indexOf(candidate), 1);
    this.deletedSwal.show();
  }
  //to show modal or not in convoke button
  showModal() {
    console.log("show modal");
    let isnull = 0;
    this.candidatesCheckList.forEach(element => {
      if (element.quiz === null) {
        isnull++;
      } 
    });
    if (isnull !=0) {
      this.showedModal = "convokeModal";
    } else {
      this.showedModal = ""
    }
    if (this.showedModal === "" && isnull === 0) {
      this.convokeFailSwalAll.show();
    }
  }
}
