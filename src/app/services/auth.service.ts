import { Injectable } from '@angular/core';

import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
  
export class AuthService {

  // + regex : 
  // + ^ en début de ligne
  // + \w  [a-zA-Z0-9_]
  // + {6,}  longueur : 6 ou +
  // + $  à la fin de la ligne
  // + g toutes les correspondances de la ligne
  passwordRegex= /^\w{6,}$/g

  constructor() { }

  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(
            () => {
              resolve()
            },
            (error) => {
              reject(error)
            }
          )
      }
    )
  }

  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(
            () => {
              resolve()
            },
            (error) => {
              reject(error)
            }
        )
      }
    )
  }

  signOutUser() {
    firebase.auth().signOut()
  }

}
