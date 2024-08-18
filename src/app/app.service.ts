import {effect, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  masterSecret = signal<string>("")
  serviceName = signal<string>("")
  passwordSecret = signal<string>("")
  generatedSecret = signal<string>("")

  useWords = signal<boolean>(false)
  useVersions = signal<boolean>(false)
  wordCount = signal<number>(3)
  charCount = signal<number>(23)

  constructor() {
    this.useWords.set(this.getItemOrDefault('useWords', false))
    this.useVersions.set(this.getItemOrDefault('useVersions', false))
    this.wordCount.set(this.getItemOrDefault('wordCount', 3))
    this.charCount.set(this.getItemOrDefault('charCount', 23))

    effect(() => localStorage.setItem('useWords', JSON.stringify(this.useWords())))
    effect(() => localStorage.setItem('useVersions', JSON.stringify(this.useVersions())))
    effect(() => localStorage.setItem('wordCount', JSON.stringify(this.wordCount())))
    effect(() => localStorage.setItem('charCount', JSON.stringify(this.charCount())))

    effect(() => this.generateSecret());
  }

  private generateSecret() {

  }

  private getItemOrDefault(item: string, alt: any): any {
    const i = localStorage.getItem(item)
    return i ? JSON.parse(i) : alt;
  }

}
