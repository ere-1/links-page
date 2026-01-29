import views from "./api/views.js";
import musicPlayer from "./logic/music-player.js";
import loadingAnimate from "./animation/startup-animation.js";

views();
musicPlayer();
loadingAnimate();