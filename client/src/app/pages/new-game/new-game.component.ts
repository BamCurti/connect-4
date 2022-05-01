import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GameService } from './../../shared/services/game.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {
  url = 'http://localhost:4200/game';
  form: FormGroup;

  constructor(
    private router: Router,
    private GameService: GameService,
    formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      'key': ['', Validators.required]
    })
   }

  ngOnInit(): void { }

  goToGame() {
    if(!this.form.valid) {
      alert('Please enter a valid key')
      return;
    }

    const form = this.form.getRawValue();
    console.log(`${this.url}/${form.key}`);
    this.GameService.getGame(form.key)
    .then(game => console.log(game))
    .catch(err => console.log(err))
  }

  createGame() {
    console.log('Creating gmae');
    this.GameService.createGame('Must read from session')
    .then(game => {
        console.log(game)
        this.router.navigate([`/game:${game['_id']}`])
    })
    .catch(err => console.log(err))
  }

}
