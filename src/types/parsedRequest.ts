import Divisions from "./divisions";

export default interface ParsedRequest {
  isUpdateRequest: boolean;
  discordUser: string;
  robloxUser: string;
  callsign: string;
  rank: string;
  division: Divisions;
}
