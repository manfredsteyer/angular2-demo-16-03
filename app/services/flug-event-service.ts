/**
 * Created by steyer on 09.05.2016.
 */

import { ReplaySubject } from 'rxjs/subject/ReplaySubject'

export class FlugEventService {
    selectedFlug$ = new ReplaySubject(1);
}