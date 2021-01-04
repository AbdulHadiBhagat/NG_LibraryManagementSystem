import { persons } from "src/app/modules/Common/persons/persons";
import { SysMenuModel } from "src/app/modules/SysMenu/SysMenuModel";
import { SysTblTsk } from "src/app/modules/SysTblTsk/SysTblTskModel";

export interface CommonState {
   sysMenu:SysMenuModel;
   persons:any;
   sysTblTsk:any;
   commonTest:any;
   gridRowData:any;

}