import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { user } from "./user";
import "rxjs/add/operator/map";
@Injectable({
  providedIn: "root"
})
export class ProfileService {
  // name: user;
  private name: string;
  private clientid = "";

  constructor(private http: HttpClient) {}
}
