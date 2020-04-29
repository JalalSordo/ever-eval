import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SideMenu } from '../models/side-menu.model';
import { ELEMENTS } from '../mock/menu-elements';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {
  constructor() { }

  getElements(): Observable<SideMenu[]> {
    return of(ELEMENTS);
  }
}
