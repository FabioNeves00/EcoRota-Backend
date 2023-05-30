import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { TicketDto } from './dto/ticket.dto';
import path from 'path';


@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendTicket(ticket: any, ticketDto: TicketDto) {
    
    await this.mailerService.sendMail({
      subject: "Ingresso para a experiência EcoRota",
      to: ticketDto.email,
      context: {
        name: ticketDto.name,
        package: ticketDto.package,
        quantity: ticketDto.quantity,
        price: ticketDto.price
      },
      attachments: [{
        filename: 'ticket.png',
        path: ticket,
        cid: 'ticket'
      },{
        filename: 'banner.jpeg',
        path: path.join(process.cwd(), "src", "assets", "banner_obrigado.jpeg"),
        cid: 'banner'
      },{
        filename: 'logo.jpeg',
        path: path.join(process.cwd(), "src", "assets", "logomarca_ecorota.jpeg"),
        cid: 'logo'
      },],
      attachDataUrls: true,
      template: 'ticket.hbs'
    })
  }
}
