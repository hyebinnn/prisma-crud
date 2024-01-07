import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class TodoService {
    constructor(private prismaService : PrismaService){}

    // data 전체 조회
    async fetchAllUsers(): Promise<User[]> {
        return this.prismaService.user.findMany();
    }

    // data 단일 조회
    async fetchlUserItem(id: number): Promise<User | null> {            // id에 맞는 User가 없다면 null로 
        return this.prismaService
            .user.findUnique({ where: { id:Number(id) } });
    } 

    // data 삭제
    async DeleteUserItem(id: number): Promise<User | null> {            // id에 맞는 User가 없다면 null로 
        return this.prismaService
            .user.delete({ where: { id:Number(id) } });
    } 

    // data 추가
    async AddUserItem(data: User): Promise<User> {         
        return this.prismaService
            .user.create( { data: data } )
    }
    
    // data 수정
    async UpdateUserItem(
        id: number,
        email: string, 
        name?: string
        ): Promise<User> {           
        return this.prismaService
            .user.update( { 
                where: { id:Number(id) },
                data: {
                    email: email,
                    name: name
                } 
                
            }  )
    }

}
