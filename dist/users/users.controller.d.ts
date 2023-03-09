import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UsersController {
    private users;
    findAll(): User[];
    findOne(id: string): User;
    create(createUserDto: CreateUserDto): {
        id: number;
        date: Date;
        phone: number;
        username: string;
        passwd: string;
    };
    update(id: string, updateUserDto: UpdateUserDto): User;
    remove(id: string): void;
}
