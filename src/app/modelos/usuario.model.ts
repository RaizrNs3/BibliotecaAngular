export class Usuario {
    
    private _nombre : string;
    private _apellidoPaterno : string;
    private _apellidoMaterno : string;
    private _numeroTelefonico : string;
    private _nombreUsuario : string;

    constructor(nombre: string, apellidoP: string, apellidoM: string, numero: string, usuario: string){
        this._nombre = nombre;
        this._apellidoPaterno = apellidoP;
        this._apellidoMaterno = apellidoM;
        this._numeroTelefonico = numero;
        this._nombreUsuario = usuario;
    }

    public get nombre() : string {
        return this._nombre;
    }
    
    public set nombre(v : string) {
        this._nombre = v;
    }
    
    public get apellidoPaterno() : string {
        return this._apellidoPaterno;
    }
    
    public set apellidoPaterno(v : string) {
        this._apellidoPaterno = v;
    }
    
    public get apellidoMaterno() : string {
        return this._apellidoMaterno;
    }

    public set apellidoMaterno(v : string) {
        this._apellidoMaterno = v;
    }

    public get numeroTelefonico() : string {
        return this._numeroTelefonico;
    }

    public set numeroTelefonico(v : string) {
        this._numeroTelefonico = v;
    }

    public get nombreUsuario() : string {
        return this._nombreUsuario;
    }

    public set nombreUsuario(v : string) {
        this._nombreUsuario = v;
    }    
}
