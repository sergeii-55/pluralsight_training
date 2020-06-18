import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { userRoutes } from './user.routes'
import { FormsModule } from '@angular/forms'
import { ProfileComponent } from './profile.components'
import { LoginComponent } from './login.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [

    ]
})
export class UserModule { }