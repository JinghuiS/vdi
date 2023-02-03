import { Ctor, Many, Optional } from '@wendellhu/redi'
import { CREATED_VUE_APP_EXECUTION } from '..'

export class nullCreatedVueAppExecutionService {}

export class CreatedVueAppExecutionService {
    constructor(
        @Many(CREATED_VUE_APP_EXECUTION) public executionList?: Ctor<any>[]
    ) {}
}
