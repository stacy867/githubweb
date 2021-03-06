import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
// import { ProfileService } from "./profile.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DisplayComponent } from "./display/display.component";
import { FormComponent } from "./form/form.component";
import { ParentComponent } from "./parent/parent.component";
import { DateCountPipe } from './date-count.pipe';
import { StrikethroughDirective } from './strikethrough.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ParentComponent,
    DisplayComponent,
    DateCountPipe,
    StrikethroughDirective
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
