import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetter'
})
export class FirstLetterPipe implements PipeTransform {

  transform(value: string): string {
    
    return value.split("").map(item => item[0].toLowerCase()).join("");
  }

}
