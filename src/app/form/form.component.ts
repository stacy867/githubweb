import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// import { Input } from "@angular/compiler/src/core";
import { user } from "../user";
import { Repository } from "../repository";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  goToUrl(id) {
    // input: string;
    // this.form += input;
    this.router.navigate(["/display", id]);
  }
  repo: Repository[];
  user: user;
  // form: string = "";

  constructor(private router: Router) {}

  ngOnInit() {}
}
