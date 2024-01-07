import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
   signInWithPopup, GoogleAuthProvider, GithubAuthProvider, OAuthProvider, getAuth, FacebookAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) {}
    
  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  loginWithGithub() {
    return signInWithPopup(this.auth, new GithubAuthProvider());
  }

  loginWithMicrosoft() {
    return signInWithPopup(this.auth, new OAuthProvider('microsoft.com'));
  }

  loginWithFacebook() {
    const auth = getAuth();
    return signInWithPopup(auth, new FacebookAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }

}
