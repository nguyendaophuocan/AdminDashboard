import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { LoginComponent } from "./login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { UsersComponent } from './modules/users/users.component';
// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { firebaseConfig } from "src/assets/firebase";
import { AuthService } from "./services/auth.service";
@NgModule({
  declarations: [AppComponent, LoginComponent, UsersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    DashboardModule,
    AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireAuthModule,
    // AngularFirestoreModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
