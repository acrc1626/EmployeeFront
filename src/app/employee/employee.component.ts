import { Component, OnInit } from "@angular/core";
import { EmployeeService } from '../Service/employee.service';
import { Employee } from "../entities/Employee";

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent implements OnInit {

  value!: string;
  displayedColumns: string[] = ['Id', 'Name Employee', 'Age Employee', 'Profile Image', 'Salary', 'Monthly Salary'];
  lstEmployees: Array<Employee>;
  error: string;

  constructor(private service: EmployeeService) {
    this.lstEmployees = [];
    this.error = "";
  }

  ngOnInit(): void {
    this.getEmployees();
  }


  getEmployees() {
    this.service.getEmployees().subscribe((data: Employee[]) => {
      this.lstEmployees = data;
    });
  }

  getEmployeesId() {    
    const idEmployee = document.getElementById('idEmployee') as HTMLInputElement | null;
    if (idEmployee != null) {
      const value = idEmployee.value;
      if (Number(value) > 0) {
        this.service.getEmployee(Number(value)).subscribe((data: Employee[]) => {
          this.lstEmployees = data
        });
      } else {
        this.getEmployees();
      }
    }

  }

  validateMsj(){
    if (this.lstEmployees.length == 0) {
      this.error = " ERROR  - 29 - Too Many Requests";
    }
  }
}