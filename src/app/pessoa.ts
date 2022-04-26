export class Pessoa {
    public id: number;
    public idade: number;
    public name: string;

    constructor(id: number, idade:number, name: string) {
        this.id = id;
        this.idade = idade;
        this.name = name;
    }
    getTipo(){
        if(this.idade <= 15){
            return 'crianca';
        }else if(this.idade >= 15 && this.idade <=20){
            return 'Jovem';
        }
    }
}
