import { Injectable } from "@angular/core";
import { DETAILS_TABLE } from "./lazy-loading.dummy";
import { Observable, Subject } from 'rxjs';
import { State } from "./store";

@Injectable({
  providedIn: 'root',
})

export class LazyLoadingService {

  show_hideContent:boolean = true;
  jsonData:any;

  load(): Observable<State>{
    this.jsonData= DETAILS_TABLE;
    const output = new Subject<State>();
    setTimeout(()=>{
      output.next(this.jsonData);
      output.complete()
    }, 1000)

    return output;
  }
}
