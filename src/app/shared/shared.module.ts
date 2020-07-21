import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StepperComponent } from "./stepper/stepper.component";
import { BasketComponent } from "./basket/basket.component";
import { ModalComponent } from "./modal/modal.component";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";

@NgModule({
  declarations: [StepperComponent, BasketComponent, ModalComponent],
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
  ],
  exports: [
    StepperComponent,
    BasketComponent,
    ModalComponent,
    PerfectScrollbarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
  ],
})
export class SharedModule {}
