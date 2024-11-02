import { Component, OnInit } from '@angular/core';
import { PlantService } from '../services/plant.service';
import { Plant } from '../plant';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css'],
})
export class PlantListComponent implements OnInit {
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
