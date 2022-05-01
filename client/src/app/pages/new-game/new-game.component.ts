import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {
  url = 'http://localhost:3000/api/game';
  form: FormGroup;

  constructor(
    private router: Router,
    formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      'key': ['', Validators.required]
    })
   }

  ngOnInit(): void { }

  onSubmit() {
    if(!this.form.valid) {
      alert('Please enter a valid key')
      return;
    }

    const form = this.form.getRawValue();
    console.log(`${this.url}/${form.key}`);

  }

}
