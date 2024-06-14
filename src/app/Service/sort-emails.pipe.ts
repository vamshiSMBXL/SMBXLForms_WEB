import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortEmails'
})
export class SortEmailsPipe implements PipeTransform {
  transform(items: any[], searchTermData: string): any[] {
    debugger
    if (!items || !searchTermData) {
      return items;
    }
    var value =items.filter(item => item.emailId.toLowerCase().indexOf(searchTermData.toLowerCase()) !== -1);;
    return value;
  }
}
