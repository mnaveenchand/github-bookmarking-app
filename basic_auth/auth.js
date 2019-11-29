const router = require('express').Router();
const bcrypt = require('bcrypt')
const users = []

router.post('/users', async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const user = { username: req.body.username, password: hashedPassword }
      users.push(user)
      res.status(201).send("Success")
    } catch {
      res.status(500).send("failed to create user")
    }
  })

  router.post('/users/login', async (req, res) => {
    const user = users.find(user => user.username === req.body.username)
    if (user == null) {
      return res.status(400).send('Cannot find user')
    }
    try {
      if(await bcrypt.compare(req.body.password, user.password)) {
        res.send('Success')
      } else {
        res.send('Enter valid password')
      }
    } catch {
      res.status(500).send("Login failed")
    }
  })

  module.exports = router;