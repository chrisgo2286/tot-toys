import { Routes } from "@angular/router"
import { HomeComponent } from "./home/home.component"
import { ToyDetailComponent } from "./toy-detail/toy-detail.component"
import { SupportComponent } from "./support/support.component"
import { CartComponent } from "./cart/cart.component"
import { ToyOverviewComponent } from "./toy-overview/toy-overview.component"

export const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'toyDetail/:id',
        component: ToyDetailComponent,
        title: 'Toy Detail Page'
    },
    {
        path: 'support',
        component: SupportComponent,
        title: 'Support Page'
    },
    {
        path: 'cart',
        component: CartComponent,
        title: 'Shopping Cart'
    },
    {
        path: 'toyOverview',
        component: ToyOverviewComponent,
        title: 'Toy Overview'
    }
]
