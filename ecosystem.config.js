module.exports = {
  apps: [{
    name: "api-serv",
    script: "./api-serv",
    instances: 2,
    exec_mode: "cluster",
    env: {
      "NODE_ENV": "development",
    },
    env_production: {
      "NODE_ENV": "production"
    }

  }, {
    name: "server",
    script: "./server",
    instances: 2,
    exec_mode: "cluster",
    env: {
      "NODE_ENV": "development",
    },
    env_production: {
      "NODE_ENV": "production"
    }
  }]
}
