import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss']
})
export class PieceComponent implements OnInit {
  @Input() r: number = 0;
  @Input() c: number = 0;
  @Input() color: any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
