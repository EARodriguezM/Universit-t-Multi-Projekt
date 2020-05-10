import { Component, OnInit } from '@angular/core';
import { TweenMax, Expo, Power2, Quad, gsap } from "gsap";
import { ActivateUserComponent } from "../activate-user/activate-user.component";

@Component({
   selector: 'login-api-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   emailLabel;
   email;
   passwordLabel;
   password;
   showPasswordCheck;
   showPasswordToggle;
   mySVG;
   twoFingers;
   armL;
   armR;
   eyeL;
   eyeR;
   nose;
   mouth;
   mouthBG;
   mouthSmallBG;
   mouthMediumBG;
   mouthLargeBG;
   mouthMaskPath;
   mouthOutline;
   tooth;
   tongue;
   chin;
   face;
   eyebrow;
   outerEarL;
   outerEarR;
   earHairL;
   earHairR;
   hair;
   bodyBG;
   bodyBGchanged;
   activeElement;
   curEmailIndex;
   screenCenter;
   svgCoords;
   emailCoords;
   emailScrollMax;
   chinMin;
   dFromC;
   mouthStatus;
   blinking;
   eyeScale;
   eyesCovered;
   showPasswordClicked;
   eyeLCoords;
   eyeRCoords;
   noseCoords;
   mouthCoords;
   eyeLAngle;
   eyeLX;
   eyeLY;
   eyeRAngle;
   eyeRX;
   eyeRY;
   noseAngle;
   noseX;
   noseY;
   mouthAngle;
   mouthX;
   mouthY;
   mouthR;
   chinX;
   chinY;
   chinS;
   faceX;
   faceY;
   faceSkew;
   eyebrowSkew;
   outerEarX;
   outerEarY;
   hairX;
   hairS;

   constructor() {
      thisShitComponent = this;
   }

   ngOnInit(): void {
      thisShitComponent.emailLabel = document.querySelector('#loginEmailLabel');
      thisShitComponent.email = document.querySelector('#loginEmail');
      thisShitComponent.passwordLabel = document.querySelector('#loginPasswordLabel');
      thisShitComponent.password = document.querySelector('#loginPassword');
      thisShitComponent.showPasswordCheck = document.querySelector('#showPasswordCheck');
      thisShitComponent.showPasswordToggle = document.querySelector('#showPasswordToggle');
      thisShitComponent.mySVG = document.querySelector('.svgContainer');
      thisShitComponent.twoFingers = document.querySelector('.twoFingers');
      thisShitComponent.armL = document.querySelector('.armL');
      thisShitComponent.armR = document.querySelector('.armR');
      thisShitComponent.eyeL = document.querySelector('.eyeL');
      thisShitComponent.eyeR = document.querySelector('.eyeR');
      thisShitComponent.nose = document.querySelector('.nose');
      thisShitComponent.mouth = document.querySelector('.mouth');
      thisShitComponent.mouthBG = document.querySelector('.mouthBG');
      thisShitComponent.mouthSmallBG = document.querySelector('.mouthSmallBG');
      thisShitComponent.mouthMediumBG = document.querySelector('.mouthMediumBG');
      thisShitComponent.mouthLargeBG = document.querySelector('.mouthLargeBG');
      thisShitComponent.mouthMaskPath = document.querySelector('#mouthMaskPath');
      thisShitComponent.mouthOutline = document.querySelector('.mouthOutline');
      thisShitComponent.tooth = document.querySelector('.tooth');
      thisShitComponent.tongue = document.querySelector('.tongue');
      thisShitComponent.chin = document.querySelector('.chin');
      thisShitComponent.face = document.querySelector('.face');
      thisShitComponent.eyebrow = document.querySelector('.eyebrow');
      thisShitComponent.outerEarL = document.querySelector('.earL .outerEar');
      thisShitComponent.outerEarR = document.querySelector('.earR .outerEar');
      thisShitComponent.earHairL = document.querySelector('.earL .earHair');
      thisShitComponent.earHairR = document.querySelector('.earR .earHair');
      thisShitComponent.hair = document.querySelector('.hair');
      thisShitComponent.bodyBG = document.querySelector('.bodyBGnormal');
      thisShitComponent.bodyBGchanged = document.querySelector('.bodyBGchanged');
      thisShitComponent.activeElement;
      thisShitComponent.curEmailIndex;
      thisShitComponent.screenCenter;
      thisShitComponent.svgCoords;
      thisShitComponent.emailCoords;
      thisShitComponent.emailScrollMax;
      thisShitComponent.chinMin = .5;
      thisShitComponent.dFromC;
      thisShitComponent.mouthStatus = "small";
      thisShitComponent.blinking;
      thisShitComponent.eyeScale = 1;
      thisShitComponent.eyesCovered = false;
      thisShitComponent.showPasswordClicked = false;
      thisShitComponent.eyeLCoords;
      thisShitComponent.eyeRCoords;
      thisShitComponent.noseCoords;
      thisShitComponent.mouthCoords;
      thisShitComponent.eyeLAngle;
      thisShitComponent.eyeLX;
      thisShitComponent.eyeLY;
      thisShitComponent.eyeRAngle;
      thisShitComponent.eyeRX;
      thisShitComponent.eyeRY;
      thisShitComponent.noseAngle;
      thisShitComponent.noseX;
      thisShitComponent.noseY;
      thisShitComponent.mouthAngle;
      thisShitComponent.mouthX;
      thisShitComponent.mouthY;
      thisShitComponent.mouthR;
      thisShitComponent.chinX;
      thisShitComponent.chinY;
      thisShitComponent.chinS;
      thisShitComponent.faceX;
      thisShitComponent.faceY;
      thisShitComponent.faceSkew;
      thisShitComponent.eyebrowSkew;
      thisShitComponent.outerEarX;
      thisShitComponent.outerEarY;
      thisShitComponent.hairX;
      thisShitComponent.hairS;
      thisShitComponent.initLoginForm();
   }


   name() {
      console.log("hhla");
   }

   calculateFaceMove(e) {
      var carPos = thisShitComponent.email.selectionEnd;
      var div = document.createElement('div');
      var span = document.createElement('span');
      var copyStyle = getComputedStyle(thisShitComponent.email);
      var caretCoords;

      if (carPos == null || carPos == 0) {
         // if browser doesn't support 'selectionEnd' property on input[type="email"], use 'value.length' property instead
         carPos = thisShitComponent.email.value.length;
      }
      [].forEach.call(copyStyle, function (prop) {
         div.style[prop] = copyStyle[prop];
      });
      div.style.position = 'absolute';
      document.body.appendChild(div);
      div.textContent = thisShitComponent.email.value.substr(0, carPos);
      span.textContent = thisShitComponent.email.value.substr(carPos) || '.';
      div.appendChild(span);

      if (thisShitComponent.email.scrollWidth <= thisShitComponent.emailScrollMax) {
         caretCoords = thisShitComponent.getPosition(span);
         thisShitComponent.dFromC = thisShitComponent.screenCenter - (caretCoords.x + thisShitComponent.emailCoords.x);
         thisShitComponent.eyeLAngle = thisShitComponent.getAngle(thisShitComponent.eyeLCoords.x, thisShitComponent.eyeLCoords.y, thisShitComponent.emailCoords.x + caretCoords.x, thisShitComponent.emailCoords.y + 25);
         thisShitComponent.eyeRAngle = thisShitComponent.getAngle(thisShitComponent.eyeRCoords.x, thisShitComponent.eyeRCoords.y, thisShitComponent.emailCoords.x + caretCoords.x, thisShitComponent.emailCoords.y + 25);
         thisShitComponent.noseAngle = thisShitComponent.getAngle(thisShitComponent.noseCoords.x, thisShitComponent.noseCoords.y, thisShitComponent.emailCoords.x + caretCoords.x, thisShitComponent.emailCoords.y + 25);
         thisShitComponent.mouthAngle = thisShitComponent.getAngle(thisShitComponent.mouthCoords.x, thisShitComponent.mouthCoords.y, thisShitComponent.emailCoords.x + caretCoords.x, thisShitComponent.emailCoords.y + 25);
      } else {
         thisShitComponent.eyeLAngle = thisShitComponent.getAngle(thisShitComponent.eyeLCoords.x, thisShitComponent.eyeLCoords.y, thisShitComponent.emailCoords.x + thisShitComponent.emailScrollMax, thisShitComponent.emailCoords.y + 25);
         thisShitComponent.eyeRAngle = thisShitComponent.getAngle(thisShitComponent.eyeRCoords.x, thisShitComponent.eyeRCoords.y, thisShitComponent.emailCoords.x + thisShitComponent.emailScrollMax, thisShitComponent.emailCoords.y + 25);
         thisShitComponent.noseAngle = thisShitComponent.getAngle(thisShitComponent.noseCoords.x, thisShitComponent.noseCoords.y, thisShitComponent.emailCoords.x + thisShitComponent.emailScrollMax, thisShitComponent.emailCoords.y + 25);
         thisShitComponent.mouthAngle = thisShitComponent.getAngle(thisShitComponent.mouthCoords.x, thisShitComponent.mouthCoords.y, thisShitComponent.emailCoords.x + thisShitComponent.emailScrollMax, thisShitComponent.emailCoords.y + 25);
      }

      thisShitComponent.eyeLX = Math.cos(thisShitComponent.eyeLAngle) * 20;
      thisShitComponent.eyeLY = Math.sin(thisShitComponent.eyeLAngle) * 10;
      thisShitComponent.eyeRX = Math.cos(thisShitComponent.eyeRAngle) * 20;
      thisShitComponent.eyeRY = Math.sin(thisShitComponent.eyeRAngle) * 10;
      thisShitComponent.noseX = Math.cos(thisShitComponent.noseAngle) * 23;
      thisShitComponent.noseY = Math.sin(thisShitComponent.noseAngle) * 10;
      thisShitComponent.mouthX = Math.cos(thisShitComponent.mouthAngle) * 23;
      thisShitComponent.mouthY = Math.sin(thisShitComponent.mouthAngle) * 10;
      thisShitComponent.mouthR = Math.cos(thisShitComponent.mouthAngle) * 6;
      thisShitComponent.chinX = thisShitComponent.mouthX * .8;
      thisShitComponent.chinY = thisShitComponent.mouthY * .5;
      thisShitComponent.chinS = 1 - ((thisShitComponent.dFromC * .15) / 100);
      if (thisShitComponent.chinS > 1) {
         thisShitComponent.chinS = 1 - (thisShitComponent.chinS - 1);
         if (thisShitComponent.chinS < thisShitComponent.chinMin) {
            thisShitComponent.chinS = thisShitComponent.chinMin;
         }
      }
      thisShitComponent.faceX = thisShitComponent.mouthX * .3;
      thisShitComponent.faceY = thisShitComponent.mouthY * .4;
      thisShitComponent.faceSkew = Math.cos(thisShitComponent.mouthAngle) * 5;
      thisShitComponent.eyebrowSkew = Math.cos(thisShitComponent.mouthAngle) * 25;
      thisShitComponent.outerEarX = Math.cos(thisShitComponent.mouthAngle) * 4;
      thisShitComponent.outerEarY = Math.cos(thisShitComponent.mouthAngle) * 5;
      thisShitComponent.hairX = Math.cos(thisShitComponent.mouthAngle) * 6;
      thisShitComponent.hairS = 1.2;

      TweenMax.to(thisShitComponent.eyeL, 1, { x: -thisShitComponent.eyeLX, y: -thisShitComponent.eyeLY, ease: Expo.easeOut });
      TweenMax.to(thisShitComponent.eyeR, 1, { x: -thisShitComponent.eyeRX, y: -thisShitComponent.eyeRY, ease: Expo.easeOut });
      TweenMax.to(thisShitComponent.nose, 1, { x: -thisShitComponent.noseX, y: -thisShitComponent.noseY, rotation: thisShitComponent.mouthR, transformOrigin: "center center", ease: Expo.easeOut });
      TweenMax.to(thisShitComponent.mouth, 1, { x: -thisShitComponent.mouthX, y: -thisShitComponent.mouthY, rotation: thisShitComponent.mouthR, transformOrigin: "center center", ease: Expo.easeOut });
      TweenMax.to(thisShitComponent.chin, 1, { x: -thisShitComponent.chinX, y: -thisShitComponent.chinY, scaleY: thisShitComponent.chinS, ease: Expo.easeOut });
      TweenMax.to(thisShitComponent.face, 1, { x: -thisShitComponent.faceX, y: -thisShitComponent.faceY, skewX: -thisShitComponent.faceSkew, transformOrigin: "center top", ease: Expo.easeOut });
      TweenMax.to(thisShitComponent.eyebrow, 1, { x: -thisShitComponent.faceX, y: -thisShitComponent.faceY, skewX: -thisShitComponent.eyebrowSkew, transformOrigin: "center top", ease: Expo.easeOut });
      TweenMax.to(thisShitComponent.outerEarL, 1, { x: thisShitComponent.outerEarX, y: -thisShitComponent.outerEarY, ease: Expo.easeOut });
      TweenMax.to(thisShitComponent.outerEarR, 1, { x: thisShitComponent.outerEarX, y: thisShitComponent.outerEarY, ease: Expo.easeOut });
      TweenMax.to(thisShitComponent.earHairL, 1, { x: -thisShitComponent.outerEarX, y: -thisShitComponent.outerEarY, ease: Expo.easeOut });
      TweenMax.to(thisShitComponent.earHairR, 1, { x: -thisShitComponent.outerEarX, y: thisShitComponent.outerEarY, ease: Expo.easeOut });
      TweenMax.to(thisShitComponent.hair, 1, { x: thisShitComponent.hairX, scaleY: thisShitComponent.hairS, transformOrigin: "center bottom", ease: Expo.easeOut });

      document.body.removeChild(div);
   };

   onEmailInput(e?) {
      thisShitComponent.calculateFaceMove(e);
      var value = thisShitComponent.email.value;
      thisShitComponent.curEmailIndex = value.length;

      // very crude email validation to trigger effects
      if (thisShitComponent.curEmailIndex > 0) {
         if (thisShitComponent.mouthStatus == "small") {
            thisShitComponent.mouthStatus = "medium";
            TweenMax.to([thisShitComponent.mouthBG, thisShitComponent.mouthOutline, thisShitComponent.mouthMaskPath], 1, { morphSVG: thisShitComponent.mouthMediumBG, shapeIndex: 8, ease: Expo.easeOut });
            TweenMax.to(thisShitComponent.tooth, 1, { x: 0, y: 0, ease: Expo.easeOut });
            TweenMax.to(thisShitComponent.tongue, 1, { x: 0, y: 1, ease: Expo.easeOut });
            TweenMax.to([thisShitComponent.eyeL, thisShitComponent.eyeR], 1, { scaleX: .85, scaleY: .85, ease: Expo.easeOut });
            thisShitComponent.eyeScale = .85;
         }
         if (value.includes("@")) {
            thisShitComponent.mouthStatus = "large";
            TweenMax.to([thisShitComponent.mouthBG, thisShitComponent.mouthOutline, thisShitComponent.mouthMaskPath], 1, { morphSVG: thisShitComponent.mouthLargeBG, ease: Expo.easeOut });
            TweenMax.to(thisShitComponent.tooth, 1, { x: 3, y: -2, ease: Expo.easeOut });
            TweenMax.to(thisShitComponent.tongue, 1, { y: 2, ease: Expo.easeOut });
            TweenMax.to([thisShitComponent.eyeL, thisShitComponent.eyeR], 1, { scaleX: .65, scaleY: .65, ease: Expo.easeOut, transformOrigin: "center center" });
            thisShitComponent.eyeScale = .65;
         } else {
            thisShitComponent.mouthStatus = "medium";
            TweenMax.to([thisShitComponent.mouthBG, thisShitComponent.mouthOutline, thisShitComponent.mouthMaskPath], 1, { morphSVG: thisShitComponent.mouthMediumBG, ease: Expo.easeOut });
            TweenMax.to(thisShitComponent.tooth, 1, { x: 0, y: 0, ease: Expo.easeOut });
            TweenMax.to(thisShitComponent.tongue, 1, { x: 0, y: 1, ease: Expo.easeOut });
            TweenMax.to([thisShitComponent.eyeL, thisShitComponent.eyeR], 1, { scaleX: .85, scaleY: .85, ease: Expo.easeOut });
            thisShitComponent.eyeScale = .85;
         }
      } else {
         thisShitComponent.mouthStatus = "small";
         TweenMax.to([thisShitComponent.mouthBG, thisShitComponent.mouthOutline, thisShitComponent.mouthMaskPath], 1, { morphSVG: thisShitComponent.mouthSmallBG, shapeIndex: 9, ease: Expo.easeOut });
         TweenMax.to(thisShitComponent.tooth, 1, { x: 0, y: 0, ease: Expo.easeOut });
         TweenMax.to(thisShitComponent.tongue, 1, { y: 0, ease: Expo.easeOut });
         TweenMax.to([thisShitComponent.eyeL, thisShitComponent.eyeR], 1, { scaleX: 1, scaleY: 1, ease: Expo.easeOut });
         thisShitComponent.eyeScale = 1;
      }
   }
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   onEmailFocus(e) {
      thisShitComponent.activeElement = "email";
      e.target.parentElement.classList.add("focusWithText");
      //stopBlinking();
      //calculateFaceMove();

      thisShitComponent.onEmailInput();
   }

   onEmailBlur(e) {
      thisShitComponent.activeElement = null;
      setTimeout(function () {
         if (thisShitComponent.activeElement == "email") {
         } else {
            if (e.target.value == "") {
               e.target.parentElement.classList.remove("focusWithText");
            }
            //startBlinking();
            thisShitComponent.resetFace();
         }
      }, 100);
   }

   onEmailLabelClick(e) {
      thisShitComponent.activeElement = "email";
   }

   onPasswordFocus(e) {
      thisShitComponent.activeElement = "password";
      if (!thisShitComponent.eyesCovered) {
         thisShitComponent.coverEyes();
      }
   }

   onPasswordBlur(e) {
      thisShitComponent.activeElement = null;
      setTimeout(function () {
         if (thisShitComponent.activeElement == "toggle" || thisShitComponent.activeElement == "password") {
         } else {
            thisShitComponent.uncoverEyes();
         }
      }, 100);
   }

   onPasswordToggleFocus(e) {
      thisShitComponent.activeElement = "toggle";
      if (!thisShitComponent.eyesCovered) {
         thisShitComponent.coverEyes();
      }
   }

   onPasswordToggleBlur(e) {
      thisShitComponent.activeElement = null;
      if (!thisShitComponent.showPasswordClicked) {
         setTimeout(function () {
            if (thisShitComponent.activeElement == "password" || thisShitComponent.activeElement == "toggle") {
            } else {
               thisShitComponent.uncoverEyes();
            }
         }, 100);
      }
   }

   onPasswordToggleMouseDown(e) {
      thisShitComponent.showPasswordClicked = true;
   }

   onPasswordToggleMouseUp(e) {
      thisShitComponent.showPasswordClicked = false;
   }

   onPasswordToggleChange(e) {
      setTimeout(function () {
         // if checkbox is checked, show password
         if (e.target.checked) {
            thisShitComponent.password.type = "text";
            thisShitComponent.spreadFingers();

            // if checkbox is off, hide password
         } else {
            thisShitComponent.password.type = "password";
            thisShitComponent.closeFingers();
         }
      }, 100);
   }

   onPasswordToggleClick(e) {
      //console.log("click: " + e.target.id);
      e.target.focus();
   }

   spreadFingers() {
      TweenMax.to(thisShitComponent.twoFingers, .35, { transformOrigin: "bottom left", rotation: 30, x: -9, y: -2, ease: Power2.easeInOut });
   }

   closeFingers() {
      TweenMax.to(thisShitComponent.twoFingers, .35, { transformOrigin: "bottom left", rotation: 0, x: 0, y: 0, ease: Power2.easeInOut });
   }

   coverEyes() {
      var t: TweenMax;
      gsap.killTweensOf([thisShitComponent.armL, thisShitComponent.armR]);
      gsap.set([thisShitComponent.armL, thisShitComponent.armR], { visibility: "visible" });
      TweenMax.to(thisShitComponent.armL, .45, { x: -93, y: 10, rotation: 0, ease: Quad.easeOut });
      TweenMax.to(thisShitComponent.armR, .45, { x: -93, y: 10, rotation: 0, ease: Quad.easeOut, delay: .1 });
      TweenMax.to(thisShitComponent.bodyBG, .45, { morphSVG: thisShitComponent.bodyBGchanged, ease: Quad.easeOut });
      thisShitComponent.eyesCovered = true;
   }

   uncoverEyes() {
      gsap.killTweensOf([thisShitComponent.armL, thisShitComponent.armR]);
      TweenMax.to(thisShitComponent.armL, 1.35, { y: 220, ease: Quad.easeOut });
      TweenMax.to(thisShitComponent.armL, 1.35, { rotation: 105, ease: Quad.easeOut, delay: .1 });
      TweenMax.to(thisShitComponent.armR, 1.35, { y: 220, ease: Quad.easeOut });
      TweenMax.to(thisShitComponent.armR, 1.35, {
         rotation: -105, ease: Quad.easeOut, delay: .1, onComplete: function () {
            gsap.set([thisShitComponent.armL, thisShitComponent.armR], { visibility: "hidden" });
         }
      });
      TweenMax.to(thisShitComponent.bodyBG, .45, { morphSVG: thisShitComponent.bodyBG, ease: Quad.easeOut });
      thisShitComponent.eyesCovered = false;
   }

   resetFace() {
      TweenMax.to([thisShitComponent.eyeL, thisShitComponent.eyeR], 1, { x: 0, y: 0, ease: Expo.easeOut });
      TweenMax.to(thisShitComponent.nose, 1, { x: 0, y: 0, scaleX: 1, scaleY: 1, ease: Expo.easeOut });
      TweenMax.to(thisShitComponent.mouth, 1, { x: 0, y: 0, rotation: 0, ease: Expo.easeOut });
      TweenMax.to(thisShitComponent.chin, 1, { x: 0, y: 0, scaleY: 1, ease: Expo.easeOut });
      TweenMax.to([thisShitComponent.face, thisShitComponent.eyebrow], 1, { x: 0, y: 0, skewX: 0, ease: Expo.easeOut });
      TweenMax.to([thisShitComponent.outerEarL, thisShitComponent.outerEarR, thisShitComponent.earHairL, thisShitComponent.earHairR, thisShitComponent.hair], 1, { x: 0, y: 0, scaleY: 1, ease: Expo.easeOut });
   }

   startBlinking(delay) {
      thisShitComponent.name();
      if (delay) {
         delay = thisShitComponent.getRandomInt(delay);
      } else {
         delay = 1;
      }
      thisShitComponent.blinking = TweenMax.to([thisShitComponent.eyeL, thisShitComponent.eyeR], .1, {
         delay: delay, scaleY: 0, yoyo: true, repeat: 1, transformOrigin: "center center", onComplete: function () {
            thisShitComponent.startBlinking(12);
         }
      });
   }

   stopBlinking() {
      thisShitComponent.blinking.kill();
      thisShitComponent.blinking = null;
      gsap.set([thisShitComponent.eyeL, thisShitComponent.eyeR], { scaleY: thisShitComponent.eyeScale });
   }

   getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
   }

   getAngle(x1, y1, x2, y2) {
      var angle = Math.atan2(y1 - y2, x1 - x2);
      return angle;
   }

   getPosition(el) {
      var xPos = 0;
      var yPos = 0;

      while (el) {
         if (el.tagName == "BODY") {
            // deal with browser quirks with body/window/document and page scroll
            var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
            var yScroll = el.scrollTop || document.documentElement.scrollTop;

            xPos += (el.offsetLeft - xScroll + el.clientLeft);
            yPos += (el.offsetTop - yScroll + el.clientTop);
         } else {
            // for all other non-BODY elements
            xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPos += (el.offsetTop - el.scrollTop + el.clientTop);
         }

         el = el.offsetParent;
      }
      //console.log("xPos: " + xPos + ", yPos: " + yPos);
      return {
         x: xPos,
         y: yPos
      };
   }
   isMobileDevice() {
      var check = false;

      (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor);
      return check;
   };


   initLoginForm() {
      // some measurements for the svg's elements
      thisShitComponent.svgCoords = thisShitComponent.getPosition(thisShitComponent.mySVG);
      thisShitComponent.emailCoords = thisShitComponent.getPosition(thisShitComponent.email);
      thisShitComponent.screenCenter = thisShitComponent.svgCoords.x + (thisShitComponent.mySVG.offsetWidth / 2);
      thisShitComponent.eyeLCoords = { x: thisShitComponent.svgCoords.x + 84, y: thisShitComponent.svgCoords.y + 76 };
      thisShitComponent.eyeRCoords = { x: thisShitComponent.svgCoords.x + 113, y: thisShitComponent.svgCoords.y + 76 };
      thisShitComponent.noseCoords = { x: thisShitComponent.svgCoords.x + 97, y: thisShitComponent.svgCoords.y + 81 };
      thisShitComponent.mouthCoords = { x: thisShitComponent.svgCoords.x + 100, y: thisShitComponent.svgCoords.y + 100 };

      // handle events for email input
      thisShitComponent.email.addEventListener('focus', thisShitComponent.onEmailFocus);
      thisShitComponent.email.addEventListener('blur', thisShitComponent.onEmailBlur);
      thisShitComponent.email.addEventListener('input', thisShitComponent.onEmailInput);
      thisShitComponent.emailLabel.addEventListener('click', thisShitComponent.onEmailLabelClick);

      // handle events for password input
      thisShitComponent.password.addEventListener('focus', thisShitComponent.onPasswordFocus);
      thisShitComponent.password.addEventListener('blur', thisShitComponent.onPasswordBlur);
      //passwordLabel.addEventListener('click', onPasswordLabelClick);

      // handle events for password checkbox
      thisShitComponent.showPasswordCheck.addEventListener('change', thisShitComponent.onPasswordToggleChange);
      thisShitComponent.showPasswordCheck.addEventListener('focus', thisShitComponent.onPasswordToggleFocus);
      thisShitComponent.showPasswordCheck.addEventListener('blur', thisShitComponent.onPasswordToggleBlur);
      thisShitComponent.showPasswordCheck.addEventListener('click', thisShitComponent.onPasswordToggleClick);
      thisShitComponent.showPasswordToggle.addEventListener('mouseup', thisShitComponent.onPasswordToggleMouseUp);
      thisShitComponent.showPasswordToggle.addEventListener('mousedown', thisShitComponent.onPasswordToggleMouseDown);

      // move arms to initial positions
      gsap.set(thisShitComponent.armL, { x: -93, y: 220, rotation: 105, transformOrigin: "top left" });
      gsap.set(thisShitComponent.armR, { x: -93, y: 220, rotation: -105, transformOrigin: "top right" });

      // set initial mouth property (fixes positioning bug)
      gsap.set(thisShitComponent.mouth, { transformOrigin: "center center" });

      // activate blinking
      thisShitComponent.startBlinking(5);

      // determine how far email input can go before scrolling occurs
      // will be used as the furthest point avatar will look to the right
      thisShitComponent.emailScrollMax = thisShitComponent.email.scrollWidth;

      // check if we're on mobile/tablet, if so then show password initially
      if (thisShitComponent.isMobileDevice()) {
         thisShitComponent.password.type = "text";
         thisShitComponent.showPasswordCheck.checked = true;
         //gsap.set(thisShitComponent.twoFingers, { transformOrigin: "bottom left", rotation: 30, x: -9, y: -2, ease: Power2.easeInOut });
      }

      // clear the console
      console.clear();
   }

}

var thisShitComponent;
