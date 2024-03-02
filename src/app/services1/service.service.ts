// frontend/src/app/data/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  getservice() {
    return this.http.get('http://localhost:5000/api/service')
  }


}


// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ServiceService {

//   constructor() { }
// }
