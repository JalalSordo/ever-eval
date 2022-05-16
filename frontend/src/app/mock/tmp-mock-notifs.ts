import { Notification } from '../models/notification.model';

// this file contains mock notifications
// for testing purposes, this is a temporary
// file that will be replaced later on by
// an actual table / end point

export const NOTIFS: Notification[] = [
  {
    id: 1,
    text: 'hgf ghfjh gfjhg fhgf jhfg jhgfjhgf jhgfghf',
    read: false,
    receivers: []
  },
  {
    id: 2,
    text: '/ jhkg kjgjkhg kjhg jkhg jkhg',
    read: true,
    receivers: [0, 5]
  },
  {
    id: 3,
    text: 'jhg jkhgjhk gjkh gjkhg kjhg kjhg jkhgkjhg',
    read: false,
    receivers: [0]
  },
  {
    id: 4,
    text: 'jhg jhkgjkh gjkhg kjghjk hgjkghjkhgjkhg',
    read: true,
    receivers: [1]
  },
  {
    id: 5,
    text: 'mlj mljk mlkjml jmlkj mlkj mlkjmljkmlk kj',
    read: true,
    receivers: [2]
  },
  {
    id: 6,
    text: 'fgkjh gjhkh gkj gjkh gjkhg jkhgjk hgkjh gjhgjhg jhgjh gjhgjh gjhgjh gjhgjhgjhg jg',
    read: false,
    receivers: []
  },
  {
    id: 7,
    text: 'hgf hgf hgfjhgf jhgfjhgf jhgfjhgf',
    read: true,
    receivers: []
  },
  {
    id: 6,
    text: 'fgkjh gjhkh gkj gjkh gjkhg jkhgjk hgkjh gjhgjhg jhgjh gjhgjh gjhgjh gjhgjhgjhg jg',
    read: false,
    receivers: [1]
  },
  {
    id: 7,
    text: 'hgf hgf hgfjhgf jhgfjhgf jhgfjhgf',
    read: true,
    receivers: []
  },
  {
    id: 6,
    text: 'fgkjh gjhkh gkj gjkh gjkhg jkhgjk hgkjh gjhgjhg jhgjh gjhgjh gjhgjh gjhgjhgjhg jg',
    read: false,
    receivers: [3]
  },
  {
    id: 7,
    text: 'hgf hgf hgfjhgf jhgfjhgf jhgfjhgf',
    read: true,
    receivers: []
  }
];
