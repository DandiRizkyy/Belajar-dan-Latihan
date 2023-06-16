import { Body, Controller, HttpCode, Post } from '@nestjs/common/decorators';
import { HttpStatus, ParseIntPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    // console.log({
      //   dto: dto,
      // })
      return this.authService.signup(dto);
    }
    
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
