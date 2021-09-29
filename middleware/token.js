import jwt from 'jsonwebtoken';

const { KEY } = process.env;

const issue = async id => {
  return jwt.sign({ id: id }, KEY, { expiresIn: '1h' });
};

export { issue };
