var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
//var mssql = require('mssql');
var path = require('path');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');


const autoArray = [
   {id: 11,
   name: 'Charles',
   gender: 'Male'},
   {id: 15,
   name: 'Ken Liu',
   gender: 'Male'}
];

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

// adding middlewear - bodyparser
app.use(bodyParser.json());

//having public static site
app.use(express.static(path.join(__dirname, 'public')));

//api router
app.use('/api/autos', require('./routes/autos'));

const swaggerDefinition = {
	swaggerDefinition: {
		info: {
			title: "Stephen Node JS api",
			description: "My sample of autos api",
			contact: {
				name: "Stephen Wang"
			}
		},
		servers: [
			"http://localhost:5000"
		]
	},
	apis: ["index.js", "./routes/autos.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerDefinition);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));





app.listen(PORT, 
	()=> console.log('Express server started on port ' + PORT)
);

//set api path response
app.get("/api", (req,res) => {
	res.send('Hello, This is Express response...!');
});


