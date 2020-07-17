import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StepperComponent } from "./stepper/stepper.component";
import { BasketComponent } from "./basket/basket.component";

@NgModule({
  declarations: [StepperComponent, BasketComponent],
  imports: [CommonModule],
  exports: [StepperComponent, BasketComponent],
})
export class SharedModule {}
