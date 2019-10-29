
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Property} from '../models/Property.model';
// import { PropertiesService } from 'src/app/services/properties.service';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
properties:Property[]=[];
PropertiesSubject= new Subject<Property[]>();
  constructor() { }

  	emitProperties() {
  		this.PropertiesSubject.next(this.properties);
  	}
  	// save  in fire base 
  	saveproperties() {
  		firebase.database().ref('/properties').set(this.properties);
  	}
  	// create in fire base 
  createProperty(newProperty:Property){
  	this.properties.push(newProperty);
  	this.saveproperties();
  	this.emitProperties();
  }
  removeProperty(Property:Property){
    const index=this.properties.findIndex(
      (propertyEl)=>{
        if(propertyEl===Property){
          return true;
        }
      }
      );
    this.properties.splice(index,1);
    this.saveproperties();
    this.emitProperties();
  }
  getProperty(){
  	firebase.database().ref('/properties').on('value',(data)=>{
  		this.properties= data.val() ? data.val() :[];
  		this.emitProperties();

  	});
  }
}
