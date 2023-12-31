import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {SharedComponentsRouting} from "./shared-components.routing";
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    SidebarComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule.forChild(SharedComponentsRouting),

  ],
  providers: [],
  bootstrap: []
})
export class SharedComponentsModule {
}
