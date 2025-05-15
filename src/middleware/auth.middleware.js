export const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token || token !== "123456") {
    return res.status(403).json({ error: "Token inválido o faltante" });
  }
  next();
};
