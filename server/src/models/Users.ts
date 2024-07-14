import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../config/database";

class User extends Model {
  public id!: number;
  public name!: string;
  public dateOfBirth!: string;
  public mainLanguage!: string;
  public secondaryLanguage!: string;
  public fundingSource!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mainLanguage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondaryLanguage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fundingSource: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "users",
  }
);

export default User;
