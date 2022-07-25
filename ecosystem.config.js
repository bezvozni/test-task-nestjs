module.exports = { //pm nestjs: https://www.reddit.com/r/Nestjs_framework/comments/vo6ksm/comment/iebrkny/
  apps : [{
    name   : "app1",
    script : "npm",
    args: "run build & npm run start:prod"
  }]
}
//to start: pm2 start ecosystem.config.js