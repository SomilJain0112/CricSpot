import { DataTypes, Model } from "sequelize";
import {sequelize} from "../config.js"; // Assuming you have configured Sequelize
import Team from "./team.js";
import Player from "./player.js";

class TeamPlayer extends Model {}

TeamPlayer.init({}, {
  sequelize,
  modelName: 'TeamPlayer',
  tableName: 'team_player',
  indexes: [
    {
      unique: true,
      fields: ['team_id', 'player_id']
    }
  ]
});

TeamPlayer.belongsTo(Team, { foreignKey: 'team_id' });
TeamPlayer.belongsTo(Player, { foreignKey: 'player_id' });

TeamPlayer.sync({ force: false });

export default TeamPlayer;
