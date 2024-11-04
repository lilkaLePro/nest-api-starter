import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor ( private readonly userService: UserService ) {}

    @Get("")
    findAllUsers() {
        return this.userService.findAllUsers();
    }
    @Post("/create")
    async createUser(@Body() param ) {
        const newParam = { ...param };
        await this.userService.createUser(newParam)
        return newParam 
    }
}
