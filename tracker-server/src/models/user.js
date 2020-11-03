const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
  }
});

//What to do before saving users
userSchema.pre('save', function(next) {
  const user = this;

  //check if user password is modified
  if(!user.isModified('password')) {
    return next();
  }

  //generate salt 
  bcrypt.genSalt(10, (err, salt) => {
    if(err) {
      return next(err);
    }

    //Hash user password with salt
    bcrypt.hash(user.password, salt, (err, hash) => {
      if(err) {
        return next(err);
      }
      
      //set user password with new hashed password
      user.password = hash;
      next();
    })
  });
});

userSchema.methods.comparePassword = function(enteredPassword) {
  const user = this;

  //Making a new promise to resolve entered password and stored password
  return new Promise ((resolve, reject) => {
    bcrypt.compare(enteredPassword, user.password, (err, isMatch) => {
      if(err) {
        return reject(err);
      }

      if(!isMatch) {
        return reject(false);
      }

      resolve(true);
    });
  })
}

mongoose.model('User', userSchema);