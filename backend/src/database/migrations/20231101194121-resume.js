'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('resume', {
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
      email: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      state: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      education: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      experience: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      languages: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      technologies: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      certifications: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      soft_skills: {
        type: Sequelize.TEXT,
        defaultValue: [],
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('resume');
  },
};
