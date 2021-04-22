import {Component} from '@angular/core';
import {CARS} from '../consts';
import {Brand} from '../models';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {
  public cars: Brand[] = CARS;
  public preloadType = 'disable';

  public loadImages(carName: string): void {
    const carModel = this.cars.find(car => car.name === carName);

    if (this.preloadType === 'newImage') {
      carModel.models.forEach(model => {
        model.sources.forEach(source => {
          const img = new Image();
          img.src = source;
        });
      });
    } else if (this.preloadType === 'iframe') {
      const iframe = document.getElementsByTagName('iframe')[0];

      if (iframe) {
        iframe.remove();
      }
    } else if (this.preloadType === 'img') {
      const iframe = document.getElementById('imgCar')[0];
      console.log(iframe);
      if (iframe) {
        iframe.remove();
      }
    }
  }
}
