import { Pipe, PipeTransform } from '@angular/core';
import { startCase } from 'lodash';

@Pipe({ name: 'customTitleCase' })
export class CustomTitleCasePipe implements PipeTransform {
  transform(value: string): string {
    return startCase(value);
  }
}
