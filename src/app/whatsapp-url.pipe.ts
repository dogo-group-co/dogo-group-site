import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'whatsappUrl',
})
export class WhatsappUrlPipe implements PipeTransform {
  transform(message: string): string {
    return `https://wa.me/59898100448?text=${encodeURIComponent(message)}`;
  }
}