import { Injectable } from '@angular/core';
import { Quizz } from '../quizz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quizz[] = [
    {
      question: 'What\'s the capital of india?',
      answer: [
        { option: 'Mumbai', correct:false },
        { option: 'Delhi', correct:true },
        { option: 'Patna', correct:false },
        { option: 'Kanpur', correct:false }
      ]
    },
    {
      question: 'Cairo is the capital of which country?',
      answer: [
        { option: 'Georgia', correct:false },
        { option: 'Haiti', correct:false },
        { option: 'Iceland', correct:false },
        { option: 'Egypt', correct:true }
      ]
    },
    {
      question: ' Santiago is the capital of which country?',
      answer: [
        { option: 'Croatia', correct:false },
        { option: 'Cuba', correct:false },
        { option: 'Congo', correct:false },
        { option: 'Chile', correct:true }
      ]
    },{
      question: 'Tehran  is the capital of which country?',
      answer: [
        { option: 'Iraq', correct:false },
        { option: 'Iran', correct:true },
        { option: 'Kenya', correct:false },
        { option: 'Kosovo', correct:false }
      ]
    },
    {
      question: 'Kathmandu is the capital of which country?',
      answer: [ 
        { option: 'Peru', correct:false },
        { option: 'Oman', correct:false },
        { option: 'Japan', correct:false },
        { option: 'Nepal', correct:true },
      ]
    },
    {
      question: 'What\'s the capital city of Behrain?',
      answer: [
        { option: 'Dhaka', correct:false },
        { option: 'Manama', correct:true },
        { option: 'Minime', correct:false },
        { option: 'Decor', correct:false },
      ]
    }
  ]

  constructor() { }

  getQuizzes(){
    return this.quizzes;
  }
}
