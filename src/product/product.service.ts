import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(product) private productRepository: Repository<product>){
      
    }

    async all(): Promise<product[]>{
       return this.productRepository.find();
    }

    async create(data){
       return this.productRepository.save(data);
    }

    async get(id:number):Promise<product> {
       return this.productRepository.findOne(id);
    }

    async update(id:number,data):Promise<any> {
      return this.productRepository.update(id,data);
    }

    async delete(id:number):Promise<any> {
       return this.productRepository.delete(id);
    }

}
