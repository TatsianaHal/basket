import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent implements OnInit {
  selectedId: string = "elem1";

  constructor(private dialogRef: MatDialogRef<ModalComponent>) {}

  ngOnInit(): void {}

  selectedElemId(curId: string) {
    this.selectedId = curId;
    console.log("curId:", curId);

    const scrollToCurElem = document.getElementById(curId);
    console.log("scrollToCurElem:", scrollToCurElem);
    // scrollToCurElem.scrollTo = 200;
    window.scrollBy(0, 200);
    if (!!scrollToCurElem) {
      scrollToCurElem.scrollIntoView();
    }
  }

  onElemClick(id: string) {
    this.selectedId = id;
  }

  onClose() {
    this.dialogRef.close();
  }
}
