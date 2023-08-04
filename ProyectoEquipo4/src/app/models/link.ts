export class link {
    href: string;
    rel: string;
    method: string;

    constructor (href:string, rel:string, method:string){
        this.href = href;
        this.rel = rel;
        this.method = method;
    };
}