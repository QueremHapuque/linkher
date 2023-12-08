'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('job_vacancies', {
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
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      is_job: {
        type: Sequelize.BOOLEAN(),
        allowNull: true,
      },
      is_researchCall: {
        type: Sequelize.BOOLEAN(),
        allowNull: true,
      },
      company: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      link: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      requeriments: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      local: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      expire_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      is_affirmative: {
        type: Sequelize.BOOLEAN(),
        defaultValue: false,
        allowNull: false,
      },
      is_clt: {
        type: Sequelize.BOOLEAN(),
        allowNull: true,
      },
      is_internship: {
        type: Sequelize.BOOLEAN(),
        allowNull: true,
      },
      is_pj: {
        type: Sequelize.BOOLEAN(),
        allowNull: true,
      },
      is_junior: {
        type: Sequelize.BOOLEAN(),
        allowNull: true,
      },
      is_pleno: {
        type: Sequelize.BOOLEAN(),
        allowNull: true,
      },
      is_senior: {
        type: Sequelize.BOOLEAN(),
        allowNull: true,
      },
      is_inPerson: {
        type: Sequelize.BOOLEAN(),
        allowNull: true,
      },
      is_remote: {
        type: Sequelize.BOOLEAN(),
        allowNull: true,
      },
      is_hybrid: {
        type: Sequelize.BOOLEAN(),
        allowNull: true,
      },
      is_halfTime: {
        type: Sequelize.BOOLEAN(),
        allowNull: true,
      },
      is_threeQuarters: {
        type: Sequelize.BOOLEAN(),
        allowNull: true,
      },
      is_fullTime: {
        type: Sequelize.BOOLEAN(),
        allowNull: true,
      },
      is_secure: {
        type: Sequelize.BOOLEAN(),
        defaultValue: true,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('job_vacancies');
  },
};
