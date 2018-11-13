import { Component } from '@angular/core';
import { trigger,state, style, transition, animate } from '@angular/animations';
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
     
    ])
  ]
})

export class AppComponent {
  title = 'om';
  current = 0;
  i = 0;
  mousDown='start';
  sliderStatus=true;
   ciclo;
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
   this.ipp==0?this.ipp=1:this.ipp=0;
   this.ipp==1 ? (clearInterval(this.ciclo),this.startSlidercicle()) : clearInterval(this.ciclo);
  }
  // chengMous(){
  //   e.pageY > 850 ? this.mousDown='end' :this.mousDown='start';
  // }
  chengMous(){

    setInterval(()=>{this.mousDown=='start' ? this.mousDown='end':this.mousDown='start'},3000)
    ;
  }
  startSlidercicle() {
    this.ciclo = setInterval( ()=>{this.i!==36 ? this.i++ : this.i=0;
    }, 3000); 
}
  slider(){
    this.ipp==0 ? (clearInterval(this.ciclo),this.startSlidercicle()) : clearInterval(this.ciclo);
    this.ipp==1 ? this.ipp=0: this.ipp=1;
 
   
  }
  chengPfotoRigth(){;
  this.i!==this.photoGallery.length ? this.i++ : this.i=0;
  }
  chengPfotoLeft(){
    this.i!==0 ? this.i-- : this.i=this.photoGallery.length;
    }
 chengLeft(){
     this.current!==7 ? this.current++ : this.current=0;
     console.log();
    }
  chengRigth(){
    this.current!==0 ? this.current-- : this.current=7;
  }
  
  
  constructor(){
    window.addEventListener('scroll', function(e){
     
    } , false);

    
   
  }
}


