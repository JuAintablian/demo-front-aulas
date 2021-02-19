import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteUmComponent } from './componente-um/componente-um.component';
import { BindingComponent } from './binding/binding.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaiComponent } from './pai/pai.component';
import { FilhoComponent } from './filho/filho.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HttpClientModule } from '@angular/common/http';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ValditorDirective } from './diretivas/valditor.directive';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteUmComponent,
    BindingComponent,
    PaiComponent,
    FilhoComponent,
    FormularioComponent,
    TemplateDrivenComponent,
    ValditorDirective,
    ValditorDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
