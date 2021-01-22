import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import notify from 'devextreme/ui/notify';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private store:NgRedux<any>,private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      debugger;
      
      let p = this.store.getState().common.person;
      if(p.sysSeq){
        return true;
      }
      notify("Sorry",'warning',600);
      this.router.navigateByUrl('');
      return false;
  }
  
}
