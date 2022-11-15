import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PersonPost } from '../models/post.interface';
import { PersonService } from '../services/person.service';

@Controller('person')
export class PersonController {
    constructor(private personService: PersonService) {}

    @Post()
    create(@Body() post: PersonPost): Observable<PersonPost>{
        return this.personService.createPost(post);
    }

    @Get()
    findAll(): Observable<PersonPost[]> {
        return this.personService.findAllPost();
    }
}
