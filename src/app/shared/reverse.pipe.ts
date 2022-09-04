import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    if(value?.length) {
      return value.split('').reverse().join('');
    }
    return value;
  }
}
