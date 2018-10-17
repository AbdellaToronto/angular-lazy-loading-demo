import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  data = 'this is the Shared service';

  constructor() { }
}
