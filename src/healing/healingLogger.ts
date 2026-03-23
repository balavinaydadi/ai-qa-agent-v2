import fs from "fs";

export function logHealing(oldLocator: string, newLocator: string) {
  const log = `
[HEALING]
Old: ${oldLocator}
New: ${newLocator}
Time: ${new Date().toISOString()}
`;

  fs.appendFileSync("logs/healing.log", log);
}