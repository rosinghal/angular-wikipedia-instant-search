import { Component, OnInit } from '@angular/core';
import { WikipediaSearchService } from './wikipedia-search.service';
import { Subject } from 'rxjs/Subject';
//application wide shared Rx operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-wikipedia-search',
  templateUrl: './wikipedia-search.component.html',
  styleUrls: ['./wikipedia-search.component.scss']
})

export class WikipediaSearchComponent implements OnInit {
  items:Array<string>;
  data;
  term$ = new Subject<string>();
  constructor(private wikipedia:WikipediaSearchService) {
  }

  ngOnInit() {
    this.wikipedia.search(this.term$)
      .subscribe(results => {
        this.items = results[1];
        this.data = results;
      });
  }

}
