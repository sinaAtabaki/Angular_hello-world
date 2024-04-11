import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'summary',
    standalone: true
})
export class SummaryPipe implements PipeTransform{
    transform(value: string, limit?: number){
            if(!value)
                return null;

            //Wurde der Parameter Limit gesetzt? Wenn nein, dann nehme 10 als default
            let actualLimit = (limit) ? limit: 10;
            return value.substring(0, actualLimit) + '...';
    }
}