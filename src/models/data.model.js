import mongoose, { Schema } from 'mongoose';

const dataSchema = new Schema({
	data: [
		{
			rateCode: String,
			rate: Number,
			name: String,
		},
	],
	base_code: String,
	time_last_update_utc: String,
	time_next_update_utc: String,
});
export const dataModel = mongoose.model('data', dataSchema);
