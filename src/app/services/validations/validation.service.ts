import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  // onlyCharKey(event: any): boolean {
  //   const charCode = event.charCode || event.keyCode; // Get the character code
  //   // Allow only alphabet characters (a-z, A-Z)
  //   return (
  //     (charCode >= 65 && charCode <= 90) || // Uppercase A-Z
  //     (charCode >= 97 && charCode <= 122) || // Lowercase a-z
  //     charCode === 32 || // Allow Space
  //     charCode === 8 || // Allow Backspace
  //     charCode === 0 // Allow null char
  //   );
  // }

  // capitalizeFirstLetter(e: any) {
  //   let words = e.target.value.toLowerCase().split(" ");
  //   e.target.value = words
  //     .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
  //     .join(" ");
  // }

  // capitalizeLetter(e: any) {
  //   let sentences = e.target.value.toLowerCase().split('. ');

  //   e.target.value = sentences
  //     .map((sentence: string) =>
  //       sentence.charAt(0).toUpperCase() + sentence.slice(1)
  //     )
  //     .join('. ');
  // }

  // Allow only characters (A-Z, a-z, space)
  onlyCharacters(value: string): string {
    return value.replace(/[^a-zA-Z ]/g, '');
  }

  // Capitalize each word
  capitalizeFirstLetter(value: string): string {
    return value
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  // Capitalize after period
  capitalizeSentence(value: string): string {
    return value
      .toLowerCase()
      .split('. ')
      .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))
      .join('. ');
  }

}
