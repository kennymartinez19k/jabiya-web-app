/* eslint-disable max-len */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { apiUrl } from './util/constants';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getOrders(currentWeek: string[]) {
    const url = (localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_DETAILS_URL : environment.DETAILS_URL)+ apiUrl.ORDER;
    let httpParams = new HttpParams();
    httpParams = httpParams.append('from', currentWeek[0]).append('to', currentWeek[1]);
    const httpOptions = {
      withCredentials: true,
      params: httpParams
    };
    return this.httpClient.get(url, httpOptions);
  }

  getOrderDetails(orderId) {
    const url = (localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_DETAILS_URL : environment.DETAILS_URL)+ apiUrl.ORDER;
    const httpOptions = {
      withCredentials: true,
    };
    return this.httpClient.get(url + '/' + orderId, httpOptions);
  }
}
