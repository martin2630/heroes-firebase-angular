import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../services/heroe.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: any[];
  public loading: boolean;

  constructor(
    private _heroeService: HeroeService

  ) {
    this.loading  = true;

    this.heroes = [];
    this.getHeores();
  }

  ngOnInit() {
  }

  getHeores() {
    this._heroeService.obtenerHeroes().subscribe(
      response => {
        console.log(response);
        this.heroes = response;
        this.loading = false;

      },
      error => {
        console.log(error);
      }
    );
  }

  eliminarHeroe(key$: string) {
    this._heroeService.elimininarHeroe(key$).subscribe(
      response => {
        if (response) {
          console.log(response);

        } else{
          delete this.heroes[key$];
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
