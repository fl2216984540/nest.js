import {Controller,Get,Post,Body,Patch,Param,Delete,HttpCode,} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  private users: User[] = [];
  // constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    // return this.usersService.findAll();
    return this.users;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.usersService.findOne(+id);
    const user = this.users.find(
      user => user.id === parseInt(id)
    );
    return user;
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const user = {
      ...createUserDto,
      id: this.users.length + 1,
      date: new Date(createUserDto.date),
      phone: parseInt(createUserDto.phone)
    };
    this.users.push(user);
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const index = this.users.findIndex(
      user => user.id === parseInt(id)
    );
    this.users[index] = {
      ...this.users[index], // 这里是会拿到之前存储的值并展开
      ...updateUserDto, // 这里会把传递过来的值进行一个覆盖
      date: updateUserDto.date?
        new Date(updateUserDto.date):this.users[index].date,
      phone: updateUserDto.phone?
        parseInt(updateUserDto.phone):this.users[index].phone,
    }
    return this.users[index];
  }

  @Delete(':id')
  @HttpCode(204) // 当执行删除操作时，最好的是不返回内容，因此使用状态码204表示没有内容返回
  remove(@Param('id') id: string) {
    this.users = this.users.filter(
      user => user.id !== parseInt(id)
    );
  }
}
