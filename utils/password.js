const fs = require("fs");
const path = require("path");
const os = require("os");
const chalk = require("chalk");
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const save = (password) => {
  fs.open(path.join(__dirname, "../", "passwords.txt"), "a", 666, (e, id) => {
    fs.write(id, password + os.EOL, null, "utf-8", () => {
      fs.close(id, () => {
        console.log(chalk.red("Password saved to passwords.txt"));
      });
    });
  });
};

const create = (length = 8, hasNumbers = true, hasSymbols = true) => {
  let chars = alpha;
  hasNumbers ? (chars += numbers) : "";
  hasSymbols ? (chars += symbols) : "";

  return generate(length, chars);
};

const generate = (length, chars) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
};

module.exports = {
  create,
  save,
};
