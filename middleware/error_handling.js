module.exports = (err, req, res, next) => {
    if (err && err.name === "HTTPError") {
        return res.status(err.statusCode).send(err.message);
    }
    return next(err);
}