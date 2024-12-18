import * as functions from "./files/functions.js";

import "./inputmask.min.js";
import "../scss/style.scss";
import spoller from "./files/spoller.js";
import burger from "./files/burger.js";
import modal from "./files/modal.js";
import validate from "./files/validate.js";
import mask, { maskToggle } from "./files/mask.js";
import slider from "./files/slider.js";
import selectImage from "./files/select-image.js";
import fancy from "./files/fancy.js";
import map from "./files/map.js";

functions.mediaAdaptive();
spoller();
burger();
modal();
mask();
validate();
slider();
selectImage();
maskToggle();
fancy();
map();