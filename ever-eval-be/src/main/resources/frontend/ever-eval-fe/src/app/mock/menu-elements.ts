import { SideMenu } from '../models/side-menu.model';

// This file contains mock side menu elements
// in the form of a public constant array
// it is used to fill the side menu
// with nav elements

export const ELEMENTS: SideMenu[] = [
  {
    name: 'Home',
    path: '',
    role: ['ADMIN', 'HR', 'EVALUATOR']
  },
  {
    name: 'Staff',
    path: 'staff',
    role: ['ADMIN']
  },
  {
    name: 'Candidates',
    path: 'candidates',
    role: ['ADMIN', 'HR']
  },
  {
    name: 'Results',
    path: 'results',
    role: ['ADMIN', 'HR']
  },
  {
    name: 'Questions',
    path: 'questions',
    role: ['ADMIN', 'EVALUATOR']
  },
  {
    name: 'Quiz Answers',
    path: 'quizzes',
    role: ['ADMIN', 'EVALUATOR']
  },
  {
    name: 'Emails',
    path: 'email',
    role: ['ADMIN', 'HR']
  }
];
