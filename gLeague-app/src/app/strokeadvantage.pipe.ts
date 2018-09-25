import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strokeadvantage'
})
export class StrokeadvantagePipe implements PipeTransform {

  transform(value: number, args1: number): string {
    return this.getPlayerAdvantage(value, args1)
  }

  getPlayerAdvantage(holeNumber: number, playerRoundId:number){
    if (playerRoundId==3){
      return "holewon";
     } 
  }

}
