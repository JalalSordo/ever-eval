// this class defines the model of a notification object

export class Notification {
  id: number;
  text: string;
  read: boolean;
  receivers: number[];
}
