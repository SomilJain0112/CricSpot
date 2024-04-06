
import Match from "../model/match.js";

import Team from "../model/team.js";

const createMatch = async (req, res) => {
  try {
    const { team_1, team_2, date, venue } = req.body;
    const match = await Match.create({ team_1, team_2, date, venue });
    res.status(201).json({ message: "Match created successfully", match_id: match.match_id });
  } catch (error) {
    console.error("Error creating match:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get Match Schedules Controller
const getMatchSchedules = async (req, res) => {
  try {
    const matches = await Match.findAll();
    res.status(200).json({ matches });
  } catch (error) {
    console.error("Error fetching match schedules:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getMatchDetails = async (req, res) => {
  try {
    const { match_id } = req.params;
    const match = await Match.findByPk(match_id, { include: [{ model: Team, as: 'team_1' }, { model: Team, as: 'team_2' }] });
    if (!match) {
      res.status(404).json({ error: "Match not found" });
    } else {
      res.status(200).json(match);
    }
  } catch (error) {
    console.error("Error fetching match details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// Export the controller function
export { createMatch, getMatchSchedules, getMatchDetails};
