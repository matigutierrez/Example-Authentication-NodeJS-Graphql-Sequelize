
import jwt from 'jsonwebtoken';
import moment from 'moment';
var secret = 'btspemfa'

/**
 * @method
 * @version 1.0.0
 * @param user
 * @todo Create token
 * @return Token
 */
export default function createToken(user) {
  var payload = {
    id: user.id,
    mail: user.mail,
    image: user.image,
    role_id: user.role_id,
    person_id: user.person_id,
    membership_id: user.membership_id,
    iat: moment().unix(),
    exp: moment().add(30, 'days').unix()
  }

  return jwt.sign(payload, secret);
}