export function analyzeResults(results: any[]) {
  const summary = {
    total: results.length,
    passed: results.filter(r => r.status === "passed").length,
    failed: results.filter(r => r.status === "failed").length,
  };

  console.log("Test Summary:", summary);
  return summary;
}