module.exports = {
    apps : [
        {
          name: "app",
          script: "./src/index.js",
          instances: "1",
          env: {
            NODE_ENV: "development",
          },
          env_production: {
            NODE_ENV: "production",
          },
          autorestart: true,
          cron_restart: "* 20 * * *",
          watch: true
      }
  
    ]
  }
  