import { Component, OnInit } from '@angular/core';

import { githubProfile } from './../../interfaces/githubProfile';
import { GithubService } from './../../services/github/github.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor(private api: GithubService) { }

  profile: githubProfile;

  ngOnInit(): void {
    this.api.get("HalliGalli15").subscribe((profile: githubProfile) => {
      this.profile = profile;
    });
  }

  ngOnDestroy(){  }

}
