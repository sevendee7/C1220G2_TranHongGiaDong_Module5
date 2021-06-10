import { Injectable } from '@angular/core';
import {IDictionary} from '../idictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  words: IDictionary[] = [{
    word: 'Hello',
    mean: 'Xin Chào'
  }, {
    word: 'Good bye',
    mean: 'Tạm biệt'
  }];
  constructor() { }

  getAll() {
    return this.words;
  }
  findByWord(word: string): IDictionary {
    return this.words.find(wordExample => wordExample.word === word);
  }
}
