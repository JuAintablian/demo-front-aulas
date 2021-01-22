import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteUmComponent } from './componente-um/componente-um.component';
import { BindingComponent } from './binding/binding.component';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaiComponent } from './pai/pai.component';
import { FilhoComponent } from './filho/filho.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteUmComponent,
    BindingComponent,
    PaiComponent,
    FilhoComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
