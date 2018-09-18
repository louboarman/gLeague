import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(value: any, arg1:number): string {
    if (arg1 = 1){
      return 'Player'
    } else {
      if (arg1 = 2){
        return 'Sub'
      } else{
        return 'Admin'
      }
    }
  }
}
