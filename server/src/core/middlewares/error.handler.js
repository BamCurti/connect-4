const boomError = (err, req, res, next) => {
    if(err.isBoom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }
    else next(err);
}

const boomErrorMinimizer = (err, req, res, next) => {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
}

const internalError = (err, req, res, next) => {
    res.status(500).send(err.message);
}

module.exports = {
    boomError,
    internalError,
    boomErrorMinimizer
}