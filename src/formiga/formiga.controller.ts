import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { FormigaService } from './formiga.service';
import { Pessoa } from './../model/pessoa';

@Controller('formiga')
export class FormigaController {


    constructor(private readonly formigaService: FormigaService) { }

    @Get()
    findAll(): string {
        return this.formigaService.findAll();
    }

    @Get(':id')
    find(@Param('id') id: number): string {
        return this.formigaService.find(id);
    }

    @Post()
    create(@Body() pessoa: Pessoa): string {
        return this.formigaService.create(pessoa);
    }

}
