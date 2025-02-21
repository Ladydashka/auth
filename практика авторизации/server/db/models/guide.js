'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Guide extends Model {
		static associate({ Tour, Comment_Rating }) {
			this.hasMany(Tour, { foreignKey: 'guide_id' });
			this.hasMany(Comment_Rating, { foreignKey: 'guide_id' });
		}
	}
	Guide.init(
		{
			name: DataTypes.STRING,
			password: DataTypes.STRING,
			email: DataTypes.STRING,
			avatar_url: DataTypes.STRING,
			bio: DataTypes.STRING,
			contact_info: DataTypes.STRING,
			rating: DataTypes.INTEGER,
			languages: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Guide',
		}
	);
	return Guide;
};
