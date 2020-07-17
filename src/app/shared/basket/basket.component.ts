import { Component, OnInit } from "@angular/core";
// import { MatDialog } from "@angular/material";

@Component({
  selector: "app-basket",
  templateUrl: "./basket.component.html",
  styleUrls: ["./basket.component.css"],
})
export class BasketComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onBasket() {
    console.log("onBasket");
  }
}
