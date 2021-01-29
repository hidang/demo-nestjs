import { Injectable } from '@nestjs/common';


@Injectable()
export class ProductsService {
  getProducts() {
    return [
      {
        name: 'Ghế nhựa',
        info: 'màu xanh, giá: 20.000d'
      },
      {
        name: 'Bàn inox',
        info: 'giá: 80.000d'
      },
      {
        name: 'Điện thoại sumsang',
        info: 'hết hàng'
      }
    ]
  }
}