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
        allowNull: true,
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      state: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      city: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      education: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      experience: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      languages: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      technologies: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      certifications: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      soft_skills: {
        type: Sequelize.TEXT,
        allowNull: true,
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
      is_search: {
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
      is_in_person: {
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
      is_half_time: {
        type: Sequelize.BOOLEAN(),
        allowNull: true,
      },
      is_three_quarters: {
        type: Sequelize.BOOLEAN(),
        allowNull: true,
      },
      is_full_time: {
        type: Sequelize.BOOLEAN(),
        allowNull: true,
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
