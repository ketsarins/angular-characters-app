import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../../services/characters.service';
import { CharacterInfo } from '../../../models/character-info.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.sass']
})
export class CharacterListComponent implements OnInit {
  public characters: CharacterInfo;

  constructor(private charactersService: CharactersService) {

  }

  ngOnInit() {
    this.loadCharacterList();
  }

  loadCharacterList() {
    this.charactersService.getAllCharacters()
    .subscribe((response: CharacterInfo) => {
      console.log(response);
      this.characters = response;
    });
  }
}
