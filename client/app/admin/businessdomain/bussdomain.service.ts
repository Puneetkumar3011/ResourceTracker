import { Http, Response, Headers } from "@angular/http";    
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class BussDomainService{
    constructor(private http: Http) {}
    private busiDomains: Array<any> = [];

    public getBussDomain(){
        return this.http.get('http://localhost:3000/api/admin/bussdomain')
        .map((response: Response) => {
            return response.json().obj;
        })
        .catch((error: Response) => Observable.throw(error.json()));
    }

    public addBussDomain(bussDomain: any){
        const headers = new Headers(
            {'Content-Type': 'application/json',
              'Accept': 'application/json'
            });
        return this.http.post('http://localhost:3000/api/admin/bussdomain', 
                                JSON.stringify(bussDomain), 
                                {headers: headers})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => 
                Observable.throw(error.json())
            );
    }
}