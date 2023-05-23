import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../entities/Employee';



@Injectable({
    providedIn: 'root'
})

export class EmployeeService {

    constructor(private http: HttpClient) { }

    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>('https://localhost:7239/GetEmployees');
    }

    getEmployee(id: number): Observable<Employee[]> {
        return this.http.get<Employee[]>('https://localhost:7239/GetEmployeeId/?id=' + id);
        
    }

}