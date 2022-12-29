import { Controller, Get, Param } from '@nestjs/common';

import products from 'src/products';

import type { Product } from 'src/products';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Get()
  async index(): Promise<Product[]> {
    return products;
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<Product> {
    return products.find((prod) => prod.id === parseInt(id));
  }
}
