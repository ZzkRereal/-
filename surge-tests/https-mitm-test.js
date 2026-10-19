// HTTPS MITM test: log only; do not change the response.
console.log("[Surge HTTPS MITM Test] Executed: " + $request.url);
console.log("[Surge HTTPS MITM Test] Status: " + $response.status);
$done({});
