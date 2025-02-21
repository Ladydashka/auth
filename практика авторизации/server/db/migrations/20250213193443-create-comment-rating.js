'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Comment_Ratings', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			guide_id: {
				type: Sequelize.INTEGER,
				references: {
					model: {
						tableName: 'Guides',
					},
					key: 'id',
				},
			},
			tour_id: {
				type: Sequelize.INTEGER,
				references: {
					model: {
						tableName: 'Tours',
					},
					key: 'id',
				},
			},
			user_id: {
				type: Sequelize.INTEGER,
				references: {
					model: {
						tableName: 'Users',
					},
					key: 'id',
				},
			},
			comment: {
				type: Sequelize.STRING,
			},
			tour_rating: {
				type: Sequelize.INTEGER,
			},
			guide_rating: {
				type: Sequelize.INTEGER,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Comment_Ratings');
	},
};
