import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StepperComponent } from "./stepper/stepper.component";
import { BasketComponent } from "./basket/basket.component";
import { ModalComponent } from "./modal/modal.component";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  declarations: [StepperComponent, BasketComponent, ModalComponent],
  imports: [CommonModule, PerfectScrollbarModule, MatTabsModule],
  exports: [
    StepperComponent,
    BasketComponent,
    ModalComponent,
    PerfectScrollbarModule,
    MatTabsModule,
  ],
})
export class SharedModule {}
