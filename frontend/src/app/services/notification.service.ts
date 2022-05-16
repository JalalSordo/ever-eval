import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Notification } from '../models/notification.model';
import { NOTIFS } from '../mock/tmp-mock-notifs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor() { }
  getNotifs(): Observable<Notification[]> {
    return of(NOTIFS);
  }
}
