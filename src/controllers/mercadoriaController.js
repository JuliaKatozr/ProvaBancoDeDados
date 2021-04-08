const Mercadoria = require('../models/mercadoria');
const status = require('http-status');
exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const descricao = req.body.descricao;
    const preco = req.body.preco;
    const estoque = req.body.estoque;


    Mercadoria.create({
        nome: nome,
        descricao: descricao,
        preco: preco,
        estoque: estoque,
    })
        .then(mercadoria => {
            if (mercadoria) {
                res.status(status.OK).send(mercadoria);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.SelectAll = (req, res, next) => {
    Mercadoria.findAll()
        .then(cliente => {
            if (cliente) {
                res.status(status.OK).send(cliente);
            }
        })
        .catch(error => next(error));
}

exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;

    Mercadoria.findByPk(id)
        .then(cliente => {
            if (cliente) {
                res.status(status.OK).send(cliente);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const descricao = req.body.descricao;
    const preco = req.body.preco;
    const estoque = req.body.estoque;

    Mercadoria.findByPk(id)
        .then(cliente => {
            if (cliente) {
                cliente.update({
                    nome: nome,
                    descricao: descricao,
                    preco: preco,
                    estoque: estoque,
                },
                    {
                        where: { id: id }
                    })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Cliente.findByPk(id)
        .then(mercadoria => {
            if (mercadoria) {
                mercadoria.destroy({
                    where: { id: id }
                })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            }
            else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
