import { Pipe, PipeTransform } from '@angular/core';
import {SkillDetailsModel} from '../Model/SkillDetailsModel'

@Pipe({
  name: 'skillFilter'
})
export class SkillFilterPipe implements PipeTransform {

  public transform(values: SkillDetailsModel[], filter: string): SkillDetailsModel[] {
    
    if (!values || !values.length) return [];
    if (!filter) return values;
    // Filter items array, items which match will return true
    return values.filter(v => v.SkillName.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }

}
