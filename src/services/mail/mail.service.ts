import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { TicketDto } from './dto/ticket.dto';


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
        filename: 'banner.png',
        path: '../../assets/banner_obrigado.jpeg',
        cid: 'banner'
      },{
        filename: 'logo.png',
        path: '../../assets/logomarca_ecorota.jpeg',
        cid: 'logo'
      },],
      attachDataUrls: true,
      template: 'ticket.hbs'
    })
  }
}
