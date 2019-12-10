// import * as jwt from 'jsonwebtoken';
// import {ConfigService} from '../config/config.service';
// import { Injectable} from '@nestjs/common';
// import { userInfo } from 'os';
//
// @Injectable()
// export class JWTService {
//   constructor( private readonly config: ConfigService) {}
//
//   async createToken(id) {
//     const privateKey = this.config.get('JWT_SECRET_KEY');
//     const info = { id: id };
//     const token = jwt.sign(info, privateKey, { expiresIn: '5s' });
//     return token;
//   }
// }
