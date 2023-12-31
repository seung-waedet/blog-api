const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  first_name: {
    type: String,
    required: [true, "first_name field is required"],
  },
  last_name: {
    type: String,
    required: [true, "last_name field is required"],
  },
  email: {
    type: String,
    required: [true, "email field is required"],
    trim: true,
    lowercase: true,
    unique: true,
    match: [/^.+@(?:[\w-]+\.)+\w+$/, "Please fill a valid email address"],
  },
  password: {
    type: String,
    required: true,
  },
  articles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
    },
  ],
  created_at: {
    type: Date,
    default: Date,
  },
  updated_at: {
    type: Date,
    default: Date,
  },
});

userSchema.pre("save", async function (next) {
  let user = this;

  if (!user.isModified("password")) return next();

  try {
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    next();
  } catch (err) {
    next(err);
  }
});

userSchema.methods.isValidPassword = async function (password) {
  const compare = await bcrypt.compare(password, this.password);
  return compare;
};

//modifies data sent back to user
userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
    // the passwordHash should not be revealed
    delete returnedObject.password;
  },
});

module.exports = mongoose.model("User", userSchema);
