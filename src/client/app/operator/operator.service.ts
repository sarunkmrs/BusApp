import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OperatorService {
    public routesServiceUrl = 'https://data.dublinked.ie/cgi-bin/rtpi/routelistinformation';
    public operatorServiceUrl = 'https://data.dublinked.ie/cgi-bin/rtpi/operatorinformation';

    constructor(private http: Http) { }

    public getRoutesDetails(postData: string): Observable<Response> {
        console.log(postData);
        let _url = this.routesServiceUrl+postData;
        return this.http.get(_url)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getOperatorDetails(): Observable<Response> {
        console.log('hereeee');
        return this.http.get(this.operatorServiceUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
