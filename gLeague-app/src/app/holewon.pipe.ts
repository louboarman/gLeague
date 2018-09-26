import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'holewon'
})
export class HolewonPipe implements PipeTransform {

  transform(value: boolean): string {
      if (value == true){
        return "circle";
      }
  }
}
