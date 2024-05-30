const db = require("../models");
const bcrypt = require("bcryptjs");
const Product = db.product;

exports.allProduct = (req, res) => {
  Product.findAll().then(products => {
    res.status(200).send({message: 'berhasil', data: products});
  }).catch(err => {
    res.status(500).send({ message: err.message });
  });
};

exports.editProduct = (req, res) => {
    Product.findAll({where: {
        id: req.body.id
    }}).then(findProduct=>{
        if (!findProduct) {
            return  res.status(400).send({message: 'Product with ID not exists!'});
        }
        Product.update({
            nama_product: req.body.nama_product,
            qty_product: req.body.qty_product,
        }, {where: {id: req.body.id} }).then(user => {
            res.status(200).send({ message: "Update Product successfully!" });
        }).catch(err => {
            res.status(500).send({ message: err.message });
        });

    }).catch(err => {
        res.status(500).send({ message: err.message });
    });

};

exports.inputProduct = async (req, res) => {
        const cekID = await Product.findOne({order: [['id', 'DESC']]})
        let  noId = 1;
        if (cekID.id){
            noId = cekID.id + 1
        }
    await Product.create({
            id: noId,
            nama_product: req.body.nama_product,
            qty_product: req.body.qty_product,
        }).then(user => {
            res.status(200).send({message: "Product registered successfully!"});
        }).catch(err => {
            res.status(500).send({message: err.message});
        });
};


exports.hapusProduct = async (req, res) => {
    await Product.destroy({where: {id: req.body.id} }).then(()=>{
        res.status(200).send({message: "Product delete successfully!"})
    }).catch(err => {
        res.status(500).send({message: err.message});
    });
}