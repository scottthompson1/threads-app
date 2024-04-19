import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { environment } from '../environments';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  localStorageKey = 'threads_user'
  constructor(private httpClient: HttpClient) {   }

  createUser(name: string){
    return this.httpClient.post<User>(`${environment.apiBaseUrl}/users`, {
      name,

    })
  }

  saveUserToStorage(user: User){
    localStorage.setItem(this.localStorageKey, JSON.stringify(user));
  }

  getUserFromStorage(){
    const user =
    localStorage.getItem(this.localStorageKey);
    return user ? JSON.parse(user) as User : null
  }
}
