import { Component, OnInit ,onDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PropertiesService } from 'src/app/services/properties.Service';
import { Property } from 'src/app/models/Property.model';
import * as AB from 'jquery';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.css']
})
export class AdminPropertiesComponent implements OnInit, onDestroy {
  propertyForm:FormGroup;
  properties:Property[];
propertySubscription: Subscription  ;

  constructor(private formBulider:FormBuilder,
    private propertiesService:PropertiesService
    ) { }

  ngOnInit() {
    this.initForm();
    this.propertySubscription=this.propertiesService.PropertiesSubject.subscribe(
      (properties:Property[])=>{
        this.properties=properties;
      }
      );

   this.propertiesService.getProperty();
   this.propertiesService.emitProperties();
  }
  initForm(){
    this.propertyForm=this.formBulider.group({
      title:['',Validators.required],
      category:['',Validators.required],
      surface:['',Validators.required],
      room:['',Validators.required],
      description:['']
    });
  }
  onSaveProperty(){
    const title=this.propertyForm.get('title').value;
    const category=this.propertyForm.get('category').value;
    const surface=this.propertyForm.get('surface').value;
    const rooms=this.propertyForm.get('room').value;
    const description=this.propertyForm.get('description').value;
    console.log(this.propertyForm.value);
    const newProperty= new Property(title,category,surface,rooms,description);
    this.propertiesService.createProperty(newProperty);
// AB('propertiesForModal').modal().hide();
this.propertyForm.reset();
 }

onDestroy(){
  this.propertySubscription.unsubscribe();
}
onDeleteProperty(Property:Property){
    this.propertiesService.removeProperty(Property);
  }
}
