import { Component, OnInit, ElementRef } from '@angular/core';
import { Quiz } from '../../models/Quiz.model';
import { QuizQuestion, Level, Techno } from 'src/app/modules/questions/models/question';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from 'src/app/modules/candidates/models/Candidate';

@Component({
  selector: 'app-candidate-quiz',
  templateUrl: './candidate-quiz.component.html',
  styleUrls: ['./candidate-quiz.component.css']
})
export class CandidateQuizComponent implements OnInit {
  token:any
  candidate: Candidate = new Candidate("","",Level.Default,Techno.Default,0,false);
  quizes: Array<Quiz> = [];
  quizQuestions: Array<QuizQuestion> = [];
  selectedQuiz: Quiz = new Quiz(Level.Default, Techno.Default, this.quizQuestions, false, false,0);
  selectedQuizEval: Quiz = new Quiz(Level.Default, Techno.Default, this.quizQuestions, false, false,0);
  index: number;
  time: number;
  quiz:  Quiz = new Quiz(Level.Default, Techno.Default, this.quizQuestions, false, false,0);
  description:any;
  constructor(private elementRef: ElementRef,
    
    private http: HttpClient,
    private route: ActivatedRoute,
    private router:Router
    ){

  }

  ngOnInit() {
    

    this.token = this.route.snapshot.paramMap.get("token");
    this.http.post<any>('http://localhost:8080/getCandidateByToken?token='+this.token,"").subscribe(data => {
      if(!data)
      {
        console.log("this is fedback data");
        console.log(data);
       if(data == null)
        this.router.navigate(['/home']);
      }
      else
      {
        this.candidate = data;
        this.quiz = this.candidate.quiz;
        if(this.candidate.techno.match("JAVAEE"))
        this.description = "In this J2EE online test, we’ve added "+this.quiz.totalQuestion+" important questions to cover the basic"
        +" concept of the J2EE platform, APIs, and its services. J2EE is a cross-platform technology, built on top of the Java SE platform. It gives you a runtime environment for developing and running large-scale, multi-tiered, scalable, reliable, and secure network applications. The J2EE platform comprises the list of services, APIs, and protocols that enable the development of multi-tiered, Web-based applications. Moreover, J2EE is a set of specifications which encompasses the enterprise technologies like JMS, WS, Servlets, JSP, EJB. Most of these specifications are implemented using Java.";
        else if (this.candidate.techno.match("DOTNET"))
        this.description = "This test covers main concepts such as basic syntax, data types, operators and OOP in C# .NET "+
        "Topics: environment, syntax, data types, collections, operators, events, loops, exception handling, OOP, ASP.NET MVC, and also Entity Framework, etc.";
        else if (this.candidate.techno.match("SAP"))
        this.description = "Our SAP QUIZ   generated questions from the following SAP Modules :  "+
        "  1. SAP-ABAP"+
          "2. SAP-BASIS"+
          "3. SAP-HR"+
          "4. SAP-MM"+
          "5. SAP-SD"+
          "6. SAP-FICO";
        
        
        console.log("this is the feedback");
        
      console.log(this.candidate);
  
      }   
});

}

 //selected quiz to pass
 open() {
  this.selectedQuiz = new Quiz(Level.Default, Techno.Default, this.quizQuestions, false, false,0);
  this.selectedQuiz = this.quiz; 
  this.index=0;
  console.log('selectedQuiz', this.selectedQuiz);
  this.time=this.selectedQuiz.quizQuestions[0].question.countdown;
  console.log('this');
  console.log(this);
}

 //for evaluation quiz
 openEval(quiz: Quiz) {
  this.selectedQuizEval = quiz;
}
//controle the quiz, if it done or not "pass"
quizQone(e) {
  if (e === "true") {
    this.selectedQuiz.done = true;
  }
}
//controle the quiz, evaluated or not
quizEvaluation(e) {
  if (e === "true") {
    this.selectedQuizEval.evaluated = true;
  }

}



}
