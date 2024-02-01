import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article', //Il tag per inserire il componente sarà <app-article>
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'card';
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = 'Gabibbo';
    this.link = 'https://www.iusinitinere.it/wp/wp-content/uploads/2019/06/gabbibo.jpg';
    this.votes = 10;
  }

  voteUp():Boolean {
    this.votes += 1;
    return false; 
}
voteDown():Boolean{
    this.votes -= 1;
    return false; 
}

  ngOnInit() {}
}