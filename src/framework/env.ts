import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  BASE_URL: process.env.BASE_URL!,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY!,
  OPENAI_MODEL: process.env.OPENAI_MODEL || "gpt-4o-mini",

  HEADLESS: process.env.HEADLESS === "true",
  RETRY_COUNT: Number(process.env.RETRY_COUNT || 1),
  TIMEOUT: Number(process.env.TIMEOUT || 30000),

  ENABLE_SELF_HEALING: process.env.ENABLE_SELF_HEALING === "true",

  VALID_USERNAME: process.env.VALID_USERNAME!,
  VALID_PASSWORD: process.env.VALID_PASSWORD!,
};