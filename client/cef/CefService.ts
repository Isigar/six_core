import {Player, Vehicle, WebView} from "alt-client";
import alt from "alt-client";
import game from "natives";

export class CefService {
    private static instance: CefService;
    private webViews: { [key: string]: WebView } = {};

    public static getInstance(): CefService {
        if (!CefService.instance) {
            CefService.instance = new CefService();
        }
        return CefService.instance;
    }

    private constructor() {}

    registerWebview(name: string, webView: WebView): boolean {
        if (this.webViews[name] !== undefined) {
            return false;
        }

        this.webViews[name] = webView;
        return true;
    }

    getWebView(name: string): null|WebView {
        return this.webViews[name];
    }
}