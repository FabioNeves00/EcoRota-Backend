import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';


@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendTicket(ticket: any, userEmail: string, userName: string) {
    this.mailerService.sendMail({
      subject: "Ingresso para a experiência EcoRota",
      to: userEmail,
      context: {
        name: userName
      },
      attachments: [{
        filename: 'ticket.png',
        path: ticket,
      }],
      attachDataUrls: true,
      template: 'ticket.hbs'
    })
  }
}
