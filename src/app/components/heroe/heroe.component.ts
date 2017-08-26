import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';


import { Heroe } from '../../interfaces/heroe.interface';
import { HeroeService } from '../../services/heroe.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})

export class HeroeComponent implements OnInit {
  public nuevo: boolean;
  public id: string;
  public heroe: any = {
    nombre: '',
    casa: 'DC',
    bio: ''
  }


  constructor(
    private _heroeService: HeroeService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this.nuevo = false;

    this._activatedRoute.params.subscribe(
      params => {
        console.log(params);
        this.id = params['id'];
        if (this.id != 'nuevo') {
          this._heroeService.obtenerHeroe(this.id).subscribe(
            response => {
              console.log("get heroe");
              console.log(response);
              this.heroe = response;
            },
            error => {
              console.log(error);
            });
        }
      }
    )

  }

  ngOnInit() {
  }

  guardar() {

    if (this.id == 'nuevo') {

      this._heroeService.nuevoHeroe( this.heroe ).subscribe(
        response => {
          console.log(response);
          this._router.navigate(['/heroe', response.name])
        },
        error => {
          console.log(error);
        }
      );

    } else {
      // actualizando
      this._heroeService.actualizarHeroe( this.heroe, this.id).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    }

  }

  agregarNuevo(forma: NgForm) {
    this._router.navigate(['/heroe', 'nuevo']);
    forma.reset( {
      casa: 'DC'
    });
  }

}
