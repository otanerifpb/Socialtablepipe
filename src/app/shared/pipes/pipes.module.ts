import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LetraMaiusculaPipe} from './letra-maiuscula.pipe';
import { CpfPipe } from './cpf.pipe';
import { TelefonePipe } from './telefone.pipe';



@NgModule({
  declarations: [
    LetraMaiusculaPipe,
    CpfPipe,
    TelefonePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LetraMaiusculaPipe,
    CpfPipe,
    TelefonePipe
  ]
})
export class PipesModule { }
