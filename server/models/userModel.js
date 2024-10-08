/* eslint no-use-before-define: 0 */

const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { differenceInYears } = require('date-fns');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: [true, 'This email is already exist, Try another one'],
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  bornIn: { type: Date, required: [true, 'user must provide his age'] },
  age: Number,
  role: { type: String, enum: ['authenticated', 'notAuthenticated'] },
  photo: { type: String, default: 'default.jpg' },
  // birthday: { type: Date, required: [true, 'Please provide your birthday'] },

  gender: { type: String, enum: ['male', 'female', 'other'] },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same',
    },
  },
  active: {
    type: Boolean,
    default: true,
  },
  friends: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  posts: [{ type: mongoose.Schema.ObjectId, ref: 'Post' }],
  passwordChangedAt: Date,
  history: [String],
  friendRequest: [
    new mongoose.Schema({
      fromUser: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
      date: { type: Date, default: new Date() },
      status: {
        type: String,
        enum: ['notAnswer', 'accept', 'reject'],
        default: 'notAnswer',
      },
    }),
  ],
  friendReject: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  ],
});
userSchema.pre('save', function (next) {
  console.log('pre');
  this.age = differenceInYears(new Date(Date.now()), new Date(this.bornIn));
  next();
});
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async (
  loginPassword,
  dataBasePassword
) => {
  return await bcrypt.compare(loginPassword, dataBasePassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimeStamp) {
  if (this.passwordChangedAt) {
    const timeStampChanged = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimeStamp < timeStampChanged;
  }
  return false;
};
const User = mongoose.model('User', userSchema);
module.exports = User;
