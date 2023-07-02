import { Component } from '@angular/core';

@Component({
  selector: 'app-our-mission',
  templateUrl: './our-mission.component.html',
  styleUrls: ['./our-mission.component.css']
})
export class OurMissionComponent {
  readMore = false;
  text = ` Medical Symptom Diagnosis Assistant is designed to be your trusted companion, guiding you through a 
  comprehensive analysis of your symptoms. Whether you're looking for general information or seeking a possible diagnosis,
   our intelligent system is equipped to assist you every step of the way.

  Using the latest advancements in medical knowledge and cutting-edge artificial intelligence, we've created a platform that 
  can analyze your symptoms and provide you with potential explanations and recommendations. While our assistant can't replace
   professional medical advice, it can certainly help you gather valuable insights and prepare for your healthcare consultations.
  
  Navigating our website is simple and intuitive.`;
  
}
