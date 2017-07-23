import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

// 3rd party
import {TranslateModule} from '@ngx-translate/core';

// Directives
import {DIRECTIVES} from '@directives/directives';

// Pipes
import {PIPES} from '@pipes/pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    // 3rd party

  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    // 3rd party
    TranslateModule,

    // Pipes and directives
    ...DIRECTIVES,
    ...PIPES
  ],
  declarations: [

    // Pipes and directives
    ...DIRECTIVES,
    ...PIPES
  ]
})

export class SharedModule {}
