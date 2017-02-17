import { CompanyModel } from './company.model';

export class CompanyService{
    private companies: Array<CompanyModel> = [];
    private busiDomains: Array<string> = [];

    public addCompany(company){
        this.companies.push(company);
    }

    public getCompanies(){
        return this.companies;
    }

    public getBussDomains(){
        this.busiDomains.push('Pharma');
        this.busiDomains.push('IT');
        this.busiDomains.push('Finance');
        this.busiDomains.push('Retail');
        return this.busiDomains;
    }


}