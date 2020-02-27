import { Component, OnInit } from '@angular/core';
import { SkillServiceService } from '../skill-service.service';
import { EmployeeSkill } from '../employee-skill';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css']
})
export class UpdateSkillComponent implements OnInit {
employeeSkill:EmployeeSkill;
  rating: number;

  constructor(private skillservice:SkillServiceService) { }


  ngOnInit() {
  }

  submitRating(rate:any){
  this.skillservice.submitRatingServe(rate);
   
  }
}
