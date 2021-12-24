import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDialogModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],

  exports: [
    LayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  providers: [
  ]
})
export class MaterialModule { }
