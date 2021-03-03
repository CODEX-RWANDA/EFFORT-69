/* eslint-disable max-len */
import UserService from '../database/services/user';
import out from '../helpers/response';
import { sign } from '../helpers/jwt';

class UserController {
  static async socialSignUp(req, res) {
    try {
      const {
        email, firstname, lastname
      } = req.body;
      let user = await UserService.findUser({ email });
      if (!user) {
        const username = firstname.toLowerCase() + lastname.toLowerCase() + Math.floor(Math.random() * 10000);
        const usernameExist = await UserService.findUser({ username });
        if (usernameExist) {
          const username2 = username + Math.floor(Math.random() * 100);
          req.body.username = username2;
        } else {
          req.body.username = username;
        }
        user = await UserService.signUp({ ...req.body });
      }
      user._doc.token = await sign({ email: user.email, id: user._id, role: 'user' });
      user.password = undefined;
      return out(res, 201, 'user logedin Successfully', user);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}

export default UserController;
