import {Http} from "angular2/http";
import {Headers} from "angular2/http";
import {URLSearchParams} from "angular2/http";
import {Injectable} from "angular2/core";
import {Inject} from "angular2/core";
import {Flug} from "../models/flug";
import {ReplaySubject} from "rxjs/subject/ReplaySubject";
import {OAuthService} from "angular2-oauth2/oauth-service";

@Injectable()
export class FlugService {

    constructor(private http: Http,
                @Inject('BASE_URL') private baseUrl: string,
                private oauthService: OAuthService
                ) {
    }

    public fluege$: ReplaySubject<Flug[]> = new ReplaySubject(1);
    public error: string;


    public findById(id: string) {

        var headers = new Headers();
        headers.set('Accept', 'text/json');

        var search = new URLSearchParams();
        search.set('flugNummer', id);

        var url = this.baseUrl + "/flug";

        return this
                .http
                .get(url, { search, headers })
                .map(response => response.json());
    }


    public save(flug) {

        var headers = new Headers();
        headers.set('Content-Type', 'text/json');

        var url = this.baseUrl + "/flug";

        return this
            .http
            .post(url, JSON.stringify(flug), { headers })
            .map(response => response.text());
    }

    public find(von: string, nach: string): Promise<Flug[]> {

        return new Promise((resolve, reject) => {

            var headers = new Headers();
            headers.set('Accept', 'text/json');
            headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken() );

            var search = new URLSearchParams();
            search.set('abflugort', von);
            search.set('zielort', nach);

            // Ohne Auth. erreichbarer Service
            // var url = this.baseUrl + "/flug";

            // Dieser Service hier verlangt ein Token:
            var url = this.baseUrl + "/SecureFlug";


            return this
                    .http
                    .get(url, { search, headers })
                    .map(response => response.json())
                    .subscribe(
                        (fluege: Flug[]) => {

                            // this.fluege = fluege;
                            this.fluege$.next(fluege);
                            this.error = "";
                            resolve(fluege);
                        },
                        (err) => {
                            console.error(err);
                            this.error = err;
                            reject(err);
                        }
                    );
        });
    }

}