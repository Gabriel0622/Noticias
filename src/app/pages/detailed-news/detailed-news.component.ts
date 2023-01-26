import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Examples } from 'src/app/interface/examples';
import { News } from 'src/app/interface/news';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-detailed-news',
  templateUrl: './detailed-news.component.html',
  styleUrls: ['./detailed-news.component.css']
})
export class DetailedNewsComponent implements OnInit {

  news: News;

  constructor(private activatedRoute: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit(): void {
    this.loadProperties();
  }

  loadProperties(): void{
    /* this.activatedRoute.params.subscribe((params)=>{
      let paginationPosition = params['paginationPosition'];
      let newsPosition = params['newsPosition'];
      this.newsService.getNewsDetail(paginationPosition, newsPosition).subscribe(response =>{
        this.news = response;
      })
    }) */
    this.news = new Examples().news[0];
  }

}
