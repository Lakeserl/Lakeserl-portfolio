import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AnalyticsService } from '../../../service/analytic/analytics-service';

@Component({
  selector: 'app-project',
  imports: [TranslateModule, TranslateModule, CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './project.html',
  styleUrl: './project.scss'
})
export class Project implements OnInit{

  @ViewChild('imgContainer') imgContainer: ElementRef | undefined;
  
  constructor(
    public analyticsService: AnalyticsService
  ){}

  ngOnInit(): void {
    setTimeout(() => {
      this.initializeCarousels();
    })
  }

  private initializeCarousels():void {
        const carousels = document.querySelectorAll('[data-bs-ride="carousel"]');
    carousels.forEach((carousel: any) => {
      // Bootstrap 5 carousel will auto-initialize
      carousel.addEventListener('slide.bs.carousel', (event: any) => {
        // Optional: Handle carousel slide events
      });
    });
  }

  debug(): void {
    if (this.imgContainer) {
      this.imgContainer.nativeElement.scroll({
        top: this.imgContainer.nativeElement.scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }
  }

  getCarouselId(index: number): string {
    return `projectCarousel${index}`;
  }

}
