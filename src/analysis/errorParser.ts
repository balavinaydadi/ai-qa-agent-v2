export function parseError(error: any): string {
  if (!error) return "Unknown error";

  if (error.message) return error.message;

  return JSON.stringify(error);
}