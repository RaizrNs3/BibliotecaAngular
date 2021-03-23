export class Libro {
    
    private _ISBN : string;
    private _titulo : string;
    private _autor : string;
    private _editorial : string;
    private _fechaPublicacion : string;
    private _numeroEjemplaresDisponibles : number;

    constructor(isbn: string, titulo: string, autor: string, editorial: string, fechaPub: string, ejemplares: number){
        this._ISBN = isbn;
        this._titulo = titulo;
        this._autor = autor;
        this._editorial = editorial;
        this._fechaPublicacion = fechaPub;
        this._numeroEjemplaresDisponibles = ejemplares;
    }

    public get ISBN() : string {
        return this._ISBN;
    }

    public set ISBN(v : string) {
        this._ISBN = v;
    }

    public get titulo() : string {
        return this._titulo;
    }

    public set titulo(v : string) {
        this._titulo = v;
    }
    
    public get autor() : string {
        return this._autor;
    }

    public set autor(v : string) {
        this._autor = v;
    }
    
    public get editorial() : string {
        return this._editorial;
    }

    public set editorial(v : string) {
        this._editorial = v;
    }

    public get fechaPublicacion() : string {
        return this._fechaPublicacion;
    }

    public set fechaPublicacion(v : string) {
        this._fechaPublicacion = v;
    }
    
    public get numeroEjemplaresDisponibles() : number {
        return this._numeroEjemplaresDisponibles;
    }

    public set numeroEjemplaresDisponibles(v : number) {
        this._numeroEjemplaresDisponibles = v;
    }    
}
