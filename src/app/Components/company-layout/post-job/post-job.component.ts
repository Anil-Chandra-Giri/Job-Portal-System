import { Component } from '@angular/core';
import { ApiCallService } from '../../../Service/api-call.service';
import { HttpClient } from '@angular/common/http';
import { PostJob } from '../../../Model/post-job';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-job',
  imports: [FormsModule],
  templateUrl: './post-job.component.html',
  styleUrl: './post-job.component.css'
})
export class PostJobComponent {
  jobData:PostJob =new PostJob();
  constructor(private apiCallService:ApiCallService){}
  addjob(){
    this.apiCallService.postjob(this.jobData).subscribe(
      res=>{
              console.log("Job Posted Successfully");
      },
      err=>{
        console.log(err);
      }
    )
  }

}
