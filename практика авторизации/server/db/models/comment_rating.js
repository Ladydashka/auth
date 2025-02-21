'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Comment_Rating extends Model {
		static associate({ Guide, User, Tour }) {
			this.belongsTo(Guide, { foreignKey: 'guide_id' });
			this.belongsTo(User, { foreignKey: 'user_id' });
			this.belongsTo(Tour, { foreignKey: 'tour_id' });
		}
	}
	Comment_Rating.init(
		{
			guide_id: DataTypes.INTEGER,
			tour_id: DataTypes.INTEGER,
			user_id: DataTypes.INTEGER,
			comment: DataTypes.STRING,
			tour_rating: DataTypes.INTEGER,
			guide_rating: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Comment_Rating',
		}
	);
	return Comment_Rating;
};
