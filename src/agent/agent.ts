import fs from "fs";
import path from "path";
import { generateFeature } from "./featureGenerator";
import { generateStepDefinitions } from "./codeGenerator";

(async () => {
  console.log("🚀 AI QA Agent Started");

  await generateFeature();

  const featurePath = path.join(
    __dirname,
    "../bdd/features/generated/login.feature"
  );

  const featureText = fs.readFileSync(featurePath, "utf-8");

  await generateStepDefinitions(featureText);

  console.log("✅ Agent Completed");
})();