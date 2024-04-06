import { DataTypes, Model } from "sequelize";
import {sequelize} from "../config.js"; // Assuming you have configured Sequelize
import Player from "./player.js";

class PlayerStats extends Model {}

PlayerStats.init({
  matches_played: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  runs: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  average: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  strike_rate: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'PlayerStats',
  tableName: 'player_stats',
  indexes: [
    {
      unique: true,
      fields: ['player_id']
    }
  ]
});

PlayerStats.belongsTo(Player, { foreignKey: 'player_id' });
PlayerStats.sync({ force: false });
export default PlayerStats;
