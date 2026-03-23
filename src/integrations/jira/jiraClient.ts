import axios from "axios";

const JIRA_URL = process.env.JIRA_URL!;
const EMAIL = process.env.JIRA_EMAIL!;
const TOKEN = process.env.JIRA_API_TOKEN!;

export const jiraClient = axios.create({
  baseURL: `${JIRA_URL}/rest/api/3`,
  auth: {
    username: EMAIL,
    password: TOKEN,
  },
  headers: {
    "Content-Type": "application/json",
  },
});