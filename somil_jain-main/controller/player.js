import  Player from "../model/player.js";
import Team from "../model/team.js";
import PlayerStats from "../model/playerStats.js";

const addTeamMemberToSquad = async (req, res) => {
    try {
      const { team_id } = req.params;
      const { name, role } = req.body;
      const player = await Player.create({ name, role });
      const team = await Team.findByPk(team_id);
      if (!team) {
        res.status(404).json({ error: "Team not found" });
      } else {
        await team.addPlayer(player);
        res.status(201).json({ message: "Player added to squad successfully", player_id: player.player_id });
      }
    } catch (error) {
      console.error("Error adding player to squad:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  const getPlayerStats = async (req, res) => {
    try {
      const { player_id } = req.params;
      const player = await PlayerStats.findByPk(player_id);
      if (!player) {
        res.status(404).json({ error: "Player not found" });
      } else {
        res.status(200).json(player);
      }
    } catch (error) {
      console.error("Error fetching player statistics:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

export { addTeamMemberToSquad, getPlayerStats};
