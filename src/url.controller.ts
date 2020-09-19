import { connect } from 'mongoose';
import urlModel from './url.model';
import config from './url.config';

connect(config.database_connection,(err)=>{
	if (err) throw err;
	console.log("Database up and running!!!")
})

interface URLControllerInterface {
	getUrl(name: any)              :unknown,
	postUrl(name: any,url: string) :unknown
}

export default class URLController implements URLControllerInterface{

	public async getUrl(name: any){
	
		var end: { url: any, found: boolean } = {url : null , found : true};
		var url;
 
		try {
			url = await urlModel.findOne({name:name});
		}
		catch(err){
			end.url = null;
			end.found = false;
		}

		if (url !== null) {

			end.url = url.url; // ignore that stupid error !!!
			end.found = true;	

		}
		else {
			end.url = null;
			end.found = false;
		}

		return end;
	}

	public async postUrl(name: any,url: string){
		
		var end: { posted: boolean, message: string } = { posted : true, message : '' };

		try {
			// Validate the name 
			const isExists = await urlModel.findOne({ name:name }) == null ? false : true;
			console.log(isExists)
 			if (!isExists) {

 				const NewUrl = new urlModel({
					name:name,
					url:url
				});

				// Saving...url
				NewUrl.save();

				end.posted = true;
				end.message = "Done!";

 			}else {
 				end.posted = false;
 				end.message = "This name already exists!";
 			}
		}
		catch(err){
			end.posted = false;
			end.message = "Something went wrong!";
		}		
		return end;
	}
	
}