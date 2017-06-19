// Programmatically created by wraplib.js
let returnVal
let result

if (window.THREE.OrbitControls) {
  console.log("wrapper: window.THREE.OrbitControls exists; exporting it.")
  result = window.THREE.OrbitControls
} else {

  function wrap () {

    returnVal =
    THREE.OrbitControls=function(object,domElement){function getAutoRotationAngle(){return 2*Math.PI/60/60*scope.autoRotateSpeed}function getZoomScale(){return Math.pow(.95,scope.zoomSpeed)}function rotateLeft(angle){sphericalDelta.theta-=angle}function rotateUp(angle){sphericalDelta.phi-=angle}function dollyIn(dollyScale){scope.object instanceof THREE.PerspectiveCamera?scale/=dollyScale:scope.object instanceof THREE.OrthographicCamera?(scope.object.zoom=Math.max(scope.minZoom,Math.min(scope.maxZoom,scope.object.zoom*dollyScale)),scope.object.updateProjectionMatrix(),zoomChanged=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),scope.enableZoom=!1)}function dollyOut(dollyScale){scope.object instanceof THREE.PerspectiveCamera?scale*=dollyScale:scope.object instanceof THREE.OrthographicCamera?(scope.object.zoom=Math.max(scope.minZoom,Math.min(scope.maxZoom,scope.object.zoom/dollyScale)),scope.object.updateProjectionMatrix(),zoomChanged=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),scope.enableZoom=!1)}function handleMouseDownRotate(event){rotateStart.set(event.clientX,event.clientY)}function handleMouseDownDolly(event){dollyStart.set(event.clientX,event.clientY)}function handleMouseDownPan(event){panStart.set(event.clientX,event.clientY)}function handleMouseMoveRotate(event){rotateEnd.set(event.clientX,event.clientY),rotateDelta.subVectors(rotateEnd,rotateStart);var element=scope.domElement===document?scope.domElement.body:scope.domElement;rotateLeft(2*Math.PI*rotateDelta.x/element.clientWidth*scope.rotateSpeed),rotateUp(2*Math.PI*rotateDelta.y/element.clientHeight*scope.rotateSpeed),rotateStart.copy(rotateEnd),scope.update()}function handleMouseMoveDolly(event){dollyEnd.set(event.clientX,event.clientY),dollyDelta.subVectors(dollyEnd,dollyStart),dollyDelta.y>0?dollyIn(getZoomScale()):dollyDelta.y<0&&dollyOut(getZoomScale()),dollyStart.copy(dollyEnd),scope.update()}function handleMouseMovePan(event){panEnd.set(event.clientX,event.clientY),panDelta.subVectors(panEnd,panStart),pan(panDelta.x,panDelta.y),panStart.copy(panEnd),scope.update()}function handleMouseUp(event){}function handleMouseWheel(event){event.deltaY<0?dollyOut(getZoomScale()):event.deltaY>0&&dollyIn(getZoomScale()),scope.update()}function handleKeyDown(event){switch(event.keyCode){case scope.keys.UP:pan(0,scope.keyPanSpeed),scope.update();break;case scope.keys.BOTTOM:pan(0,-scope.keyPanSpeed),scope.update();break;case scope.keys.LEFT:pan(scope.keyPanSpeed,0),scope.update();break;case scope.keys.RIGHT:pan(-scope.keyPanSpeed,0),scope.update()}}function handleTouchStartRotate(event){rotateStart.set(event.touches[0].pageX,event.touches[0].pageY)}function handleTouchStartDolly(event){var dx=event.touches[0].pageX-event.touches[1].pageX,dy=event.touches[0].pageY-event.touches[1].pageY,distance=Math.sqrt(dx*dx+dy*dy);dollyStart.set(0,distance)}function handleTouchStartPan(event){panStart.set(event.touches[0].pageX,event.touches[0].pageY)}function handleTouchMoveRotate(event){rotateEnd.set(event.touches[0].pageX,event.touches[0].pageY),rotateDelta.subVectors(rotateEnd,rotateStart);var element=scope.domElement===document?scope.domElement.body:scope.domElement;rotateLeft(2*Math.PI*rotateDelta.x/element.clientWidth*scope.rotateSpeed),rotateUp(2*Math.PI*rotateDelta.y/element.clientHeight*scope.rotateSpeed),rotateStart.copy(rotateEnd),scope.update()}function handleTouchMoveDolly(event){var dx=event.touches[0].pageX-event.touches[1].pageX,dy=event.touches[0].pageY-event.touches[1].pageY,distance=Math.sqrt(dx*dx+dy*dy);dollyEnd.set(0,distance),dollyDelta.subVectors(dollyEnd,dollyStart),dollyDelta.y>0?dollyOut(getZoomScale()):dollyDelta.y<0&&dollyIn(getZoomScale()),dollyStart.copy(dollyEnd),scope.update()}function handleTouchMovePan(event){panEnd.set(event.touches[0].pageX,event.touches[0].pageY),panDelta.subVectors(panEnd,panStart),pan(panDelta.x,panDelta.y),panStart.copy(panEnd),scope.update()}function handleTouchEnd(event){}function onMouseDown(event){if(!1!==scope.enabled){switch(event.preventDefault(),event.button){case scope.mouseButtons.ORBIT:if(!1===scope.enableRotate)return;handleMouseDownRotate(event),state=STATE.ROTATE;break;case scope.mouseButtons.ZOOM:if(!1===scope.enableZoom)return;handleMouseDownDolly(event),state=STATE.DOLLY;break;case scope.mouseButtons.PAN:if(!1===scope.enablePan)return;handleMouseDownPan(event),state=STATE.PAN}state!==STATE.NONE&&(document.addEventListener("mousemove",onMouseMove,!1),document.addEventListener("mouseup",onMouseUp,!1),scope.dispatchEvent(startEvent))}}function onMouseMove(event){if(!1!==scope.enabled)switch(event.preventDefault(),state){case STATE.ROTATE:if(!1===scope.enableRotate)return;handleMouseMoveRotate(event);break;case STATE.DOLLY:if(!1===scope.enableZoom)return;handleMouseMoveDolly(event);break;case STATE.PAN:if(!1===scope.enablePan)return;handleMouseMovePan(event)}}function onMouseUp(event){!1!==scope.enabled&&(handleMouseUp(event),document.removeEventListener("mousemove",onMouseMove,!1),document.removeEventListener("mouseup",onMouseUp,!1),scope.dispatchEvent(endEvent),state=STATE.NONE)}function onMouseWheel(event){!1===scope.enabled||!1===scope.enableZoom||state!==STATE.NONE&&state!==STATE.ROTATE||(event.preventDefault(),event.stopPropagation(),handleMouseWheel(event),scope.dispatchEvent(startEvent),scope.dispatchEvent(endEvent))}function onKeyDown(event){!1!==scope.enabled&&!1!==scope.enableKeys&&!1!==scope.enablePan&&handleKeyDown(event)}function onTouchStart(event){if(!1!==scope.enabled){switch(event.touches.length){case 1:if(!1===scope.enableRotate)return;handleTouchStartRotate(event),state=STATE.TOUCH_ROTATE;break;case 2:if(!1===scope.enableZoom)return;handleTouchStartDolly(event),state=STATE.TOUCH_DOLLY;break;case 3:if(!1===scope.enablePan)return;handleTouchStartPan(event),state=STATE.TOUCH_PAN;break;default:state=STATE.NONE}state!==STATE.NONE&&scope.dispatchEvent(startEvent)}}function onTouchMove(event){if(!1!==scope.enabled)switch(event.preventDefault(),event.stopPropagation(),event.touches.length){case 1:if(!1===scope.enableRotate)return;if(state!==STATE.TOUCH_ROTATE)return;handleTouchMoveRotate(event);break;case 2:if(!1===scope.enableZoom)return;if(state!==STATE.TOUCH_DOLLY)return;handleTouchMoveDolly(event);break;case 3:if(!1===scope.enablePan)return;if(state!==STATE.TOUCH_PAN)return;handleTouchMovePan(event);break;default:state=STATE.NONE}}function onTouchEnd(event){!1!==scope.enabled&&(handleTouchEnd(event),scope.dispatchEvent(endEvent),state=STATE.NONE)}function onContextMenu(event){event.preventDefault()}this.object=object,this.domElement=void 0!==domElement?domElement:document,this.enabled=!0,this.target=new THREE.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.25,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={ORBIT:THREE.MOUSE.LEFT,ZOOM:THREE.MOUSE.MIDDLE,PAN:THREE.MOUSE.RIGHT},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return spherical.phi},this.getAzimuthalAngle=function(){return spherical.theta},this.saveState=function(){scope.target0.copy(scope.target),scope.position0.copy(scope.object.position),scope.zoom0=scope.object.zoom},this.reset=function(){scope.target.copy(scope.target0),scope.object.position.copy(scope.position0),scope.object.zoom=scope.zoom0,scope.object.updateProjectionMatrix(),scope.dispatchEvent(changeEvent),scope.update(),state=STATE.NONE},this.update=function(){var offset=new THREE.Vector3,quat=(new THREE.Quaternion).setFromUnitVectors(object.up,new THREE.Vector3(0,1,0)),quatInverse=quat.clone().inverse(),lastPosition=new THREE.Vector3,lastQuaternion=new THREE.Quaternion;return function(){var position=scope.object.position;return offset.copy(position).sub(scope.target),offset.applyQuaternion(quat),spherical.setFromVector3(offset),scope.autoRotate&&state===STATE.NONE&&rotateLeft(getAutoRotationAngle()),spherical.theta+=sphericalDelta.theta,spherical.phi+=sphericalDelta.phi,spherical.theta=Math.max(scope.minAzimuthAngle,Math.min(scope.maxAzimuthAngle,spherical.theta)),spherical.phi=Math.max(scope.minPolarAngle,Math.min(scope.maxPolarAngle,spherical.phi)),spherical.makeSafe(),spherical.radius*=scale,spherical.radius=Math.max(scope.minDistance,Math.min(scope.maxDistance,spherical.radius)),scope.target.add(panOffset),offset.setFromSpherical(spherical),offset.applyQuaternion(quatInverse),position.copy(scope.target).add(offset),scope.object.lookAt(scope.target),!0===scope.enableDamping?(sphericalDelta.theta*=1-scope.dampingFactor,sphericalDelta.phi*=1-scope.dampingFactor):sphericalDelta.set(0,0,0),scale=1,panOffset.set(0,0,0),!!(zoomChanged||lastPosition.distanceToSquared(scope.object.position)>EPS||8*(1-lastQuaternion.dot(scope.object.quaternion))>EPS)&&(scope.dispatchEvent(changeEvent),lastPosition.copy(scope.object.position),lastQuaternion.copy(scope.object.quaternion),zoomChanged=!1,!0)}}(),this.dispose=function(){scope.domElement.removeEventListener("contextmenu",onContextMenu,!1),scope.domElement.removeEventListener("mousedown",onMouseDown,!1),scope.domElement.removeEventListener("wheel",onMouseWheel,!1),scope.domElement.removeEventListener("touchstart",onTouchStart,!1),scope.domElement.removeEventListener("touchend",onTouchEnd,!1),scope.domElement.removeEventListener("touchmove",onTouchMove,!1),document.removeEventListener("mousemove",onMouseMove,!1),document.removeEventListener("mouseup",onMouseUp,!1),window.removeEventListener("keydown",onKeyDown,!1)};var scope=this,changeEvent={type:"change"},startEvent={type:"start"},endEvent={type:"end"},STATE={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},state=STATE.NONE,EPS=1e-6,spherical=new THREE.Spherical,sphericalDelta=new THREE.Spherical,scale=1,panOffset=new THREE.Vector3,zoomChanged=!1,rotateStart=new THREE.Vector2,rotateEnd=new THREE.Vector2,rotateDelta=new THREE.Vector2,panStart=new THREE.Vector2,panEnd=new THREE.Vector2,panDelta=new THREE.Vector2,dollyStart=new THREE.Vector2,dollyEnd=new THREE.Vector2,dollyDelta=new THREE.Vector2,panLeft=function(){var v=new THREE.Vector3;return function(distance,objectMatrix){v.setFromMatrixColumn(objectMatrix,0),v.multiplyScalar(-distance),panOffset.add(v)}}(),panUp=function(){var v=new THREE.Vector3;return function(distance,objectMatrix){v.setFromMatrixColumn(objectMatrix,1),v.multiplyScalar(distance),panOffset.add(v)}}(),pan=function(){var offset=new THREE.Vector3;return function(deltaX,deltaY){var element=scope.domElement===document?scope.domElement.body:scope.domElement;if(scope.object instanceof THREE.PerspectiveCamera){var position=scope.object.position;offset.copy(position).sub(scope.target);var targetDistance=offset.length();targetDistance*=Math.tan(scope.object.fov/2*Math.PI/180),panLeft(2*deltaX*targetDistance/element.clientHeight,scope.object.matrix),panUp(2*deltaY*targetDistance/element.clientHeight,scope.object.matrix)}else scope.object instanceof THREE.OrthographicCamera?(panLeft(deltaX*(scope.object.right-scope.object.left)/scope.object.zoom/element.clientWidth,scope.object.matrix),panUp(deltaY*(scope.object.top-scope.object.bottom)/scope.object.zoom/element.clientHeight,scope.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),scope.enablePan=!1)}}();scope.domElement.addEventListener("contextmenu",onContextMenu,!1),scope.domElement.addEventListener("mousedown",onMouseDown,!1),scope.domElement.addEventListener("wheel",onMouseWheel,!1),scope.domElement.addEventListener("touchstart",onTouchStart,!1),scope.domElement.addEventListener("touchend",onTouchEnd,!1),scope.domElement.addEventListener("touchmove",onTouchMove,!1),window.addEventListener("keydown",onKeyDown,!1),this.update()},THREE.OrbitControls.prototype=Object.create(THREE.EventDispatcher.prototype),THREE.OrbitControls.prototype.constructor=THREE.OrbitControls,Object.defineProperties(THREE.OrbitControls.prototype,{center:{get:function(){return console.warn("THREE.OrbitControls: .center has been renamed to .target"),this.target}},noZoom:{get:function(){return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom},set:function(value){console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!value}},noRotate:{get:function(){return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),!this.enableRotate},set:function(value){console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),this.enableRotate=!value}},noPan:{get:function(){return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),!this.enablePan},set:function(value){console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),this.enablePan=!value}},noKeys:{get:function(){return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),!this.enableKeys},set:function(value){console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),this.enableKeys=!value}},staticMoving:{get:function(){return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),!this.enableDamping},set:function(value){console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),this.enableDamping=!value}},dynamicDampingFactor:{get:function(){return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor},set:function(value){console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor=value}}});


    if (typeof returnVal === "boolean") returnVal = undefined
  }
  wrap.call(window)
  console.log('wraplib libs/OrbitControls.min.js THREE.OrbitControls', {global: THREE.OrbitControls, return: returnVal})
  result = window.THREE.OrbitControls || returnVal
  if (!result) throw Error("wrapper failed, file: libs/OrbitControls.min.js name: THREE.OrbitControls")
}

export default result
