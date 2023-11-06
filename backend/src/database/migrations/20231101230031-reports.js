'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reports', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      report_title: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      report_description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      report_attachment: {
        type: Sequelize.BLOB,
        allowNull: true,
      },
      report_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      reported_link: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('reports');
  },
};
