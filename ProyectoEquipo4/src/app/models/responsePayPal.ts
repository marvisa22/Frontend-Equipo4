import { link } from "./link";
export class response {

    id: string;
    status: string;
    links: link[];

    constructor (id:string, status:string, links:link[]){
        this.id = id;
        this.status = status;
        this.links = links;
    };

}