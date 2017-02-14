export class ResourceModel{
    constructor(public id: string,
                public type: string, 
                public make: string,
                public model: string,
                public barcode: string,
                public description: string,
                public state: string){}
}