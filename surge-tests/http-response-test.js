// Surge HTTP response test: log only; do not modify the response.
console.log("[Surge HTTP Response Test] Executed: " + $request.url);
console.log("[Surge HTTP Response Test] Status: " + $response.status);
$done({});
