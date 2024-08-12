
const User = require('../../models/userModel');

const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '1d' })
}

// signup a user
const registerUser = async (req, res) => {
    const { username, email, password, } = req.body
  
    try {
      const user = await User.signup( username, email, password )
      const token = createToken(user._id)
  
      res.status(200).json({ email, token })
      console.log(user, `User: ${username}. Successfully registered!`)
      console.log(`Token: ${token}`)

    } catch (error) {
      res.status(400).json({ error: error.message })
      console.log(error.message)
    }
}
// login a user
const loginUser = async (req, res) => {
    const { email, password } = req.body
  
    try {
      const user = await User.login(email, password)
  
      // create a token
      const token = createToken(user._id)
  
       res.status(200).json({ id: user._id ,email: user.email, username: user.username, token })
       console.log(`User: ${email} just logged in.`)
       console.log(`Token: ${token}`)

    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  module.exports = {
    registerUser,
    loginUser
  }