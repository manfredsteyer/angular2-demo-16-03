import {Component} from "angular2/core";
import {OAuthService} from "angular2-oauth2/oauth-service";

@Component({
    templateUrl: 'app/home/home.html'
})
export class Home {

    constructor(private oauthService: OAuthService) {

    }

    info = "Willkommen!";

    login() {
        this.oauthService.initImplicitFlow();
    }

    logout() {
        this.oauthService.logOut();
    }

    get name() {
        var claims = this.oauthService.getIdentityClaims();
        if (!claims) return null;
        return claims.given_name;
    }

}