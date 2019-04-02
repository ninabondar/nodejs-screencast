const util = require("util");

let phrases = {
  hi: "привет",
  world: "мир"
};

function PhraseError(msg) {
  this.message = msg;
  Error.captureStackTrace(this, PhraseError);
}

util.inherits(PhraseError, Error);
PhraseError.prototype.name = "PhraseError";

function HttpError(status, msg) {
  this.status = status;
  this.message = msg;
  Error.captureStackTrace(this, HttpError);
}

util.inherits(HttpError, Error);
HttpError.prototype.name = "HttpError";

const getPhrase = name => {
  /*if (!phrases.name) {
    throw new PhraseError("Heт такой фразы " + name);
  }*/
  return console.log(phrases.name);
};

const makePage = url => {
  if (url !== "index.html") {
    throw new HttpError(404, "no such page");
  }

  return util.format("%s, %s!", phrases.hi, phrases.world);
};

try {
  getPhrase("Nina is the name");
} catch (e) {
  if (e instanceof HttpError) {
    console.log(e.status, e.message);
  } else {
    console.error("heeelp", e.name, e.message, e.stack);
  }
}
