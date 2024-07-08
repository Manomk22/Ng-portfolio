import { Component, OnInit } from '@angular/core';
import { project } from '../_models/project';
import { tag } from '../_models/tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit {
  projects: project[] = [];
  selectedProject: project = {} as project;
  isPopupVisible: boolean = false;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }

  openPopup(project: project): void {
    this.selectedProject = project;
    this.isPopupVisible = true;
  }

  closePopup(): void {
    this.isPopupVisible = false;
  }
}

