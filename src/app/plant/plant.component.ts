import { Component, OnInit } from '@angular/core';
import { Plant } from './plant';
import { PlantService } from './plant.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css'],
})
export class PlantComponent implements OnInit {
  plants: Array<Plant> = [];
  totalExteriorPlants: number = 0;
  totalInteriorPlants: number = 0;

  constructor(private plantService: PlantService) {}

  getPlants() {
    this.plantService.getPlants().subscribe((plants) => {
      this.plants = plants;
      this.totalExteriorPlants = plants.filter(
        (plant) => plant.tipo === 'Exterior'
      ).length;
      this.totalInteriorPlants = plants.filter(
        (plant) => plant.tipo === 'Interior'
      ).length;
    });
  }

  ngOnInit() {
    this.getPlants();
  }
}
