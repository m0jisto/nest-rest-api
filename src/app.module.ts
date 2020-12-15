import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

const password = '999Nana999';
const dbName = 'nest-crud-api';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      `mongodb+srv://nikita:${password}@cluster0.srrdh.mongodb.net/${dbName}?retryWrites=true&w=majority`,
      { useFindAndModify: false },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
