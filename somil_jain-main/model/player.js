import { DataTypes, Model } from "sequelize";
import {sequelize} from "../config.js"; // Assuming you have configured Sequelize

class Player extends Model {}

Player.init({
  player_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  role: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Player',
  tableName: 'players'
});
Player.sync({ force: false });
export default Player;
