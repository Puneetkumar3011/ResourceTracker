import { Http, Response, Headers } from "@angular/http";    
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class BussDomainService{
    constructor(private http: Http) {}
    public reqMode: string = 'List';
    public selectedDomain: any;
    private busiDomains: Array<any> = [];
    headers = new Headers(
        {'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

    public getBussDomain(){
        return this.http.get('http://localhost:3000/api/admin/bussdomain')
        .map((response: Response) => {
            var bussDomains: Array<any> = [];
            var resData: Array<any> = response.json().obj;
            if(resData && resData.length > 0){
                resData.forEach(function(res){
                        var domain: any = {};
                        domain.id = res._id;
                        domain.name = res.name;
                        domain.description = res.description;
                        bussDomains.push(domain);
                    });
            }
            return bussDomains;
        })
        .catch((error: Response) => Observable.throw(error.json()));
    }

    public addBussDomain(bussDomain: any){
        return this.http.post('http://localhost:3000/api/admin/bussdomain', 
                            JSON.stringify(bussDomain), 
                            {headers: this.headers})
        .map((response: Response) => {
            return response.json();
        })
        .catch((error: Response) => 
            Observable.throw(error.json())
        );
    }

    updateBussDomain(bussDomain: any) {
        const body = JSON.stringify(bussDomain);
        return this.http.patch('http://localhost:3000/api/admin/bussdomain/' + bussDomain.id, body, {headers: this.headers})
            .map(function (response) { 
                return response.json(); 
            })
            .catch(function (error: Response) { 
                return Observable.throw(error.json()); 
             });
    }

    deleteBussDomain(bussDomain: any) {
        return this.http.delete('http://localhost:3000/api/admin/bussdomain/' + bussDomain.id)
            .map(function(response: Response) { 
                return response.json();
            })
            .catch(function(error: Response) { 
                return Observable.throw(error.json())
            });
    }
}