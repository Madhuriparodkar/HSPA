import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component(
  {
    selector:'app-list-component',
    templateUrl:'property-list-component.html'
  }
)
export class propertclistcomponent implements OnInit
{

  properties: any = [];

  constructor(private http:HttpClient) { }

  ngOnInit()
   {
    this.http.get('data/properties.json').subscribe(data=>

      {
        this.properties = data;
        console.log(data)
      }
      );
   }
}
