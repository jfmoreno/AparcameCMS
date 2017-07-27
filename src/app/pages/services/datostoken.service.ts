/*
import { AuthService } from './auth.service';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Headers, Response, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'; //esta en el directorio node modules
import { Router } from '@angular/router';
import 'rxjs/Rx'; //para el map, catch, thow...etc
import { AuthHttp, tokenNotExpired, AuthConfig } from 'angular2-jwt';


@Injectable()

export class DatosTokenService {

  public foto_parking: string;
  public nombre_parking: string;
  public id_parking: string;
  public cp_parking: string;
  public lat_parking: string;
  public lon_parking: string;
  public plazas_parking: string;

  headers = new Headers({ 'content-type': 'application/json' });
  options = new RequestOptions({ headers: this.headers, withCredentials: true });

 token: Object = {
    foto_parking: '',
    nombre_parking: '',
    id_parking: '',
    cp_parking: '',
    lat_parking: '',
    lon_parking: '',
    plazas_parking: '',
  };


    constructor(public authService: AuthService,public authHttp: AuthHttp) {
       
    }

    getIdParkings() {
        return Promise.resolve(this.token); //cuando se resuelvan los datos me vas a sustituir el promise por los datos
    }


    setToken(id_token){
        console.log("Entra a setToken");
        console.log(id_token);
        this.token["foto_parking"]=id_token.data.Foto_parking;
        this.token["nombre_parking"]=id_token.data.Nombre_parking;
        this.token["id_parking"]=id_token.data.Id_parking;
        this.token["cp_parking"]=id_token.data.Cp_parking;
        this.token["lat_parking"]=id_token.data.Lat_parking;
        this.token["lon_parking"]=id_token.data.Lon_parking;
        this.token["plazas_parking"]=id_token.data.Plazas_parking;
    }

}
*/
