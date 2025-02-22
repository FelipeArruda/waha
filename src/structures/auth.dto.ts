import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

export enum QRCodeFormat {
  IMAGE = 'image',
  RAW = 'raw',
}

export class QRCodeQuery {
  format: QRCodeFormat = QRCodeFormat.IMAGE;
}

export class QRCodeValue {
  value: string;
}

export class RequestCodeRequest {
  @ApiProperty({
    description: 'Mobile phone number in international format',
    example: '12132132130',
  })
  phoneNumber: string;

  @ApiProperty({
    description:
      'How would you like to receive the one time code for registration? |sms|voice. Leave empty for Web pairing.',
    example: null,
    required: false,
  })
  method: string;

  @ApiHideProperty()
  localeLanguage: string;

  @ApiHideProperty()
  localeCountry: string;
}

export class PairingCodeResponse {
  code: string;
}
