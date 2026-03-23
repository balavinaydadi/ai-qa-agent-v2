import axios from "axios";

export async function sendSlackMessage(message: string) {
  const webhook = process.env.SLACK_WEBHOOK_URL;

  if (!webhook) return;

  await axios.post(webhook, {
    text: message,
  });
}