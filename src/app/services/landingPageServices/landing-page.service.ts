/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { apiUrl } from 'src/app/util/constants';

@Injectable({
  providedIn: 'root',
})
export class LandingPageService {
  constructor(private httpClient: HttpClient) {}

  getProductCategories() {
    // let headers = { headers:  this.getHeadersToken()};
    const httpOptions = {
      // headers: new HttpHeaders({
      //   'Content-Type': 'application/json',
      // }),
      withCredentials: true,
    };
    return this.httpClient
      .get(
        (localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_DETAILS_URL : environment.DETAILS_URL)+ apiUrl.GET_CATEGORIES + '?page_size=30&limit=30&page=1',
        httpOptions
      )
      .pipe(
        map((res: any) => {
          console.log('res', res);
          return res;
        })
      );
  }

  getSubProductCategories(id) {
    const httpOptions = {
      // headers: new HttpHeaders({
      //   'Content-Type': 'application/json',
      // }),
      withCredentials: true,
    };
    return this.httpClient
      .get(
        (localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_DETAILS_URL : environment.DETAILS_URL)+ apiUrl.GET_CATEGORIES + '?parentId=' + id,
        httpOptions
      )
      .pipe(
        map((res: any) => {
          console.log('res', res);
          return res;
        })
      );
  }

  getProductsByCategories(id) {
    const httpOptions = {
      // headers: new HttpHeaders({
      //   'Content-Type': 'application/json',
      // }),
      withCredentials: true,
    };
    return this.httpClient
      .get(
        (localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_DETAILS_URL : environment.DETAILS_URL)+
          apiUrl.GET_CATEGORIES + '/' +
          id +
          '/product/',
        httpOptions
      )
      .pipe(
        map((res: any) => {
          console.log('products', res);
          res.result.data = res.result.data.products.map((obj) => ({
            ...obj,
            amount: 0,
          }));
          console.log('mapped', res);
          return res;
        })
      );
  }

    getEasyOrder() {
      const httpOptions = {
        withCredentials: true,
      };
      return this.httpClient
        .get(
          (localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_DETAILS_URL : environment.DETAILS_URL)+
            apiUrl.GET_EASY_ORDER + '/?page_size=30&limit=30&page=1',
          httpOptions
        )
        .pipe(
          map((res: any) => {
            console.log('easy order', res);
            // res.result.data.products = res.result.data.products.map((obj) => ({
            //   ...obj,
            //   // eslint-disable-next-line @typescript-eslint/naming-convention
            //   order_easy_qty: 1,
            // }));
            // console.log('mapped', res);
            return res;
          })
        );
   }

   getBanners(type) {
    const httpOptions = {
      withCredentials: true,
    };
    return this.httpClient
      .get(
        (localStorage.getItem(apiUrl.ENVVARIABLE) === 'Development' ? apiUrl.DEV_DETAILS_URL : environment.DETAILS_URL) +
        apiUrl.BANNER + type,
        httpOptions
      )
      .pipe(
        map((res: any) => {
          console.log('banners', res);
          return res;
        })
      );
 }
}
