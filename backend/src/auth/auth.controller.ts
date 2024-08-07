import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "../dto/login-dto";
import { ResultWithValue } from "src/result";

@Controller("api/auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post("login")
    login(@Body() loginUser: LoginDto): Promise<ResultWithValue<{access_token: string}>>{
        return this.authService.login(loginUser.username, loginUser.password);
    }
}
