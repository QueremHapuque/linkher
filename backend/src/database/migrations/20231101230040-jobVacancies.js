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
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      oportunity_type: {
        type: Sequelize.ENUM('Vaga de emprego', 'Edital de Pesquisa'),
        allowNull: false,
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
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      contract_type: {
        type: Sequelize.ENUM('CLT', 'ESTÁGIO', 'PJ'),
        allowNull: false,
      },
      seniority: {
        type: Sequelize.ENUM('JUNIOR', 'PLENO', 'SENIOR'),
        allowNull: false,
      },
      modality: {
        type: Sequelize.ENUM('PRESENCIAL', 'REMOTO', 'HÍBRIDO'),
        allowNull: false,
      },
      working_hours: {
        type: Sequelize.ENUM('20', '30', '40'),
        allowNull: false,
      },
      is_secure: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('job_vacancies');
  },
};
