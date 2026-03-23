import fs from "fs";

const FILE = "src/healing/locatorStore.json";

export function saveLocator(oldLocator: string, newLocator: string) {
  let data: any = {};

  if (fs.existsSync(FILE)) {
    data = JSON.parse(fs.readFileSync(FILE, "utf-8"));
  }

  data[oldLocator] = newLocator;

  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

export function getLocator(oldLocator: string): string | null {
  if (!fs.existsSync(FILE)) return null;

  const data = JSON.parse(fs.readFileSync(FILE, "utf-8"));
  return data[oldLocator] || null;
}