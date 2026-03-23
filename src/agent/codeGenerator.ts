import fs from "fs";
import path from "path";
import { callLLM } from "./llmService";

export async function generateStepDefinitions(featureText: string) {
  const prompt = `
Convert this Cucumber feature into Playwright step definitions (TypeScript).

Rules:
- Use Playwright
- Use async/await
- Use locators: #username, #password, #submit
- Use BASE_URL from env
- Return ONLY code

Feature:
${featureText}
`;

  const code = await callLLM(prompt);

  const filePath = path.join(
    __dirname,
    "../bdd/step-definitions/generatedSteps.ts"
  );

  fs.writeFileSync(filePath, code);

  console.log("✅ AI Generated Step Definitions");
}