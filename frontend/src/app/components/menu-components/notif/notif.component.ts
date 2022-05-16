import { Component, OnInit, Input } from '@angular/core';
import { Notification } from '../../../models/notification.model';
import { NotificationService } from '../../../services/notification.service';
import { Staff } from '../../../modules/staff/models/staff.model';
import { LoginService } from 'src/app/modules/login/services/login.service';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.css']
})
export class NotifComponent implements OnInit {
  notifications: Notification[];
  @Input() staff: Staff;
  constructor(private notifService: NotificationService, private loginService: LoginService) { }

  ngOnInit() {
    //this.getNotifs();
  }

  getNotifs() {
    this.notifService.getNotifs().subscribe(notifs => (this.notifications = notifs));
  }

  filterUnread() {
    return this.notifications.filter(
      notification =>
        notification.read === false &&
        (notification.receivers.length === 0 || notification.receivers.includes(this.staff.id))
    ).length;
  }
  logout() {
    this.loginService.logout();
  }
}
