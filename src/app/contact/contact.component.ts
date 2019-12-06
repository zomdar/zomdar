import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.querySelector('body').classList.remove('shop-bg');
    document.querySelector('body').classList.remove('home-bg');

    document.querySelector('body').classList.add('default-bg');
  }

}
