import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GeneratorService {
  constructor() {}

  generateRandomString(
    length: number,
    useUppercase: boolean,
    useLowercase: boolean,
    useNumbers: boolean,
    useSymbols: boolean
  ): string {
    let result = "";
    const characters = [];
    if (useUppercase) characters.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (useLowercase) characters.push("abcdefghijklmnopqrstuvwxyz");
    if (useNumbers) characters.push("0123456789");
    if (useSymbols) characters.push("!@#$%^&*()-_+=<>?");

    const allCharacters = characters.join("");
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      result += allCharacters.charAt(randomIndex);
    }
    return result;
  }
}
