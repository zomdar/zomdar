import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.querySelector('body').classList.remove('home-bg');
    document.querySelector('body').classList.remove('default-bg');

    document.querySelector('body').classList.add('shop-bg');
  }

}
