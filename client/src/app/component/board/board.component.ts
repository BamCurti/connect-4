import { Component, OnInit } from '@angular/core';
import { PieceComponent } from './../piece/piece.component'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  board = Array(6).fill(Array(7))

  constructor() { }

  ngOnInit(): void {
    console.log(this.board)
  }

  onClick(event: Event): void {
    console.log(event)
  }

}
