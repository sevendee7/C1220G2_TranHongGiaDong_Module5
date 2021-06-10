import { Component, OnInit } from '@angular/core';
import {IDictionary} from '../idictionary';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  words: IDictionary[];
  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.words = this.dictionaryService.getAll();
  }

}
