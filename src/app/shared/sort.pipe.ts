import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: any, keyName: string) {
    if(value?.length) {
      let sortArr = value.sort((a, b) => {
        if(a[keyName] > b[keyName]) {
          return 1;
        } else {
          return -1;
        }
      });
      return sortArr;
    }
    return value;
  }
 }
