import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { In, Repository } from 'typeorm';
import { PersonPostEntity } from '../models/post.entity';
import { PersonPost } from '../models/post.interface';

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(PersonPostEntity)
        private readonly personPostRepository: Repository<PersonPostEntity>
    ){}

    createPost(personPost: PersonPost): Observable<PersonPost> {
        return from(this.personPostRepository.save(personPost));
    }

    findAllPost(): Observable<PersonPost[]>{
        return from(this.personPostRepository.find());
    }
}