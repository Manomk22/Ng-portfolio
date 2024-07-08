import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { project } from '../_models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  futureProject: project = {} as project;
  currentIndex: number = 0;
  isMobileView: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('MK-Home');
  }

  ngOnInit(): void {
    this.futureProject = this.projectService.getProjectById(1);
    this.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenWidth();
  }

  checkScreenWidth(): void {
    this.isMobileView = window.innerWidth <= 768; // Adjust the breakpoint as needed
  }

  nextImage(): void {
    if (this.currentIndex < this.futureProject.pictures.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prevImage(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.futureProject.pictures.length - 1;
    }
  }
}