import { Component, OnInit } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
// import { environment } from "../../environments/environment";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.css"]
})
export class DisplayComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // interface ApiResponse {
    //   login: string;
    // }
    // this.http.get<ApiResponse>(
    //   "'https://api.github.com/users/daneden?access_token=8c643da2cd691330f524bf7e3bb1b7290c7fe1db"
    // );
  }
}
