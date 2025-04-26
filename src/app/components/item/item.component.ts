import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem'; // Está certo aqui!

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter(); // TIPADO!

  faPen = faPen;
  faTrash = faTrash;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(): void { }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }
}
