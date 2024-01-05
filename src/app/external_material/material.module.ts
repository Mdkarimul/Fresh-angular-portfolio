import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
const all = [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule
    
];
@NgModule({
    declarations: [],
    imports: [all],
    exports : [all]
  })
  export class AllInOneModule { }
  