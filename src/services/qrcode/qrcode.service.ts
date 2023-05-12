import { Injectable } from '@nestjs/common';
import * as qrcode from 'qrcode';


@Injectable()
export class QrCodeService {
  async generateQrCode(info: any) {
    const ticket = await qrcode.toDataURL(info)
    return ticket
  }
}
