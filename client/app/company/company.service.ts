import { Http, Response, Headers } from "@angular/http";    
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { CompanyModel } from './company.model';

@Injectable()
export class CompanyService{
    constructor(private http: Http) {}
    private companies: Array<CompanyModel> = [];
    private busiDomains: Array<string> = [];

    public addCompany(company: CompanyModel){
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/cpmpany', JSON.stringify(company), {headers: headers})
            .map((response: Response) => {
                var result = response.json();
                company.id = result._id;
                this.companies.push(company);
                return company;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    public getCompanies(){
        this.http.get('http://localhost:3000/company')
        .map((response: Response) => {
                this.companies = response.json().data;
                return this.companies;
        })
        .catch((error: Response) => Observable.throw(error.json()));
    }

    public getBussDomains(){
        this.busiDomains.push('Pharma');
        this.busiDomains.push('IT');
        this.busiDomains.push('Finance');
        this.busiDomains.push('Retail');
        return this.busiDomains;
    }

}