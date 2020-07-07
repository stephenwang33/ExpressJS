const express = require('express');
const router = express.Router();

const AutoInfo = require('../entity/AutoInfo');

//instance auto class
const auto = new AutoInfo(1, 'chevrolet', 'two', 'hatchback', 'three', 48, 5100, 5151);

//load default AutoInfos
const autos = auto.getAutos();

//list all autos
/**
 * @swagger
 * /api/autos:
 *   get:
 *     description: List all Autos.
 *     responses:              
 *       '200': 
 *         description: A success response.
 *
 */
router.get("/", (req,res) => {
	res.json(autos);
});

//get auto by id
/**
 * @swagger
 * /api/autos/{id}:
 *   get:
 *     description: Get a Auto by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         type: integer
 *         required: true;
 *         description: Numeric ID to get an Auto 
 *     responses:              
 *       '200': 
 *         description: A success response call.
 *       '400':
 *         description: AutoInfo is not found 
 *
 */
router.get("/:id", (req,res) => {
	const isFound = autos.some(auto => auto.id === parseInt(req.params.id));
	if (isFound) {
		res.json(autos.filter(auto => auto.id === parseInt(req.params.id)));
	} else {
		res.status(400).json({message: "AutoInfo is not found!"});
	}

});

//Create new Auto
/**
 * @swagger
 * /api/autos:
 *   post:
 *     description: post a new Auto.
 *     responses:              
 *       '200': 
 *         description: A success response.
 *
 */
router.post('/', (req, res) => {
	res.send(req.body);
});

module.exports = router;