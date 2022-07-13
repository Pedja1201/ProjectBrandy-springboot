import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RakijeService } from 'src/app/service/rakije.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-rakije',
  templateUrl: './details-rakije.component.html',
  styleUrls: ['./details-rakije.component.css']
})
export class DetailsRakijeComponent implements OnInit {
  rakija: any = {};

  constructor(private rakijeService: RakijeService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit(): void {
    let rakijaId = Number(this.route.snapshot.paramMap.get("id"));
    this.rakijeService.getOne(rakijaId).subscribe((value: any) => {
      this.rakija = value;
    }, (error) => {
      console.log(error);
      this.router.navigate(["rakije"]);
    });
  }

  back() {
    this.location.back();
  }

}
