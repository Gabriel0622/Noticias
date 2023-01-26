import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interface/news';
import { NewsService } from 'src/app/service/news.service';
import { Examples } from './examples';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {
  paginationSize: number = 10;
  paginationPos: number = 1;
  numbers = Array(this.paginationSize).fill(0).map((x, i) => i);
  news: News[];
  constructor(private newsService: NewsService) { }
  
  ngOnInit(): void {
    /* this.newsService.getNews(paginationPos).subscribe(response =>{
      this.news = response;
    }) */
   /*  this.newsService.getPaginationSize().subscribe(response =>{
      this.paginationSize = response;
    }) */
    this.news = new Examples().examples;
  }

  seeNewsDetail(pos:number){
    this.newsService.getNewsDetail(this.paginationPos,pos).subscribe(response =>{

    });
  }

  changePage(paginationPos:number){
    this.paginationPos = paginationPos;
  }

  isPageActive(pagePos:number){
    return pagePos === this.paginationPos;
  }

}
