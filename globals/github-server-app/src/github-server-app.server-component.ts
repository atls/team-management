import { GH_APP_PRIVATE_KEY } from '@globals/privates'
import { App }                from '@octokit/app'

// по моей логике - этот компонент можно переиспользовать в разных частях приложения.
// мы проводим авторизацию от лица GithubApp один раз при запуске приложения
// и имеем доступ, например, ко всем организациям, в которые добавленно это приложение

// PS авторизация от лица пользователя не дает нам возможности узнать
// за какими организациями нам нужно следить

// но авторизация от лица пользователя нужна для того, чтобы понимать кто производит действия

class GithubServerAppClass {
  constructor() {}

  authenticate() {
    this.app = new App({
      appId: process.env.GH_APP_ID,
      privateKey: GH_APP_PRIVATE_KEY,
      oauth: {
        clientId: process.env.NEXT_PUBLIC_GH_CLIENT_ID as string,
        clientSecret: process.env.NEXT_PUBLIC_GH_CLIENT_SECRET as string,
      },
    })
  }
}

const GithubServerApp = new GithubServerAppClass()
export { GithubServerApp }
