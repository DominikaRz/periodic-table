import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PeriodicElement } from '../../model/elements.model';


export interface DialogData{
  value: any;
  field: keyof PeriodicElement;
}

@Component({
  selector: 'edit-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  template: `
    <h2 mat-dialog-title>Edit {{data.field}}</h2>
    <mat-dialog-content>
      <mat-form-field>
        <mat-label>{{data.field}}</mat-label>
        <input matInput [(ngModel)]="value" />
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button matButton (click)="onNoClick()">Cancel</button>
      <button matButton [mat-dialog-close]="value" cdkFocusInitial>Save</button>
    </mat-dialog-actions>
  `
})
export class EditDialog {

  readonly dialogRef = inject(MatDialogRef<EditDialog>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  value = this.data.value;

  //when user close dialog box
  onNoClick(): void {
    this.dialogRef.close();
  }

}
