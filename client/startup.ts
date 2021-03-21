import {timeSync} from "./timeSync";
import {EventService} from "./events/EventService";
import {VehicleWebView} from "./cef/vehicle/VehicleWebView";

//EVENT
new EventService()

//CEF
new VehicleWebView();

//SERVICES

//SYNC
const tSync = new timeSync();