import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-arview',
  templateUrl: './arview.component.html',
  styleUrls: ['./arview.component.scss']
})
export class ArviewComponent implements OnInit {
  // @ViewChild('parent', { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild('iframe') iframe: ElementRef;

  constructor() { 

  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    var id = history.state.id;
    if(id == 0) {
      this.generateARView('../assets/models/books/tdg.gltf');
    } else if(id == 1) {
      this.generateARView('../assets/models/books/mga.gltf');
    } else if(id == 2) {
      this.generateARView('../assets/models/books/solo.gltf');
    } else {
      this.generateARView('../assets/models/backup/bunny-girl.gltf');
    }
  }

  generateARView(modelPath) {
    var html = '<script src="https://aframe.io/releases/0.8.0/aframe.min.js"></script>';
    html += '<script src="https://cdn.rawgit.com/jeromeetienne/AR.js/1.6.0/aframe/build/aframe-ar.js"></script>';
    html += '<script src="https://raw.githack.com/donmccurdy/aframe-extras/master/dist/aframe-extras.loaders.min.js"></script>';
    html += '<script>';
    html += 'THREEx.ArToolkitContext.baseURL = "https://raw.githack.com/jeromeetienne/ar.js/master/three.js/"';
    html += '</script>';

    html += '<body style=\'margin: 0; overflow: hidden;\'>';
    html += '<a-scene embedded arjs renderer="precision: mediump">';
    // html += 'vr-mode-ui="enabled: false"';
		// html += 'embedded';
    // html += 'arjs=\'sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; debugUIEnabled: false;\'>';
    html += '<a-entity gltf-model="../assets/models/books/solo.gltf" rotation="0 180 0" scale="0.15 0.15 0.15" gps-entity-place="longitude: 55.403435599999995; latitude: 25.165617200000003;" animation-mixer/>;'
    html += '<a-camera gps-camera rotation-reader></a-camera>';
    html += '</a-scene>';
    html += '</body>';
    
    // html += '<a-scene embedded arjs renderer="precision: mediump">';
    // html += '<a-marker preset=\'hiro\'>';
    // html += '<a-entity scale="0.5 0.5 0.5" gltf-model="url(' + modelPath + ')">';
    // html += '</a-entity>';
    // html += '</a-marker>';
    // html += '<a-entity camera look-controls pointerLockEnabled>';
    // html += '<a-cursor></a-cursor>';
    // html += '</a-entity>';
    // html += '</a-scene>';

    let doc =  this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
    doc.open();
    doc.write(html);
    doc.close();
  }

}
