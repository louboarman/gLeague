import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(value:number): string {
    if(value ==0){
      return "Player";
      } else {
        if(value ==1){
          return "Sub";
        }
        else{
          return "Admin";
        }
      }
    }
}
