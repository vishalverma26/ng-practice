import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterStr: any, propName: string) {

    if(!value.length || filterStr === '') {
      return value;
    }

    let val = value.filter((obj) => {
      return obj[propName]?.includes(filterStr);
    });

    return val;
  }
}
