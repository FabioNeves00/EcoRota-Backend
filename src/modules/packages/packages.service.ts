import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePackageDto } from './dto/create-package.dto';
import { Package } from './entities/package.entity';

@Injectable()
export class PackagesService {
  constructor(
    @InjectRepository(Package)
    private readonly packageRepository: Repository<Package>
  ) {}
  create(createPackageDto: CreatePackageDto) {
    return this.packageRepository.insert(createPackageDto);
  }

  findAll() {
    return this.packageRepository.find();
  }

  findOne(id: string) {
    return this.packageRepository.findOneBy({ id });
  }

  remove(id: string) {
    return this.packageRepository.delete({ id });
  }
}
