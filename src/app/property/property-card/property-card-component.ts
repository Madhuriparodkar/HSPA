import { Component, Input } from "@angular/core";


@Component ({
  selector:'app-card-component',
  templateUrl:'property-card-component.html',
  styleUrls: ['property-card-component.css']
})

export class propertycardcomponent
{
@Input() property : any


}

