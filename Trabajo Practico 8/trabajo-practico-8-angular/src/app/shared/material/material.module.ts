import { NgModule } from '@angular/core';
// Form Controls
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Navigation
import { MatToolbarModule } from '@angular/material/toolbar';

// Layout
import { MatCardModule } from '@angular/material/card';

// Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Popups & Modals
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

// Data table
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    // Form Controls
    MatFormFieldModule,
    MatInputModule,
    // Navigation
    MatToolbarModule,
    // Layout
    MatCardModule,
    // Buttons & Indicators
    MatButtonModule,
    MatIconModule,
    // Popups & Modals
    MatDialogModule,
    MatTooltipModule,
    // Data table
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ]
})
export class MaterialModule { }
