/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import icons */
import { faSquarePhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faSquarePhone, faLocationDot);

export { FontAwesomeIcon };
