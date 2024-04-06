import { DataTypes, Model } from "sequelize";
import {sequelize} from "../config.js"; 

class Match extends Model {}

Match.init({
  match_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  team_1: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  team_2: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  venue: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  status: {
    type: DataTypes.STRING(20),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Match',
  tableName: 'matches'
});
Match.sync({ force: false });
export default Match;
