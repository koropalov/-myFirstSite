import { Component } from '@angular/core';
import { trigger,state, style, transition, animate, group, keyframes } from '@angular/animations';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';

import { from } from 'rxjs';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations :[
    trigger('mous',[
     state('start',style({
      opacity:0
      
     })),
      state('end',style({
       opacity:1
      })),
      transition('start<=>end', animate(3000)),
     
    ]),
    trigger('pichure',[
      state('start',style({
        opacity:1
        
       })),
       
        state('end',style({
         opacity:1
        })),
        transition('start<=>end', [
          
          animate(6000,keyframes([
            style({opacity:0}),
            style({opacity:0}),
            style({opacity:0.7}),
            style({opacity:1}),
            style({opacity:1}),
            style({opacity:1}),
            style({opacity:1}),
            style({opacity:1}),
            style({opacity:1}),
            style({opacity:1}),
            style({opacity:1}),
            style({opacity:0.7}),
            style({opacity:0.3}),
            style({opacity:0})
          ]))
        ]),
       
    ])
  ]
})

export class AppComponent {
  title = 'om';
  current = 0;
  i = 0;
  mousDown='start';
  slid='start';
  sliderStatus=true;
   ciclo;
   cl;
   ipp = 0;
   
  playPause = [
    'assets/imeges/play.png',
    'assets/imeges/pause.png',
]
  foto = [
    'assets/imeges/img1.jpg',
    'assets/imeges/img2.jpg',
    'assets/imeges/img3.jpg',
    'assets/imeges/img4.jpg',
    'assets/imeges/img5.jpg',
    'assets/imeges/img6.jpg',
    'assets/imeges/img7.jpg',
    'assets/imeges/img8.jpg',
  ];
  photoGallery = [
    'assets/imeges/img9.jpg',
    'assets/imeges/img10.JPG',
    'assets/imeges/img11.JPG',
    'assets/imeges/img12.JPG',
    'assets/imeges/img13.JPG',
    'assets/imeges/img14.JPG',
    'assets/imeges/img15.JPG',
    'assets/imeges/house2.jpg',
    'assets/imeges/house3.jpg',
    'assets/imeges/house4.jpg',
    'assets/imeges/house5.jpg',
    'assets/imeges/house6.jpg',
    'assets/imeges/house7.jpg',
    'assets/imeges/house8.jpg',
    'assets/imeges/house9.jpg',
    'assets/imeges/house10.jpg',
    'assets/imeges/house11.jpg',
    'assets/imeges/house13.jpg',
    'assets/imeges/house16.jpg',
    'assets/imeges/house17.jpg',
    'assets/imeges/house18.jpg',
    'assets/imeges/house20.jpg',
    'assets/imeges/house22.jpg',
    'assets/imeges/house23.jpg',
    'assets/imeges/house24.jpg',
    'assets/imeges/house25.jpg',
    'assets/imeges/house26.jpg',
    'assets/imeges/house27.jpg',
    'assets/imeges/house28.jpg',
    'assets/imeges/house29.jpg',
    'assets/imeges/house30.jpg',
    'assets/imeges/Yard1.JPG',
    'assets/imeges/Yard2.JPG',
    'assets/imeges/Yard3.JPG',
    'assets/imeges/Yard4.JPG',
    'assets/imeges/Yard5.JPG',
    'assets/imeges/Yard6.JPG',
  ];
  chengPlay(){
    
   this.ipp==0?this.ipp=1:(this.ipp=0);
   
   this.ipp==1 ? (clearInterval(this.ciclo),this.startSlidercicle()) : 
   (clearInterval(this.ciclo));
  }
  

  chengMous(){

    setInterval(()=>{this.mousDown=='start' ? this.mousDown='end':this.mousDown='start'},3000);
  
  }

  startSlidercicle() {
    
    
    this.ciclo = setInterval( ()=>
    { (this.i!==this.photoGallery.length-1) ?( this.i++,(this.slid=='start'? this.slid='end':this.slid='start')) : (this.i=0)}, 6000); 
    
}
  slider(){
    this.ipp==0 ? (clearInterval(this.ciclo),this.startSlidercicle()): (clearInterval(this.ciclo));
    this.ipp==1 ? (this.ipp=0): this.ipp=1;
 
   
  }
  chengPfotoRigth(){;
    this.i!==this.photoGallery.length-1 ? this.i++ : this.i=0;
   
  }
  chengPfotoLeft(){
    this.i!==0 ? this.i-- : this.i = this.photoGallery.length-1;
    
    }

    
  
  constructor(){
    window.addEventListener('scroll', function(e){
     
    } , false);

    
   
  }
}


