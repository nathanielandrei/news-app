import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsComponent } from './news/news.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: NewsComponent},
  {path: 'news-detail/:index', component: NewsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
