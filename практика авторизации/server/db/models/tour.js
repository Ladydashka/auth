'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Tour extends Model {
		static associate({ Comment_Rating, Guide }) {
			this.hasMany(Comment_Rating, { foreignKey: 'tour_id' });
			this.belongsTo(Guide, { foreignKey: 'guide_id' });
		}
	}
	Tour.init(
		{
			guide_id: DataTypes.INTEGER,
			title: DataTypes.STRING,
			description: DataTypes.STRING,
			rating: DataTypes.INTEGER,
			date: DataTypes.STRING,
			duration: DataTypes.STRING,
			photo_url: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Tour',
		}
	);
	return Tour;
};
