import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
} from "@angular/core";

@Component({
  selector: "app-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.css"],
})
export class StepperComponent implements OnInit, OnChanges {
  selectedId: string = "elem1";

  @Input() curId: string;

  @Output() selectedElemId: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.selectedId = this.curId;
  }

  onElemClick(id: string) {
    this.selectedId = id;
    this.selectedElemId.emit(id);
  }
}
