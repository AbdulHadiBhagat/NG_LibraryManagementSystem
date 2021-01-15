import { persons } from "src/app/modules/Common/persons/persons";
import { SysMenuModel } from "src/app/modules/SysMenu/SysMenuModel";
import { SysTblTsk } from "src/app/modules/SysTblTsk/SysTblTskModel";

export interface CommonState {
   sysMenu:SysMenuModel;
   person:any;
   sysTblTsk:any;
   commonTest:any;
   gridRowData:any;
   loanHistory:any;
   allBooks:any;
   bookGridData:any;
   personGridData:any;
   showPersonPopup:any;
   showBookPopup:any;
   showAllBooks:any;
   showAllHistory:any;
   bookDetailId:any;
   personDetailId:any;
   onHoldId:any,
   //personContent:any;
   

}