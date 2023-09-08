import axios from 'axios';
import countryCodes from '../data/db.js';
import { dataModel } from '../models/data.model.js';

const getData = async () => {
	try {
		const data = await axios('https://v6.exchangerate-api.com/v6/aa1a46ce5318650594f4612d/latest/USD');
		return data;
	} catch (error) {
		console.log(error.message);
		return [];
	}
};
function converTimeFormatter(time) {
	const date = new Date(time);
	const scheduleTime = `${date.getSeconds()} ${date.getMinutes() + 1} ${date.getHours()} ${date.getDate()} ${
		date.getMonth() + 1
	} * ${date.getFullYear()}`;
	return scheduleTime;
}
export const addData = async () => {
	try {
		const { data } = await getData();

		const { conversion_rates, base_code, time_last_update_utc, time_next_update_utc } = data;
		const newCountryData = countryCodes.map((item) => {
			const rate = conversion_rates[item?.rateCode?.toUpperCase()];
			return { ...item, rate };
		});
		await dataModel.deleteMany({});
		await dataModel.create({ data: newCountryData, base_code, time_last_update_utc, time_next_update_utc });
        console.log('added')
	} catch (error) {
		console.log(error);
	}
};
export default getData;
