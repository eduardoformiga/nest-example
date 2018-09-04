import { Module } from '@nestjs/common';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { FormigaController } from 'formiga/formiga.controller';
import { FormigaService } from 'formiga/formiga.service';
import { FormigaModule } from './formiga/formiga.module';

@Module({
  imports: [FormigaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
