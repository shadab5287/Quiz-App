import { Component, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { Quizz } from '../quizz.model';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizzes: Quizz[] = [];

  currentQuiz = 0;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;

  // randomize!: number; 

  result = false;

  constructor(private quizservice:QuizService, private route:Router) { }

  ngOnInit(): void {
    this.quizzes = this.quizservice.getQuizzes();

    // this.randomize = Math.floor(Math.random() * this.quizzes.length-1)
  }
  onAnswer(option: boolean){
    this.answerSelected = true;
    setTimeout(() => {
      this.currentQuiz++;
      // this.randomize =Math.floor(Math.random()*this.quizzes.length-1)
      this.answerSelected = false;  
    }, 1000);

    if (option) {
      this.correctAnswers++;
    } else {
      this.incorrectAnswers++;
    }

    
    
    
  }
  showResult(){
    this.result = true;
    
  }
  restart(){
    // this.route.navigate(['login'])
    this.currentQuiz = 0;
    this.answerSelected = false;
    this.correctAnswers = 0;
   this.incorrectAnswers = 0;
   this.quizzes=this.shuffle(this.quizzes)
  
    // randomize!: number; 
  
    this.result = false;
  
  }
  shuffle(array:any) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

}
