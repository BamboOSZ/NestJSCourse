import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [CoffeesModule,
    MongooseModule.forRoot('mongodb+srv://marcinwojciechowski:<password>@cluster0.lmwjilk.mongodb.net/?retryWrites=true&w=majority')],
  //    MongooseModule.forRoot('mongodb://localhost:27017/nest-course')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
