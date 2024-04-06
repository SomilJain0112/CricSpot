import { DataTypes, Model } from "sequelize";
import {sequelize} from "../config.js"; 
import Match from "./match.js";
import Player from "./player.js";

class MatchPlayer extends Model {}

MatchPlayer.init({
  team: {
    type: DataTypes.STRING(10),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'MatchPlayer',
  tableName: 'match_player',
  indexes: [
    {
      unique: true,
      fields: ['match_id', 'player_id']
    }
  ]
});

MatchPlayer.belongsTo(Match, { foreignKey: 'match_id' });
MatchPlayer.belongsTo(Player, { foreignKey: 'player_id' });
MatchPlayer.sync({ force: false });
export default MatchPlayer;
