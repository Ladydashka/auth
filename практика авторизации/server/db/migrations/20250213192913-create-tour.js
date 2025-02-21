'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Tours', {
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
			title: {
				type: Sequelize.STRING,
			},
			description: {
				type: Sequelize.STRING,
			},
			rating: {
				type: Sequelize.INTEGER,
			},
			date: {
				type: Sequelize.STRING,
			},
			duration: {
				type: Sequelize.STRING,
			},
			photo_url: {
				type: Sequelize.STRING,
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
		await queryInterface.dropTable('Tours');
	},
};
