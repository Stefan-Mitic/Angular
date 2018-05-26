import { Injectable } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClientModule) { }

  getUserDetails(username, password){
    // Post these details if user info is correct
    return this.http.post('/api/auth.php',
    {
      username,
      password
    });
  }
}
