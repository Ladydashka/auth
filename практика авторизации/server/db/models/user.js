'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate({ Comment_Rating }) {
			this.hasMany(Comment_Rating, { foreignKey: 'user_id' });
		}
	}
	User.init(
		{
			name: DataTypes.STRING,
			password: DataTypes.STRING,
			email: DataTypes.STRING,
			avatar_url: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'User',
		}
	);
	return User;
};
