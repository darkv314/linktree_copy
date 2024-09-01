import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profile = {
    imgSrc: signal<string>(''),
    firstName: signal<string>(''),
    lastName: signal<string>(''),
    email: signal<string>(''),
  };

  updateValue(
    name: 'firstName' | 'lastName' | 'email' | 'imgSrc',
    value: string
  ) {
    this.profile[name].update(() => value);
  }
}
