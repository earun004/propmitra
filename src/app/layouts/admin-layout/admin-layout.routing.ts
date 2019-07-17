import { Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from 'app/auth/auth-guard.service';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { LogoutComponent } from 'app/login/logout.component';
import { PropertyListComponent } from 'app/property/property-list/property-list.component';
import { ReportComponent } from 'app/property/report/report.component';
import { IconsComponent } from 'app/icons/icons.component';
import { VerifyComponent } from 'app/property/verify/verify.component';
import { InactiveComponent } from 'app/property/inactive/inactive.component';
import { RegistrationsComponent } from 'app/customer/registrations/registrations.component';
import { CustomerListComponent } from 'app/customer/customer-list/customer-list.component';
import { SubmitListingComponent } from 'app/property/forms/submit-listing/submit-listing.component';
import { PropertyViewComponent } from 'app/property/property-view/property-view.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'submit-listing/:id', component: SubmitListingComponent, canActivate: [AuthGuard] },
    { path: 'view-property/:id/:type', component: SubmitListingComponent, canActivate: [AuthGuard] },
    { path: 'property-list', component: PropertyListComponent, canActivate: [AuthGuard] },
    { path: 'reports', component: ReportComponent, canActivate: [AuthGuard] },
    { path: 'reports/:name', component: ReportComponent, canActivate: [AuthGuard] },
    { path: 'verify', component: VerifyComponent, canActivate: [AuthGuard] },
    { path: 'inactive', component: InactiveComponent, canActivate: [AuthGuard] },
    { path: 'registrations', component: RegistrationsComponent, canActivate: [AuthGuard] },
    { path: 'customers', component: CustomerListComponent, canActivate: [AuthGuard] },
    { path: 'icons', component: IconsComponent },
    { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] }
    /*{ path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard] },
    { path: 'user-form', component: UserFormComponent, canActivate: [AuthGuard] },
    { path: 'employees', component: EmployeeComponent, canActivate: [AuthGuard] },
    { path: 'vendors', component: VendorComponent, canActivate: [AuthGuard] },
    { path: 'clients', component: ClientComponent, canActivate: [AuthGuard] },
    { path: 'contractors', component: ContractorComponent, canActivate: [AuthGuard] },
    { path: 'table-list', component: TableListComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },*/
    
];
