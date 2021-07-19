#!/usr/bin/env node
const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const log = console.log;
const password = require("./utils/password");

program.version("1.0.0").description("Simple Password Generator");

program
  .option("-l, --lenght <number>", "lenght of password", "8")
  .option("-s, --save", "save password to passwords.txt")
  .option("-nn, --no-numbers", "generate password without numbers")
  .option("-ns, --no-symbols", "generate password without symbols")
  .parse();

const { lenght, save, numbers, symbols } = program.opts();

const generatedPassword = password.create(lenght, numbers, symbols);

if (save) {
  password.save(generatedPassword);
}

clipboardy.writeSync(generatedPassword);

log(chalk.green("Generated Password: ") + chalk.bold(generatedPassword));
log(chalk.yellow("Password copied to clipboard"));
