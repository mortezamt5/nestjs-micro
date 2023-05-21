import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';

export class JwtStrategy extends PassportStrategy(Strategy) {
  /**
   *
   */
  constructor(configService: ConfigService , private readonly usersService: UsersService) {
    super();
  }
}
