// A controller to handle Brand actions

import { Controller, Get, Post, Body } from '@nestjs/common';
import { BrandService } from './brand.service';
import { Brand } from './schemas/brand.schema';
import { CreateBrandDto } from './dto/create-brand.dto';

@Controller('brand')
export class BrandController {
    constructor(private readonly brandService: BrandService) {}
  
    // POST endpoint to create a brand
    @Post()
    async create(@Body() createBrandDto: CreateBrandDto): Promise<Brand> {
      return this.brandService.create(createBrandDto);
    }

    //Get brands/SME
  @Get()
  async findAll() {
    return this.brandService.findAll();
  }
}
