import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";
// import { HttpClient } from "@angular/common/http";
// import { environment } from "../../environments/environment";
import { user } from "../user";
import { Repository } from "../repository";
import { ActivatedRoute } from "@angular/router";
// import { Router } from "@angular/router";
@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.css"]
})
export class DisplayComponent implements OnInit {
  profileservice: ProfileService;
  myUsers: user;
  myrepos: Repository[];
  constructor(
    private profile: ProfileService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = this.router.snapshot.paramMap.get("id");
    this.profile.userDemand(id);
    this.profile.repoDemand(id);

    this.myUsers = this.profile.myUser;
    this.myrepos = this.profile.myrepo;
  }
}
