import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from "@angular/material/dialog";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports: [
    MatDialogModule,
    BrowserModule,
    SharedModule,
    NoopAnimationsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
