import { WXuser } from './../../models/wxuser';
import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animations/fly-in';


@Component({
  selector: 'attention-user',
  templateUrl: './attention-user.component.html',
  styleUrls: ['../attention.component.scss'],
  animations: [
    flyIn
  ]
})
export class AttentionUserComponent implements OnInit {
  loading: Boolean = false;
  users: WXuser[];
  constructor() { }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      let dd = new Array<WXuser>();
      for (let i = 0; i < 100; i++) {
        let newuser = new WXuser();
        newuser.id = i;
        newuser.age = i;
        newuser.username = 'hello';
        dd.push(newuser);
      }
      this.users = dd;
      this.loading = false;
    }, 3000);
  }

  public pageChanged(event: any): void {
  }
  delComment(id: number) {

  }

  paginate(event) {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
}
}
