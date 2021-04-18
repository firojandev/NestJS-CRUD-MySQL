import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { product } from './product.entity';
import { ProductService } from './product.service';


@Module({
  imports:[
    TypeOrmModule.forFeature([product])
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
