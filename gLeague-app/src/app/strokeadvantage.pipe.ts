import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strokeadvantage'
})
export class StrokeadvantagePipe implements PipeTransform {

  transform(value: number, playerAdv: number, opponentAdv): string {
    let scopeofAdvantage = playerAdv - opponentAdv;
    if(scopeofAdvantage > 0){
      if (scopeofAdvantage >= value){
        return "holeAdv";
      }
    }
  }
}
