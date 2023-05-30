import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MailService } from '../../services/mail/mail.service';
import { QrCodeService } from '../../services/qrcode/qrcode.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { Package } from '../packages/entities/package.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(Package)
    private readonly packageRepository: Repository<Package>,
    private mailService: MailService,
    private qrcodeService: QrCodeService,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    const ticket = await this.qrcodeService.generateQrCode(
      'https://computacao-amostra.com/project/ecorota',
    );

    // const boughtPackage = await this.packageRepository.findOne({
    //   where: { id: createOrderDto.package as unknown as string },
    // });

    await this.mailService.sendTicket(ticket, {
      email: createOrderDto.email,
      name: createOrderDto.name,
      package: createOrderDto.package as unknown as string,
      price: createOrderDto.price,
      quantity: createOrderDto.quantity,
    });
    return
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
