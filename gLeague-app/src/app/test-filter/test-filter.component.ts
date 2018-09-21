import { Component, OnInit } from '@angular/core';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-test-filter',
  templateUrl: './test-filter.component.html',
  styleUrls: ['./test-filter.component.css']
})
export class TestFilterComponent {

  users: any[] = [{ name: 'John' }, { name: 'Jane' }, { name: 'Mario' }];
  userFilter: any = { name: '' };

  constructor(private filterPipe: FilterPipe) {
    console.log(filterPipe.transform(this.users, { name: 'M'}));
  }

}
