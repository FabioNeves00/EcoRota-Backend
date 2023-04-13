import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>
  ){}
  create(createOrderDto: CreateOrderDto) {
    return this.orderRepository.insert(createOrderDto);
  }

  findAll() {
    return this.orderRepository.find();
  }

  findOne(id: string) {
    return this.orderRepository.findOneBy({ id });
  }

  remove(id: string) {
    return this.orderRepository.delete({ id });
  }
}
