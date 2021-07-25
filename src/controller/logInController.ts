import {getCustomRepository, getRepository} from 'typeorm';

import bcrypt from 'bcrypt';
import {jwtSignToken} from './helper/jwt';
import { userRepository } from '../repositorys/user-Repository';
const createError = require('http-errors');


const login = async (req, res, next) => {
  try {
    const userLogRepository=getCustomRepository(userRepository)
    const user = await userLogRepository.findOneOrFail({
      email: req.body.email,
    });
    // console.log(user);
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      return next(createError.BadRequest('wrong password'));
    } else {
      const token = await jwtSignToken({
        id: user.id,
      });
      // console.log(token);
      res.cookie('authorization', `Bearer ${token}`);
      res.status(200).send({
        data: {
          jwtToken: token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
          },
        },
      });
    };
  } catch (err) {
    return next(createError.InternalServerError(err.message));
  }
};
export default login;