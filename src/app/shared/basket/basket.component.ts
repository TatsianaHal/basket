import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: "app-basket",
  templateUrl: "./basket.component.html",
  styleUrls: ["./basket.component.css"],
})
export class BasketComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  onBasket() {
    console.log("onBasket");
    const dialogRef = this.dialog.open(ModalComponent, {
      width: "1000px",
      height: "90%",
      // required class set parent block position relative
      panelClass: "custom-panel-cls",
    });
  }
}
