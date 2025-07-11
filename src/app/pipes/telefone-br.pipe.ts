import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefoneBr',
})
export class TelefoneBrPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  }
}
