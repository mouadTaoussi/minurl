interface Config {
	PORT : any;
	database_connection : any;
}

const config: Config = {
	PORT : process.env.PORT || 8000,
	database_connection : ""
}

export default config; 