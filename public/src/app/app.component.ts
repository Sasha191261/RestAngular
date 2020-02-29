import { Component, OnInit } from "@angular/core";
import { BackendService } from "./backend.service";

interface User {
  name: string;
  surname: string;
  email: string;
  nickname: string;
  passw: string;
}

interface UsersGroupFromBack {
  id: number;
  user: User;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent implements OnInit {
  users: Array<User> = [];
  user: User ={
    name: "name",
    surname: "surname",
    email: "email",
    nickname: "nickname",
    passw: "passw"
  }
  constructor(private BackService: BackendService) {}
  ngOnInit(){
    this.BackService.setUser(this.user);
  }
  getStudentFromBack() {
    this.BackService.getUsersFromBack().subscribe(
      (users: Array<UsersGroupFromBack>) => {
        for (let i = 0 ; i < users.length ; i++) {
        this.users.push(users[i].user);
        }

        console.log(users);
        // console.log(this.users);
      }
    );
  }
}
