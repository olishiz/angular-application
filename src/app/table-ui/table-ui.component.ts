import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-table-ui',
  templateUrl: './table-ui.component.html',
  styleUrls: ['./table-ui.component.css']
})
export class TableUiComponent implements OnInit {
  items: any;
  displayedColumns: string[] = ['id', 'name', 'password'];
  dataSource: MatTableDataSource<TableItem>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http: HttpClient) {
    // @ts-ignore
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/submit-form').subscribe((data: any[]) => {
      this.items = data;
      this.dataSource = new MatTableDataSource(this.items);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

interface TableItem {
  id: number;
  name: string;
  password: string;
}
