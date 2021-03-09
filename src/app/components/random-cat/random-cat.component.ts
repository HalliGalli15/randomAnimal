import { Component, OnInit } from '@angular/core';

import { catImage } from './../../interfaces/catImage';
import { CatService } from './../../services/cat/cat.service';

@Component({
  selector: 'app-random-cat',
  templateUrl: './random-cat.component.html',
  styleUrls: ['./random-cat.component.scss']
})
export class RandomCatComponent implements OnInit {

  loadingImage: boolean = true;
  cat: catImage = {url: ''};

  constructor(private api: CatService) { }

  ngOnInit(): void {
    this.loadImage();
  }

  loadImage(){
    this.loadingImage = true;
    this.api.get().subscribe((cat: catImage) => {
      this.cat = cat[0];
    });
  }

  openSettings(){
    
  }
  
  onLoadImage() {
    this.loadingImage = false;
  }

}
