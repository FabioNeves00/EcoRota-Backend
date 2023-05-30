import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailModule } from '../../services/mail/mail.module';
import { QrCodeModule } from '../../services/qrcode/qrcode.module';
import { Order } from './entities/order.entity';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { Package } from '../packages/entities/package.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Package]), QrCodeModule, MailModule],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
