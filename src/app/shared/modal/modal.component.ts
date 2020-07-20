import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import Swal from "sweetalert2";
import { MatTabChangeEvent } from "@angular/material/tabs";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent implements OnInit {
  selectedId: string = "elem1";

  private toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    showClass: {
      popup: "",
      backdrop: "",
      icon: "swal2-icon-show",
    },
    hideClass: {
      popup: "",
      backdrop: "",
      icon: "swal2-icon-hide",
    },
    onOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  constructor(private dialogRef: MatDialogRef<ModalComponent>) {}

  ngOnInit(): void {}

  selectedElemId(curId: string) {
    this.selectedId = curId;
    console.log("curId:", curId);
  }

  onElemClick(id: string) {
    this.selectedId = id;
  }

  onClose() {
    this.dialogRef.close();
  }

  onGetBtn() {
    this.dialogRef.close();
    this.toast.fire("Заявка направлена в обработку");
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log("tabChangeEvent:", tabChangeEvent);
  }
}
