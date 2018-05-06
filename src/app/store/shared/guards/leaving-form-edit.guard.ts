import { Injectable, Component } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditableFormComponent } from '../interfaces/editable-form-component';

@Injectable()
export class LeavingFormEditGuard
  implements CanDeactivate<EditableFormComponent> {
  canDeactivate(component: EditableFormComponent): boolean {
    if (component.form.dirty) {
      return confirm('you will loose data...are you sure to proceed?');
    }
    return true;
  }
}
