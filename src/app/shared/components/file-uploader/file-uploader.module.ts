import {NgModule} from '@angular/core';

import {SharedModule} from '@modules/shared.module';
import {FileUploaderComponent} from './file-uploader.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    FileUploaderComponent
  ],
  declarations: [
    FileUploaderComponent
  ]
})

export class FileUploaderModule {}
