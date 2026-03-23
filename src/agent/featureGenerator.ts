import fs from "fs";
import path from "path";

export async function generateFeature() {
  const feature = `
Feature: Login Test

  Scenario: Valid Login
    Given user navigates to login page
    When user enters valid credentials
    And clicks submit
    Then user should see success message
  `;

  const dirPath = path.join(__dirname, "../bdd/features/generated");
  const filePath = path.join(dirPath, "login.feature");

  // ✅ Ensure directory exists
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // ✅ Write file
  fs.writeFileSync(filePath, feature.trim());

  console.log("✅ Feature generated at:", filePath);
}