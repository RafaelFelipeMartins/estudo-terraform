function healthCheck() {
  return {
    status: 'ok',
    uptime: process.uptime()
  };
}

console.log(healthCheck());