import { Component, Input, OnChanges, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem'; // Está certo aqui!

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter(); // TIPADO!
  @Output() emitindoIdParaEditar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(): void { }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }
  deletarItem(){
    this.emitindoIdParaEditar.emit(this.item.id)
  }

  ngOnDestroy(){
    console.log('Conseguiram me calar')
  }
}
