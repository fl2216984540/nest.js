import { PartialType } from '@nestjs/mapped-types'; // PartialType可使元素默认情况下即是可选的，而不用写大量?:可选代码
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
