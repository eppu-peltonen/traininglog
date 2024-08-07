import { User } from "../users/user.entity"

export class GetUserDto {

    constructor(user: User) {
        this.username = user.username;
        this.createdAt = user.createdAt;
    }

    username: string;
    createdAt: Date;
}