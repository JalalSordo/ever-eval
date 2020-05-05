import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { Staff } from 'src/app/modules/staff/models/staff.model';

@Injectable({
  providedIn: 'root'
})

// this class has for purpose to simulate a staff
// back-end endpoint with it's bqsic method and responses
export class InMemoryDataBase implements InMemoryDbService {
  createDb() {
    const staff = [
      {
        id: 1,
        password: 'nbsnbs',
        role: 'admin',
        email: 'bensadinadir@gmail.com',
        userPic: 'https://ipa.org.au/wp-content/uploads/2016/09/andrew-bw-96x96.jpg',
        lastName: 'user',
        firstName: 'Dr something'
      },
      {
        id: 2,
        password: 'nbsnbs',
        role: 'hr',
        email: 'bensadinadir@gmail.com',
        userPic: 'https://ipa.org.au/wp-content/uploads/2016/09/andrew-bw-96x96.jpg',
        lastName: 'Ben Said',
        firstName: 'Narco'
      },
      {
        id: 3,
        password: 'nbsnbs',
        role: 'eval',
        email: 'bensadinadir@gmail.com',
        userPic: 'https://ipa.org.au/wp-content/uploads/2016/09/andrew-bw-96x96.jpg',
        lastName: 'Ben Said',
        firstName: 'Bombasto'
      },
      {
        id: 4,
        password: 'nbsnbs',
        role: 'admin',
        email: 'bensadinadir@gmail.com',
        userPic: 'https://ipa.org.au/wp-content/uploads/2016/09/andrew-bw-96x96.jpg',
        lastName: 'Ben Said',
        firstName: 'Celeritas'
      },
      {
        id: 5,
        password: 'nbsnbs',
        role: 'admin',
        email: 'bensadinadir@gmail.com',
        userPic: 'https://ipa.org.au/wp-content/uploads/2016/09/andrew-bw-96x96.jpg',
        lastName: 'Ben Said',
        firstName: 'Magneta'
      },
      {
        id: 6,
        password: 'nbsnbs',
        role: 'admin',
        email: 'bensadinadir@gmail.com',
        userPic: 'https://ipa.org.au/wp-content/uploads/2016/09/andrew-bw-96x96.jpg',
        lastName: 'Ben Said',
        firstName: 'RubberMan'
      },
      {
        id: 7,
        password: 'nbsnbs',
        role: 'admin',
        email: 'bensadinadir@gmail.com',
        userPic: 'https://ipa.org.au/wp-content/uploads/2016/09/andrew-bw-96x96.jpg',
        lastName: 'Ben Said',
        firstName: 'Dynama'
      },
      {
        id: 8,
        password: 'nbsnbs',
        role: 'admin',
        email: 'bensadinadir@gmail.com',
        userPic: 'https://ipa.org.au/wp-content/uploads/2016/09/andrew-bw-96x96.jpg',
        lastName: 'Ben Said',
        firstName: 'Dr IQ'
      },
      {
        id: 9,
        password: 'nbsnbs',
        role: 'admin',
        email: 'bensadinadir@gmail.com',
        userPic: 'https://ipa.org.au/wp-content/uploads/2016/09/andrew-bw-96x96.jpg',
        lastName: 'Ben Said',
        firstName: 'Magma'
      },
      {
        id: 10,
        password: 'nbsnbs',
        role: 'admin',
        email: 'bensadinadir@gmail.com',
        userPic: 'https://ipa.org.au/wp-content/uploads/2016/09/andrew-bw-96x96.jpg',
        lastName: 'Ben Said',
        firstName: 'Tornado'
      }
    ];
    const quizzes = [
      {
        quizId: 1,
        candidateId: 5,
        hrId: 2,
        maxTimeNeeded: 10000,
        generationTimestamp: 12000000,
        expirationTimestamp: 13000000,
        urlHashcode: '654321',
        isDone: true,
        isEvaluated: true
      },
      {
        quizId: 2,
        candidateId: 5,
        hrId: 2,
        maxTimeNeeded: 10000,
        generationTimestamp: 12000000,
        expirationTimestamp: 13000000,
        urlHashcode: '123456',
        isDone: true,
        isEvaluated: true
      },
      {
        quizId: 3,
        candidateId: 5,
        hrId: 2,
        maxTimeNeeded: 10000,
        generationTimestamp: 12000000,
        expirationTimestamp: 13000000,
        urlHashcode: 'nbsnbs',
        isDone: true,
        isEvaluated: true
      },
      {
        quizId: 4,
        candidateId: 5,
        hrId: 2,
        maxTimeNeeded: 10000,
        generationTimestamp: 12000000,
        expirationTimestamp: 13000000,
        urlHashcode: 'testingurl',
        isDone: false,
        isEvaluated: false
      },
      {
        quizId: 5,
        candidateId: 5,
        hrId: 2,
        maxTimeNeeded: 10000,
        generationTimestamp: 12000000,
        expirationTimestamp: 13000000,
        urlHashcode: 'test123',
        isDone: true,
        isEvaluated: false
      },
      {
        quizId: 6,
        candidateId: 5,
        hrId: 2,
        maxTimeNeeded: 10000,
        generationTimestamp: 12000000,
        expirationTimestamp: 13000000,
        urlHashcode: 'nananinanana',
        isDone: true,
        isEvaluated: true
      }
    ];
    const results = [
      {
        eveluationId: 1,
        quizId: 1,
        evaluatorId: 1,
        finalScore: 69,
        timeElapsed: 5012,
        remarks: 'good candidate nice work etc'
      },
      {
        eveluationId: 2,
        quizId: 2,
        evaluatorId: 1,
        finalScore: 22,
        timeElapsed: 9000,
        remarks: 'good candidate nice work etc'
      },
      {
        eveluationId: 3,
        quizId: 3,
        evaluatorId: 3,
        finalScore: 41,
        timeElapsed: 4512,
        remarks: 'good candidate nice work etc'
      },
      {
        eveluationId: 4,
        quizId: 6,
        evaluatorId: 9,
        finalScore: 85,
        timeElapsed: 5012,
        remarks: 'good candidate nice work etc'
      }
    ];
    return { quizzes, staff, results };
  }
  // genId(staff: Staff[]): number {
  //   return staff.length > 0 ? Math.max(...staff.map(user => user.id)) + 1 : 1;
  // }
}
