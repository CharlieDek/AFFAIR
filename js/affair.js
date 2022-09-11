const c_BACKGROUND_TEXT = "BECKYGOODMANAFFAIRSHOWFUNNYSEXYGOODMUSICBECKYCOMETOTHESHOWBECKYGOODMANAFFAIRSHOWFUNNYSEXYGOODMUSICBECKYCOMETOTHESHOWBECKYGOODMANAFFAIRSHOWFUNNYSEXYGOODMUSICBECKYCOMETOTHESHOW";
const PACE_INTERVAL = 5;
const c_CLASSES_TO_SHOW = [".A", ".B", ".C", ".D", ".E", ".F", ".G", ".H", ".I", ".J", ".K", ".L", ".M", ".N", ".O", ".P", ".Q", ".R", ".S", ".T", ".U", ".V", ".W", ".X", ".Y", ".Z", ".NON_CHAR"];
const c_CLASS_INTERVALS = [1700, 250, 250, 250, 250, 250, 900, 250, 250, 250, 250, 700, 250, 250, 60, 60, 60, 600, 30, 30, 30, 30, 500, 10, 10, 1200];


function isAlpha(ch) {
  const code = ch.charCodeAt(0);
  return ((code > 64 && code < 91) || // upper alpha (A-Z)
          (code > 96 && code < 123)); // lower alpha (a-z)
}

// Shows characters one by one using class="A" class="B" etc
function showAlphaByAlpha(i) {
  if (i >= c_CLASSES_TO_SHOW.length) {
    return;
  }
  const currClass = c_CLASSES_TO_SHOW[i];
  $(currClass).css('visibility', 'visible');
	setTimeout(function(){
    showAlphaByAlpha(i+1);
  }, c_CLASS_INTERVALS[i]);  
}

function writeCompletionFun(charSpans) {
  $( "#birdman").html(charSpans);
  showAlphaByAlpha(0);
}

/* Convert text from:
   Hey!
 to:
   <span class="character H">H</span>
   <span class="character E">e</span>
   <span class="character Y">y</span>
   <span class="character nonChar">!</span>
*/ 
function spanMyText(str) {
  const allCharSpans = str.split("").map(function(char){
    if (isAlpha(char)) {
      var cls = char.toUpperCase();
    } else {
      var cls = "NON_CHAR";
    }
    return "<span class=\"appearing_char " + cls + "\">" + char + "</span>";
  });
  return allCharSpans.join("");
}

function startBirdman(text) {
  const spanText = spanMyText(text);
  writeCompletionFun(spanText);
}

if ($(window).width() < 600) {

particlesJS('particles-js', { // small window setting
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": true,
          "value_area": 500
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
        "src": "js/img/ring.png",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 50,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.5,
        "direction": "bottom",
        "random": false,
        "straight": true,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 45.377304642527047,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
}  // end small window setting
else { // large window setting

  particlesJS('particles-js', { // small window setting
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": true,
          "value_area": 500
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
        "src": "js/img/ring.png",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 50,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.5,
        "direction": "bottom",
        "random": false,
        "straight": true,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 45.377304642527047,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
}  // end large window


startBirdman(c_BACKGROUND_TEXT);