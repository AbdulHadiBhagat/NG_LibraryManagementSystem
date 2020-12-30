import { person } from "src/app/modules/Person/person";
import { SysMenuModel } from "src/app/modules/SysMenu/SysMenuModel";
import { SysTblTsk } from "src/app/modules/SysTblTsk/SysTblTskModel";

export interface CommonState {
   sysMenu:SysMenuModel;
   person:person;
   sysTblTsk:SysTblTsk;

}