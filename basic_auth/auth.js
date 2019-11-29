const router = require('express').Router();
const bcrypt = require('bcrypt')
const users = []

router.post('/users', async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const user = { username: req.body.username, password: hashedPassword }
      const userstatus = users.find(user => user.username === req.body.username)
      if (userstatus != null) {
        return res.send('username exists, enter unique username')
      } 
      users.push(user)
      res.status(201).send(`${req.body.username} registration successfull`)

    } catch {
      res.status(500).send("failed to create user")
    }
  })

  router.post('/login', async (req, res) => {
    const user = users.find(user => user.username === req.body.username)
    if (user == null) {
      return res.status(400).send('Cannot find user')
    }
    try {
      if(await bcrypt.compare(req.body.password, user.password)) {
        res.send('login Successfull')
      } else {
        res.send('Enter valid password')
      }
    } catch {
      res.status(500).send("Login failed")
    }
  })

  module.exports = router;