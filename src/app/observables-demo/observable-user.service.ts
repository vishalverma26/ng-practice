import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableUserService {
  activatedEmitter = new Subject<boolean>();
}
