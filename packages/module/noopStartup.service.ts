import { APP_INITIALIZER_TYPE } from './moduleToken'

export class NoopStartupService implements APP_INITIALIZER_TYPE {
    startup() {
        return new Promise((resolve, reject) => {
            resolve(true)
        })
    }
}
