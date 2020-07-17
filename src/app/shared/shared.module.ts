import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StepperComponent } from "./stepper/stepper.component";
import { BasketComponent } from "./basket/basket.component";
import { ModalComponent } from "./modal/modal.component";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";

@NgModule({
  declarations: [StepperComponent, BasketComponent, ModalComponent],
  imports: [CommonModule, PerfectScrollbarModule],
  exports: [
    StepperComponent,
    BasketComponent,
    ModalComponent,
    PerfectScrollbarModule,
  ],
})
export class SharedModule {}
