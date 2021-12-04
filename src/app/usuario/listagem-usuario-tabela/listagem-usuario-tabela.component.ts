import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../shared/model/usuario';
import {UsuarioService} from '../../shared/services/usuario.service';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from "@angular/router";

@Component({
  selector: 'app-listagem-usuario-tabela',
  templateUrl: './listagem-usuario-tabela.component.html',
  styleUrls: ['./listagem-usuario-tabela.component.scss']
})
export class ListagemUsuarioTabelaComponent implements OnInit {

  dataSource!: MatTableDataSource<Usuario>;
  mostrarColunas = ['nome', 'cpf', 'telefone', 'idade', 'acoes'];

  // constructor(private usuarioService: UsuarioService, private roteador: Router) {
  // }
  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuarios => this.dataSource = new MatTableDataSource(usuarios)
    );
  }

  filtrar(texto: string): void {
    // @ts-ignore
    this.dataSource.filter = texto.trim().toLowerCase();
  }

  apagar(id: number): void {
    this.usuarioService.remover(id).subscribe(
      apagado => {
        // @ts-ignore
        const indx = this.dataSource.data.findIndex(usuario => usuario.id === id);
        if (indx > -1) {
          // @ts-ignore
          this.dataSource.data.splice(indx, 1);
          // @ts-ignore
          this.dataSource = new MatTableDataSource<Usuario>(this.dataSource.data);
        }
      }
    );
  }

  // editar(usuario: Usuario): void {
  //   this.roteador.navigate(['cadastrarUsuario', usuario.id]);
  // }
}
