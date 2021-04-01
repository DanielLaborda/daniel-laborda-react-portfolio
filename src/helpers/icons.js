import { 
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faCircleNotch, 
    faPlusCircle,
    faPhoneAlt,
    faPaperPlane,
    faMapMarkedAlt,
    faKey
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faCircleNotch, faPlusCircle, faPhoneAlt, faPaperPlane, faMapMarkedAlt, faKey);
}

export default Icons;