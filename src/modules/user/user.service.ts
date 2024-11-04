import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { Connection, getRepository, Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor ( 
        @InjectRepository(UserEntity)  
        private readonly userRepository: Repository<UserEntity>,
        private connection: Connection,
    ){}

    async findAllUsers(): Promise<UserEntity[]> {
        
        const users = await this.userRepository.find();
        return users
    }

    async createUser(user: any): Promise<UserEntity> {
        const { email } = user;
        const u = await this.userRepository.findOne({ where: {email} });
        
        if(u){
            throw new HttpException(
                {
                    message: "input data invalid",
                    error: "email already exist"
                },
                HttpStatus.BAD_REQUEST,
            );
        }
        return await this.userRepository.save(user)
    }
}
