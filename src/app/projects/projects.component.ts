import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.querySelector('body').classList.remove('shop-bg');
    document.querySelector('body').classList.remove('home-bg');

    document.querySelector('body').classList.add('default-bg');
  }

}
