import User from '../../models/userModel.js';
import handleMongooseError from '../../helpers/handleMongooseError.js';

const updateInfo = async (req, res) => {
  const userId = req.user.id;
  const { name, email, password, gender } = req.body;
  if (!name && !email && !password && !gender === undefined) {
    return res
      .status(400)
      .json({ message: 'Body must have at least one field' });
  }
};
export default updateInfo;
