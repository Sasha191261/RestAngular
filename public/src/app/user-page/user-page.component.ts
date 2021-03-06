import { Component, OnInit } from "@angular/core";
import { FrontService } from "../service/front.service";
import {   UserLikes } from "../api";
import { ImageBack } from "../api";
import { BackendService } from "../service/backend.service";

interface User {
  id: string,
  name: string;
  surname: string;
  email: string;
  nickname: string;
  passw: string;
}

@Component({
  selector: "app-user-page",
  templateUrl: "./user-page.component.html",
  styleUrls: ["./user-page.component.less"]
})
export class UserPageComponent {
  counter = 1;
  translate() {
    const visionArea = document.getElementsByClassName(
      'visual-area'
    ) as HTMLCollectionOf<HTMLElement>;
    const information = document.getElementsByClassName(
      'information'
    ) as HTMLCollectionOf<HTMLElement>;
    const icon = document.getElementsByClassName(
      'menu-icon'
    ) as HTMLCollectionOf<HTMLElement>;
    this.counter++;
    if (this.counter % 2 === 0) {
      information[0].style.transform = 'translate(65px,0)';
    } else {
      information[0].style.transform = 'translate(-65px,0)';
    }
  }
  /*
  user: User;
  counter = 1;
  counterLike = 0; // надо сделать массивом для каждой фотографии
  enrlargedImage: string;
  enlargeVision = false;
  imageBack: Array<ImageBack> = [];
  imageLikeAuthorizateUser: Array<number> = [];
  constructor(
    private frontService: FrontService,
    private backService: BackendService
  ) {}
  translate() {
    const visionArea = document.getElementsByClassName(
      'visual-area'
    ) as HTMLCollectionOf<HTMLElement>;
    const information = document.getElementsByClassName(
      'information'
    ) as HTMLCollectionOf<HTMLElement>;
    const icon = document.getElementsByClassName(
      'menu-icon'
    ) as HTMLCollectionOf<HTMLElement>;
    this.counter++;
    if (this.counter % 2 === 0) {
      information[0].style.transform = 'translate(65px,0)';
    } else {
      information[0].style.transform = 'translate(-65px,0)';
    }
  }
  like($event, n: number) {
    if (this.imageLikeAuthorizateUser[n] === 0) {
      $event.target.src = 'assets/likeKr.png';
      this.imageLikeAuthorizateUser[n] = 1;
      let user = this.frontService.getAuthorizationUser();
      let userLikes: UserLikes = {
        id: user.id,
        likes: this.imageLikeAuthorizateUser
      };
      console.log(userLikes);
      this.frontService.setUserLike(userLikes);
    } else {
      $event.target.src = 'assets/like.png';
      this.imageLikeAuthorizateUser[n] = 0;
      const user = this.frontService.getAuthorizationUser();
      const userLikes: UserLikes = {
        id: user.id,
        likes: this.imageLikeAuthorizateUser
      };
      this.frontService.setUserLike(userLikes);
      console.log(userLikes);
    }
  }

  enlargedImages($event) {
    console.log($event.target.src);
    this.enrlargedImage = $event.target.src.split('http://localhost:4200/', 2 )[1];
    console.log(this.enrlargedImage);
    this.invertEnlargeVision();
  }
  invertEnlargeVision() {
    this.enlargeVision = !this.enlargeVision;
  }
  ngOnInit(): void {
    this.user = this.frontService.getAuthorizationUser();
    this.backService.getImage().subscribe((images: Array<ImageBack>) => {
      for (let i = 0; i < images.length; i++) {
        this.imageBack.push(images[i]);
        this.imageLikeAuthorizateUser.push(0);
      }
    });
    console.log(this.imageBack);
  }
  */
}
