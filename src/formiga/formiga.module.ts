import { Module } from '@nestjs/common';
import { FormigaService } from './formiga.service';
import { FormigaController } from './formiga.controller';

@Module({
    controllers: [FormigaController],
    providers: [FormigaService],
})
export class FormigaModule {}
