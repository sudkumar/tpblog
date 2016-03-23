/**
 * Modals/Dialogs for our application
 */

import angular from "angular";

// import the modal modules
import authmodal from "./authmodal";

export default angular.module("Tourepedia.Modals", [authmodal])
  .name;
