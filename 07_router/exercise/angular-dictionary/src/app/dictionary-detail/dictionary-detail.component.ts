import { Component, OnInit } from '@angular/core';
import {IDictionary} from '../idictionary';
import {DictionaryService} from '../service/dictionary.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  wordComponent: IDictionary;
  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
    let wordFromURL = this.activatedRoute.snapshot.params.word;
    this.wordComponent = this.dictionaryService.findByWord(wordFromURL);
  }

  ngOnInit(): void {
  }

}
