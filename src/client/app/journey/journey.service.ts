import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JourneyService {
    public stopIdServiceUrl = 'https://data.dublinked.ie/cgi-bin/rtpi/busstopinformation';
    public operatorServiceUrl = 'https://data.dublinked.ie/cgi-bin/rtpi/operatorinformation';

    constructor(private http: Http) { }

    /**
     *
     * @param postData
     */
    public getStodIdList(postData: string): Observable<Response> {
        console.log(postData);
        let _url = this.stopIdServiceUrl+postData;
        return this.http.get(_url)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    /**
     *
     */
    public getOperatorDetails(): Observable<Response> {
        return this.http.get(this.operatorServiceUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
