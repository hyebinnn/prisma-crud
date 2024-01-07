import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoService } from '../service/todo.service';
import { User } from '@prisma/client';

@Controller('api/v1/users')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get()
    async fetchAllusers(): Promise<User[]> {
        return this.todoService.fetchAllUsers();
    }

    @Get(':id')
    async fetchUserItem(@Param('id') id: number): Promise<User | null> {
        return this.todoService.fetchlUserItem(id);
    }

    @Delete(':id')
    async deleteUserItem(@Param('id') id: number): Promise<User | null> {
        return this.todoService.DeleteUserItem(id);
    }

    @Post()
    async AddUserItem(@Body() data: User): Promise<User> {
        return this.todoService.AddUserItem(data);
    }

    @Put(':id')
    async UpdateUserItem(
        @Param('id') id: number,
        @Body() data: User
        ): Promise<User | null> {
        return this.todoService.UpdateUserItem(id, 
            data.email, 
            data.name);
    }

}
