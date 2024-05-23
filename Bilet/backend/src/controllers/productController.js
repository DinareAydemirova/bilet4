const Product = require("./../models/productModel");

const getAllData = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error)
  }
};

const postData = async (req, res) => {
    try {
        const obj=req.body
      const newroduct = await Product(obj);
      newroduct.save()
      res.status(200).send(newroduct);
    } catch (error) {
      res.status(400).send(error)
    }
  };

  const getDataById = async (req, res) => {
    try {
       
      const prod = await Product.findById(req.params.id);
      res.status(200).send(prod);
    } catch (error) {
      res.status(500).send(error)
    }
  };


  const deleteDataById = async (req, res) => {
    try {
       
      const prod = await Product.findByIdAndDelete(req.params.id);
      res.status(200).send(prod);
    } catch (error) {
      res.status(500).send(error)
    }
  };


  const patchDataById = async (req, res) => {
    try {
       
      const prod = await Product.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).send(prod);
    } catch (error) {
      res.status(400).send(error)
    }
  };


  const putDataById = async (req, res) => {
    try {
       
      const prod = await Product.findOneAndReplace({_id:req.params.id}, req.body);
      res.status(200).send(prod);
    } catch (error) {
      res.status(400).send(error)
    }
  };
module.exports = { getAllData, postData,getDataById, deleteDataById,patchDataById ,putDataById};
