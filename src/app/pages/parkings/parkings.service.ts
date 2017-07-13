import { Injectable } from '@angular/core';

@Injectable()
export class ParkingsService {

  parkingTable = [
{
      id: 1,
      codP: 'A1',
      nombre: 'Parking F. Economica',
      cp: '03008',
      localidad: 'San Vicente',
      plazas: 200,
    },
    {
      id: 2,
      codP: 'A2',
      nombre: 'Parking Museo UA',
      cp: '03009',
      localidad: 'San Vicente',
      plazas: 20,
    },
    {
      id: 3,
      codP: 'A3',
      nombre: 'Parking Politecnica 4',
      cp: '03008',
      localidad: 'San Vicente',
      plazas: 2000,
    },
    {
      id: 4,
      codP: 'A4',
      nombre: 'Parking Aulario 2',
      cp: '03008',
      localidad: 'San Vicente',
      plazas: 2000,
    },
    {
      id: 5,
      codP: 'A5',
      nombre: 'Parking Politecnica 1',
      cp: '03008',
      localidad: 'San Vicente',
      plazas: 200,
    },
    {
      id: 6,
      codP: 'A6',
      nombre: 'Parking 6',
      cp: '03008',
      localidad: 'San Vicente',
      plazas: 2000,
    },
    {
      id: 7,
      codP: 'A250',
      nombre: 'Parking 7',
      cp: '03008',
      localidad: 'San Vicente',
      plazas: 3000,
    },
    {
      id: 8,
      codP: 'A8',
      nombre: 'Parking 8',
      cp: '03008',
      localidad: 'San Vicente',
      plazas: 4000,
    },
    {
      id: 9,
      codP: 'A9',
      nombre: 'Parking Aulario 1',
      cp: '03008',
      localidad: 'San Vicente',
      plazas: 2500,
    },
    {
      id: 10,
      codP: 'A10',
      nombre: 'Parking Autobuses',
      cp: '03008',
      localidad: 'San Vicente',
      plazas: 1000,
    },
    {
      id: 11,
      codP: 'S1',
      nombre: 'Parking Cementerio Santa Pola',
      cp: '03028',
      localidad: 'Santa Pola',
      plazas: 2000,
    },
];

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.parkingTable);
      }, 2000);
    });
  }
}
