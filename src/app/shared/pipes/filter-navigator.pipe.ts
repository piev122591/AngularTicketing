import { Pipe, PipeTransform } from '@angular/core';
import { startCase } from 'lodash';

@Pipe({ name: 'filterNavigator' })
export class FilterNavigatorPipe implements PipeTransform {
  transform(controls: any[], query: string): any[] {
    return query
      ? controls.filter((control) =>
          control.name.toLowerCase().includes(query.toLowerCase())
        )
      : controls;
  }
}
