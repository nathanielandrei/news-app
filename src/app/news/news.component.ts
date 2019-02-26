import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../core/services/news-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public news: any[];

  constructor(private _newsService: NewsServiceService) { }

  ngOnInit() {
    this._newsService.getNews().subscribe((value) => {
      console.info(value.articles);
      this.news = value.articles;
    });
  }
}
