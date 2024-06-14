import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    debugger;
    if (!items || !searchTerm) {
      return items;
    }
    var value =items.filter(item => item.collegeName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    return value;
  }

}
