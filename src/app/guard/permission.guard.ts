import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { RoutePath, Permission } from "../app.constant";

@Injectable({ providedIn: "root" })
export class PermissionGuard  {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // Authentication
    // if (this.authService.isAuthenticated()) {
    //   const role = route.data.role;
    //   // Authorization
    //   // TODO: Check if role match with user permissions or not
    //   if (Permission.admin === role) {
    //     return true;
    //   } else {
    //     this.router.navigate(["not-authorize"]);
    //     return false;
    //   }
    // } else {
    //   this.router.navigate([RoutePath.login]);
    //   return false;
    // }
    return true
  }
}
