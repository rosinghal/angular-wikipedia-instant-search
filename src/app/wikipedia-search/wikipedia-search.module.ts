import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WikipediaSearchRoutingModule } from './wikipedia-search-routing.module';
import { WikipediaSearchComponent } from './wikipedia-search.component';
import { WikipediaSearchService } from './wikipedia-search.service';
import {JsonpModule} from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    WikipediaSearchRoutingModule,
    JsonpModule
  ],
  declarations: [WikipediaSearchComponent],
  providers: [WikipediaSearchService]
})
export class WikipediaSearchModule { }
