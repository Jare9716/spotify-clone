import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msToMin',
})
export class CustomPipe implements PipeTransform {
  transform(miliseconds: number): string {
    //Convert ms to sec and min
    let minutes = Math.floor(miliseconds / 60000);
    let seconds = Number(((miliseconds % 60000) / 1000).toFixed(0));
    //Create the minutes and seconds variable
    let minAndSec = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    //Validate if we have a completeme minute
    if (seconds == 60) {
      minAndSec = minutes + 1 + ':00';
    }
    return minAndSec;
  }
}
