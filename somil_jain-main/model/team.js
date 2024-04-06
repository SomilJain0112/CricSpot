import { DataTypes, Model } from "sequelize";
import {sequelize} from "../config.js"; // Assuming you have configured Sequelize

class Team extends Model {}

Team.init({
  team_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Team',
  tableName: 'teams'
});
Team.sync({ force: false });
export default Team;
