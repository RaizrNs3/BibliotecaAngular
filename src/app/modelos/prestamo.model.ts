import { Usuario } from "./usuario.model";

export class Prestamo {
    
    private _fechaInicio : string;
    private _fechaDevolucion : string;
    private _usuario : Usuario;

    constructor(fechaInicio: string, fechaDev: string, usuario: Usuario){
        this._fechaInicio = fechaInicio;
        this._fechaDevolucion = this.fechaDevolucion;
        this._usuario = usuario;
    }

    public get fechaInicio() : string {
        return this._fechaInicio;
    }

    public set fechaInicio(v : string) {
        this._fechaInicio = v;
    }
    
    public get fechaDevolucion() : string {
        return this._fechaDevolucion;
    }

    public set fechaDevolucion(v : string) {
        this._fechaDevolucion = v;
    }
    
    public get usuario() : Usuario {
        return this._usuario;
    }

    public set usuario(v : Usuario) {
        this._usuario = v;
    }
}
