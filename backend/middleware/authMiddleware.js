import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Token não fornecido' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // agora temos o id do usuário
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token inválido' });
  }
};

export default authMiddleware;