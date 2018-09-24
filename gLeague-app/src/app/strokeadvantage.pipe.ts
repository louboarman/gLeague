import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strokeadvantage'
})
export class StrokeadvantagePipe implements PipeTransform {

  transform(value: number, args1: number, args2: number): string {
    return this.getPlayerAdvantage(value, args1, args2)
  }

  getPlayerAdvantage(playerRoundId:number, OpponentRoundId:number, holeNumber: number){
    if (playerRoundId==3){
      return "holewon";
     } 
  }

}
