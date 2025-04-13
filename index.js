import { vTitle } from "./src/vTitle"

export default {
    install(app) {
        app.directive('title', vTitle)  
    }
}