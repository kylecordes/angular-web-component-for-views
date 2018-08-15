import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Employee } from '../employee';

@Component({
  selector: 'employee-list-table-view',
  templateUrl: './employee-list-table-view.component.html'
})
export class EmployeeListTableViewComponent {
  @Input() list: Employee[];
  @Input() selectedId: number;
  @Output() selectId = new EventEmitter<number>();
}
