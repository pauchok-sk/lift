import * as functions from "./files/functions.js";

import "../scss/style.scss";
import spoller from "./files/spoller.js";
import burger from "./files/burger.js";
import modal from "./files/modal.js";
import validate from "./files/validate.js";
import mask from "./files/mask.js";
import slider from "./files/slider.js";

functions.mediaAdaptive();
spoller();
burger();
modal();
mask();
validate();
slider();