import { Controller, Get, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
import { AuthGuard } from "src/auth/auth.guard";

@Controller("api")
export class AppController {
    constructor(private readonly appService: AppService) {}

    @UseGuards(AuthGuard)
    @Get("hello")
    getHello(): string {
        return this.appService.getHello();
    }
}
