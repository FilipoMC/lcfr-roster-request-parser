import ParsedRequest from "./types/parsedRequest";

function removeTailSpaces(input: string): string {
  return input.replace(/\s+$/g, "");
}

function removeLeadingSpaces(input:string):string {
  return input.replace(/^\s+/g, "");
}

function parseRequest(request: string): ParsedRequest | undefined {
  const splitLines = request.split("\n");
  const removedKeys = splitLines.map(s => s.slice(s.indexOf(":")+1));
  const removedLeadingSpaces = removedKeys.map(s => removeLeadingSpaces(s));
  const removedTailSpaces = removedLeadingSpaces.map(s => removeTailSpaces(s));
  let result: ParsedRequest;
  if (removedKeys.length > 5 && removedKeys.at(0)?.toLowerCase().includes("update")) {
    result = {
      isUpdateRequest: true,
      discordUser: removedTailSpaces.at(1),
      robloxUser: removedTailSpaces.at(2),
      callsign: removedTailSpaces.at(3),
      rank: removedTailSpaces.at(4),
      division: removedTailSpaces.at(5)
    }
  } else {
    result = {
      isUpdateRequest: false,
      discordUser: removedTailSpaces.at(0),
      robloxUser: removedTailSpaces.at(1),
      callsign: removedTailSpaces.at(2),
      rank: removedTailSpaces.at(3),
      division: removedTailSpaces.at(4);
    }
  }

  return result;
}

parseRequest(
`# update
Discord username: Trooper_Mr.Clean 
Roblox username: Venom71292 
Callsign: 7W-34
Rank: Senior Firefighter Wildland 
Division: LCFR`
);
