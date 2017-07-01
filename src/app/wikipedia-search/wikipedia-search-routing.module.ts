import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WikipediaSearchComponent} from "./wikipedia-search.component";

const routes: Routes = [
  {path: '', component: WikipediaSearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WikipediaSearchRoutingModule { }
