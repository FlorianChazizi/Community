const mongoose = require('mongoose')
const validator = require('validator');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema

const userSchema = new Schema({
  username:     { type: String,  required: true, unique: true },
  email:        { type: String,  required: true, unique: true },
  password:     { type: String,  required: true  },
  isAdmin:      { type: Boolean, default: false  },
  isLocked:     { type: Boolean, default: false  },
  registeredAt: { type: Date, default: Date.now  }
},  { timestamps:true } )

  // static signup method
  userSchema.statics.signup = async function(username, email, password) {

    // validation
    if (!email || !password) {
      throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
      throw Error('Email not valid')
    }
    // if (!validator.isStrongPassword(password)) {
    //   throw Error('Password not strong enough')
    // }
  
    const exists = await this.findOne({ email })
  
    if (exists) {
      throw Error('Email already in use')
    }
  
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
  
    const user = await this.create({ username, email, password: hash })
  
    return user
  }
  // static login method
userSchema.statics.login = async function(email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

  module.exports = mongoose.model('User', userSchema)