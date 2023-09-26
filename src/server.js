import mongoose from 'mongoose';
import app from './app.js';
import schedule from 'node-schedule';
import { addData } from './utils/util.js';

const runServer = async () => {
	try {
		await mongoose.connect('mongodb+srv://coderkuchkarov:ulugbek2004@cluster0.bxpph60.mongodb.net/data?retryWrites=true&w=majority');
		app.listen(3000, () => {
			console.log('server started!');
		});
	} catch (error) {
		console.log(error);
	}
};
addData();
schedule.scheduleJob('0 30 * * * * *', addData);
runServer();
