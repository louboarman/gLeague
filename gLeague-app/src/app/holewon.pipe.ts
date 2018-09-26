import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'holewon'
})
export class HolewonPipe implements PipeTransform {

  transform(value: number, playerAdv: number, opponentAdv: number, playerScore: number, opponentScore: number): string {
    let scopeofAdvantage = playerAdv - opponentAdv;
    if(scopeofAdvantage > 0){
      if (scopeofAdvantage >= value){
        return "holeAdv";
      }
    }
  }

}
