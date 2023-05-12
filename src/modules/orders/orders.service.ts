import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MailService } from '../../services/mail/mail.service';
import { QrCodeService } from '../../services/qrcode/qrcode.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private mailService: MailService,
    private qrcodeService: QrCodeService,
  ){}
  async create(createOrderDto: CreateOrderDto) {
    const ticket = await this.qrcodeService.generateQrCode("https://ecorota.com/")
    await this.mailService.sendTicket(ticket, createOrderDto.email, createOrderDto.name)
    return 200;
    // return this.orderRepository.insert(createOrderDto);
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
