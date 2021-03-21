import {CefService} from "../CefService";
import * as alt from "alt-client";
import {WebView} from "alt-client";

export class VehicleWebView {
    private cefService: CefService;
    private webView: WebView;

    constructor() {
        this.cefService = CefService.getInstance();
        this.register();
    }

    register() {
        this.webView = new alt.WebView('http://core/client/cef/vehicle/index.html');
        this.cefService.registerWebview('vehicle', this.webView);
    }
}