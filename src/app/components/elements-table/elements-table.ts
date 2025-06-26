//elements-table.ts
import { ChangeDetectionStrategy, model, signal, Component, computed, inject } from '@angular/core';
import { debounce, debounceTime, startWith } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

import { PeriodicElement } from '../../model/elements.model';
import { PeriodicElementStore } from '../../store/element.store';

import { EditDialog } from '../edit-dialog/edit-dialog';

//Angular Materials
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'elements-table',
  imports: [
    MatTableModule, 
    MatIcon,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatFormFieldModule, 
    FormsModule, 
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  templateUrl: './elements-table.html',
  styleUrl: './elements-table.scss'
})
export class ElementsTable {
  //injection of the store periodic elements
  store = inject(PeriodicElementStore);

  //for correctly displaing table in Angular Materials
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol']; //, 'edit'

  //data for the table - initial (without filtering)
  //dataSource = this.store.elements;

  //for the search purpose
  readonly searchField = new FormControl('');

  readonly filterSignal = toSignal(
    this.searchField.valueChanges.pipe(
      startWith(''),
      debounceTime(2000)
    ), { initialValue: '' }
  );

  readonly dataSource = computed(() => {
    const all = this.store.elements();
    const filter = this.filterSignal()?.toLowerCase();

    if(!filter) return all;

    return all.filter( element =>
      Object.values(element).some( value =>
        String(value).toLowerCase().includes(filter)
      )
    )
  });

  //clear the search field
  clearSearchField(): void {
    this.searchField.setValue('');
  }

  //for the dialog purpose
  readonly dialog = inject(MatDialog);

  openEditDialog(row: PeriodicElement, field: keyof PeriodicElement){
    const dialogRef = this.dialog.open(EditDialog, {
      data: {
        value: row[field],
        field
      }
    });
    dialogRef.afterClosed().subscribe(async result =>{
      console.log('The dialog was closed');
      if(result !== undefined) {
        const updated = {...row, [field]: result};
        await this.store.updateElement(updated);
      }
    })
  }
}





