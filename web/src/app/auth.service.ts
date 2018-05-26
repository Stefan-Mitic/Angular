import { HttpClientModule } from "@angular/common/http";
import { Injectable } from '@angular/core';

interface myData {
  success: boolean,
  message: string
}

interface registerResponse {
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(username, password){
    // Post these details if user info is correct
    return this.http.post('/api/auth.php',
    {
      username,
      password
    });
  }

  registerUser(username, password) {
    return this.http.post<registerResponse>('/api/register', {
      username,
      password
    })
  }
}
