import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonController } from './controllers/person.controller';
import { PersonPostEntity } from './models/post.entity';
import { PersonService } from './services/person.service';

@Module({
  imports: [TypeOrmModule.forFeature([PersonPostEntity])],
  providers: [PersonService],
  controllers: [PersonController],
})
export class PersonModule {}