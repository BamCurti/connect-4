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
    .then(game => this.router.navigate([`/game/${game.data._id}`]))
    .catch(err => {
      alert('The key was not found. Please try again.')
    })
  }

  createGame() {
    this.GameService.createGame('Must read from session')
    .then(game => {
        const id = game.data.insertedId;
        this.router.navigate([`/game/${id}`])
    })
    .catch(err => console.log(err))
  }

}
