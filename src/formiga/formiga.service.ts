import { Injectable } from '@nestjs/common';
import { Pessoa } from './../model/pessoa';

@Injectable()
export class FormigaService {

    find(id: number): string {
        return 'voce solicitou o id ' + id;
    }

    findAll(): string {
        return "Hello Formiga";
    }

    create(pessoa: Pessoa): string {
        return 'pessoa com nome ' + pessoa.name+' e idade '+pessoa.age;
    }
}
