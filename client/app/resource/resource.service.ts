import { ResourceModel } from './resource.model';

export class ResourceService{
    private resTypes: Array<string> = [];
    private resStates: Array<string> = [];
    private resources: Array<ResourceModel> = [];

    public addResource(res){
        this.resources.push(res);
    }

    public getResources(){
        return this.resources;
    }

    public getResTypes(){
        this.resTypes.push('Chair');
        this.resTypes.push('CPU');
        this.resTypes.push('Desk');
        this.resTypes.push('Desk Phone');
        this.resTypes.push('Monitor');
        return this.resTypes;
    }

    public getResStates(){
        this.resStates.push('Out for Repair');
        this.resStates.push('Newly Added');
        this.resStates.push('In House');
        this.resStates.push('Removed');
        return this.resStates;
    }

}