import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { user } from "./user";
import { Repository } from "./repository";
@Injectable({
  providedIn: "root"
})
export class ProfileService {
  myUser: user;
  myrepo: Repository[];
  

  constructor(private http: HttpClient) {
    this.myUser = new user(0, "", "", 0);
    this.myrepo = [];
  }
  userDemand(id) {
    interface ApiResponse {
      login: string;
      id: number;
      avatar_url: string;
      public_repos: number;
    }
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          "https://api.github.com/users/" +
            id +
            "?access_token=" +
            environment.apiKey
        )
        .toPromise()
        .then(
          response => {
            this.myUser.name = response.login;
            this.myUser.avatar = response.avatar_url;
            this.myUser.repos = response.public_repos;
            this.myUser.id = response.id;
            console.log(this.myUser);
            resolve();
          },
          error => {
            this.myUser.name = "next time";
            this.myUser.avatar = "next time";
            this.myUser.repos = 0;
            this.myUser.name = "next time";
            reject(error);
          }
        );
    });
    return promise;
  }
  repoDemand(ide) {
    interface ApiResponse {
      name: string;
      description: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          "https://api.github.com/users/" +
            ide +
            "/repos?access_token=" +
            environment.apiKey
        )
        .toPromise()
        .then(
          response => {
            for (var j in response) {
              this.myrepo.push(response[j]);
            }
            console.log(this.myrepo);
            resolve();
          },
          error => {
            this.myUser.name = "next time";
            this.myUser.avatar = "next time";
            this.myUser.repos = 0;
            this.myUser.name = "next time";
            reject(error);
          }
        );
    });
    return promise;
  }
}
