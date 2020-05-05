import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminGuard } from './auth/admin.guard';
import { HomeComponent } from './modules/home/components/home/home.component';
import { CandidatesComponent } from './modules/candidates/components/candidates/candidates.component';
import { QuestionsComponent } from './modules/questions/components/questions/questions.component';
import { QuizzesComponent } from './modules/quizzes/components/quizzes/quizzes.component';
import { StaffComponent } from './modules/staff/components/staff/staff.component';
import { ResultsComponent } from './modules/results/components/results/results.component';
import { ContainerComponent } from './components/container/container.component';
import { EvalGuard } from './auth/eval.guard';
import { HrGuard } from './auth/hr.guard';
import { EmailComponent } from './modules/email/components/email/email.component';
import { CandidateQuizComponent } from './modules/quizzes/components/candidate-quiz/candidate-quiz.component';

const routes: Routes = [
{path: 'candidateQuiz/:token', component: CandidateQuizComponent},
  {
    path: 'ADMIN',
    component: ContainerComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        children: [
          { path: '', component: HomeComponent },
          { path: 'candidates', component: CandidatesComponent },
          { path: 'questions', component: QuestionsComponent },
          { path: 'quizzes', component: QuizzesComponent },
          { path: 'results', component: ResultsComponent },
          { path: 'staff', component: StaffComponent },
          { path: 'email', component: EmailComponent }
        ]
      }
    ]
  },
  {
    path: 'EVALUATOR',
    component: ContainerComponent,
    canActivate: [EvalGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'questions', component: QuestionsComponent },
          { path: 'quizzes', component: QuizzesComponent },
          { path: '', component: HomeComponent }
        ]
      }
    ]
  },
  {
    path: 'HR',
    component: ContainerComponent,
    canActivate: [HrGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'candidates', component: CandidatesComponent },
          { path: 'results', component: ResultsComponent },
          { path: 'email', component: EmailComponent },
          { path: '', component: HomeComponent }
        ]
      }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
