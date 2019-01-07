import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Module
import { MaterialModule } from './material/material.module';

// msv4knw-nav
import { Msv4knwNavModule } from '@msv7-workspace/msv4knw-nav';

// Banner
import { Msv7knwBannerModule } from '@msv7-workspace/msv7knw-banner';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    Msv4knwNavModule,
    Msv7knwBannerModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
