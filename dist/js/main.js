import { formValidate } from "./modules/formValidate.js";
import { toggleMenu, menuBtn } from "./modules/toggleMenu.js";


menuBtn.addEventListener('click', toggleMenu);

formValidate();