import { Controller, UseFilters, Post, Body } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { UserService } from './user.service';
import { Param } from '@nestjs/common';
import { Entity } from 'typeorm';
import { EntityNotFoundExceptionFilter } from './entity-not-found-exception.filter';
import { CreateUserDto } from './create-user-dto';



@Controller('users')
@UseFilters(new EntityNotFoundExceptionFilter)

export class UserController{

    constructor(private readonly userService: UserService) {}

    @Get()
    async findAll(){
        return {
            data: await this.userService.findAll()
        };

    }
    
    @Get(':id')
    async findOne(@Param('id') id: number){
        return {
            data: await this.userService.findOne(id)
        };
    }

    @Post()
    async create(@Body() data: CreateUserDto){
        return {
            data: await this.userService.create(data)
        }
    }

}

