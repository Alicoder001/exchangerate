import { dataModel } from '../models/data.model.js';

export const getAll = async (req, res) => {
	try {
		const data = await dataModel.find({}, { __v: 0 });
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({ error: 'Serverda xatolik yuz berdi!' });
	}
};
