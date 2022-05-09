import { createIdentifier } from '@wendellhu/redi'

export class LogService {
    private group(title: string, context: any[], color: string) {
        console.group(
            ` %c${title}`,
            `color: white; font-size: q4px; background: ${color}; padding: 3px`
        )

        context.map((item) => item())
        console.groupEnd()
    }

    private log(context: string, color: string) {
        console.log(
            `%c${context}`,
            `color: white; font-size: q4px; background: ${color}; padding: 3px`
        )
    }

    primary(context: string, color = '#165DFF') {
        this.log(context, color)
    }
    primaryGroup(title: string, context: any[], color = '#165DFF') {
        this.group(title, context, color)
    }

    error(context: string, color = '#F53F3F') {
        this.log(context, color)
    }
    errorGroup(title: string, context: any[], color = '#F53F3F') {
        this.group(title, context, color)
    }
}

export const VDI_LOG = createIdentifier<LogService>('VDI_LOG')
