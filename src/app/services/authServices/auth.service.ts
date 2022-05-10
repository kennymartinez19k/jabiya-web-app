/* eslint-disable max-len */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { apiUrl } from 'src/app/util/constants';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  setUser = new Subject();
  private accountsUnderUser = new BehaviorSubject(0);

  constructor(private httpClient: HttpClient) { }

  signUp(formValues) {
    const httpOptions = {
      // headers: new HttpHeaders({
      //   'Content-Type': 'application/json',
      // }),
      withCredentials: true
    };
    const params: any = { jsonrpc: '2.0', params: formValues };
    return this.httpClient
      .post((localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_AUTH_URL : environment.AUTH_URL) + apiUrl.SIGNUP, params, httpOptions)
      .pipe(
        map((res: any) => {
          console.log('res', res);
          return res;
        })
      );
  }

  addNewAccount(formValues) {
    const httpOptions = {
      withCredentials: true
    };
    const params: any = { jsonrpc: '2.0', params: formValues };
    return this.httpClient
      .post((localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_DETAILS_URL : environment.DETAILS_URL) + apiUrl.ADD_ACCOUNT, params, httpOptions)
      .pipe(
        map((res: any) => {
          console.log('res', res);
          return res;
        })
      );
  }

  login(formValues) {
    const httpOptions = {
      // headers: new HttpHeaders({
      //   'Content-Type': 'application/json',
      // }),
      withCredentials: true
    };
    const params: any = { jsonrpc: '2.0', params: formValues };
    return this.httpClient
      .post((localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_AUTH_URL : environment.AUTH_URL) + apiUrl.LOGIN, params, httpOptions)
      .pipe(
        map((res: any) => {
          console.log('res', res);
          return res;
        })
      );
  }

  forgotPassword(formValues) {
    const httpOptions = { withCredentials: true };
    const params: any = { params: {
      email: formValues.login,
      phone: formValues.phone
    } };
    return this.httpClient
      .post((localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_DETAILS_URL : environment.DETAILS_URL) + apiUrl.FORGOT_PASSWORD , params, httpOptions)
      .pipe(
        map((res: any) => {
          console.log('res', res);
          return res;
        })
      );
  }

  getStates(): Observable<any> {
    const url = (localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_DETAILS_URL : environment.DETAILS_URL)+ apiUrl.STATES;
    return this.httpClient.get(url);
  }

  getCities(stateId: number): Observable<any> {
    const url = (localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_DETAILS_URL : environment.DETAILS_URL)+ apiUrl.CITIES + stateId + '/city';
    return this.httpClient.get(url);
  }

  getSectors(cityId: number): Observable<any> {
    const url = (localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_DETAILS_URL : environment.DETAILS_URL)+ apiUrl.SECTOR + cityId + '/sector';
    return this.httpClient.get(url);
  }

  getClientTypes(): Observable<any> {
    const url = (localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_DETAILS_URL : environment.DETAILS_URL)+ apiUrl.CLIENT_TYPE;
    return this.httpClient.get(url);
  }

  getAllAccountsUnderUser(userId): Observable<any> {
    const httpOptions = {
      withCredentials: true,
    };
    return this.httpClient
      .get(
        (localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_DETAILS_URL : environment.DETAILS_URL)+ apiUrl.GET_ALL_ACCOUNTS + userId + '/accounts',
        httpOptions
      )
      .pipe(
        map((res: any) => {
          console.log('res', res);
          return res;
        })
      );
  }

  switchAccountUnderUser(accountId): Observable<any> {
    const httpOptions = {
      withCredentials: true,
    };
    const params: any = {};
    return this.httpClient
      .post(
        (localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_DETAILS_URL : environment.DETAILS_URL)+ apiUrl.ADD_ACCOUNT + '/' + accountId + '/login', params,
        httpOptions
      )
      .pipe(
        map((res: any) => {
          console.log('res', res);
          return res;
        })
      );
  }

  getAccountsUnderUser() {
    return this.accountsUnderUser;
  }

  updateAccountsUnderUser(accountsUnderUser) {
    this.accountsUnderUser.next(accountsUnderUser);
  }

  editAccount(formValues, id) {
    const httpOptions = {
      withCredentials: true
    };
    const params: any = { params: formValues };
    return this.httpClient
      .patch((localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_DETAILS_URL : environment.DETAILS_URL)+ apiUrl.GET_ALL_ACCOUNTS + id, params, httpOptions)
      .pipe(
        map((res: any) => {
          console.log('res', res);
          return res;
        })
      );
  }

  getSessionInfo() {
    const httpOptions = {
      withCredentials: true,
    };
    return this.httpClient
      .get(
        (localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_AUTH_URL : environment.AUTH_URL) + apiUrl.SESSION_INFO,
        httpOptions
      )
      .pipe(
        map((res: any) => {
          console.log('res', res);
          return res;
        })
      );
  }
}
