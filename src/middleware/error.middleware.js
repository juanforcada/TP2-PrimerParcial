export const errorMiddleware = (err, req, res, next) => {
  res.status(500).json({
    ok: false,
    message: "Error interno del servidor",
    error: err.message,
  });
};
