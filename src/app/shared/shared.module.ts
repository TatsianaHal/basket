import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StepperComponent } from "./stepper/stepper.component";
import { BasketComponent } from "./basket/basket.component";
import { ModalComponent } from "./modal/modal.component";

@NgModule({
  declarations: [StepperComponent, BasketComponent, ModalComponent],
  imports: [CommonModule],
  exports: [StepperComponent, BasketComponent, ModalComponent],
})
export class SharedModule {}
