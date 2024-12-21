import {sha512_256} from "js-sha512";
import {create} from "random-seed";

export default class OXSimple {
  private config = {
    alphabets: [
      "abcdefghijklmnopqrstuvwxy",
      "ABCDEFGHIJKLMNOPQRSTUVWXY",
      "0123456789",
      "`!@#$%&*()_-+={[}]|\\:;\"'<,>.?/"
    ],
    charCount: 23,
  };

  constructor(configuration?: any) {
    if (configuration) throw "Custom configuration not yet supported";
  }

  encrypt(master: string, service: string, version: number) {
    const seed = sha512_256(sha512_256(master) + service + version);
    const rand = create(seed);

    let pwd: string[] = []
    for (const alphabet of this.config.alphabets) {
      pwd.push(alphabet[rand(alphabet.length)]);
    }

    const missingChars = this.config.charCount - pwd.length;
    const alphabet = this.config.alphabets.join("");
    for (let i = 0; i < missingChars; i++) {
      pwd.push(alphabet[rand(alphabet.length)]);
    }

    for (let i = pwd.length - 1; i > 0; i--) {
      const j = rand(i + 1);
      [pwd[i], pwd[j]] = [pwd[j], pwd[i]];
    }

    rand.done();
    return pwd.join("");
  }

}