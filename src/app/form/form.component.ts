import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Input } from "@angular/compiler/src/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  // accessurl() {
  //   this.router.navigate([]);
  // }
  form: string = "";
  adduser(input: string) {
    this.form += input;
  }
  constructor(private router: Router) {}

  ngOnInit() {}
}
