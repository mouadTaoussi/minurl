import express, { Application,Request,Response,NextFunction } from 'express';
import bodyParser from 'body-parser';
import URLController from "./url.controller";
import * as cors from 'cors';
import config from './url.config';

const urlContoroller = new URLController();

// Init Application
const app:Application = express();

// Serve the satcic files
app.use(express.static('Public'));

// Init json 
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }))

app.use(function(request:Request,response:Response,next:NextFunction){
	console.log("Heelo")
	response.header("Access-Control-Allow-Origin", 'http://localhost:8000');
	response.header("Access-Control-Allow-Credentials", true);
	response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	response.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type');
	next();
})

app.get('/:name',async (request:Request,response:Response)=>{
	// Get the name
	const { name } = request.params;
	
	// Get the url
	const getting = await urlContoroller.getUrl(name);

	//
	response.redirect(getting.url)
})

app.post('/post',async (request:Request,response:Response)=>{
	// get body data
	const { name, url } = request.body;
	console.log(request.body)
	
	// Saving
	const saving = await urlContoroller.postUrl(name,url);

	response.send(saving);
})

app.listen(config.PORT);


