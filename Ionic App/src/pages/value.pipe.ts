import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'value'
})
export class ValuePipe implements PipeTransform {

transform(value: any, args?: any[]): any[] {
        console.log("sdfsdfs",value);
        let values = (<any>Object).values(value);

     console.log(values);
        return values;
    }

}