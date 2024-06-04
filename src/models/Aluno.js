import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: ['Nome precisa ter entre 3 e  255 caracteres'],
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: ['Sobrenome precisa ter entre 3 e  255 caracteres'],
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já registrado',
        },
        validate: {
          isEmail: {
            msg: ['E-mail inválido'],
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: ['Idade precisa ser um número'],
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: ['Peso precisa ser um número inteiro ou um ponto flutuante'],
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: ['altura precisa ser um número inteiro ou um ponto flutuante'],
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    // this.hasOne(models.Foto, { foreignKey: 'aluno_id' });
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}