import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  api = 'http://dummy.restapiexample.com/api/v1/employees';
  // zone.js:2680 GET http://dummy.restapiexample.com/api/v1/employees 429 (Too Many Requests);
  // i often get error when I catch the data from online api, i have to wait sometime, so i used the local data
  employees: any;

  isShown: any;

  //for ngmodel
  name: any;
  dc: any;
  paymentType: any;
  expired: any;

  unit: any;
  units: any;

  //for ngmodel
  price: any;
  product: any;

  quantity: any;

  products = [];

  employeesData = [
    {
      id: 1,
      employee_name: 'Tiger Nixon',
      employee_salary: 320800,
      employee_age: 61,
      profile_image: '',
    },
    {
      id: 2,
      employee_name: 'Garrett Winters',
      employee_salary: 170750,
      employee_age: 63,
      profile_image: '',
    },
    {
      id: 3,
      employee_name: 'Ashton Cox',
      employee_salary: 86000,
      employee_age: 66,
      profile_image: '',
    },
    {
      id: 4,
      employee_name: 'Cedric Kelly',
      employee_salary: 433060,
      employee_age: 22,
      profile_image: '',
    },
    {
      id: 5,
      employee_name: 'Airi Satou',
      employee_salary: 162700,
      employee_age: 33,
      profile_image: '',
    },
    {
      id: 6,
      employee_name: 'Brielle Williamson',
      employee_salary: 372000,
      employee_age: 61,
      profile_image: '',
    },
    {
      id: 7,
      employee_name: 'Herrod Chandler',
      employee_salary: 137500,
      employee_age: 59,
      profile_image: '',
    },
    {
      id: 8,
      employee_name: 'Rhona Davidson',
      employee_salary: 327900,
      employee_age: 55,
      profile_image: '',
    },
    {
      id: 9,
      employee_name: 'Colleen Hurst',
      employee_salary: 205500,
      employee_age: 39,
      profile_image: '',
    },
    {
      id: 10,
      employee_name: 'Sonya Frost',
      employee_salary: 103600,
      employee_age: 23,
      profile_image: '',
    },
    {
      id: 11,
      employee_name: 'Jena Gaines',
      employee_salary: 90560,
      employee_age: 30,
      profile_image: '',
    },
    {
      id: 12,
      employee_name: 'Quinn Flynn',
      employee_salary: 342000,
      employee_age: 22,
      profile_image: '',
    },
    {
      id: 13,
      employee_name: 'Charde Marshall',
      employee_salary: 470600,
      employee_age: 36,
      profile_image: '',
    },
    {
      id: 14,
      employee_name: 'Haley Kennedy',
      employee_salary: 313500,
      employee_age: 43,
      profile_image: '',
    },
    {
      id: 15,
      employee_name: 'Tatyana Fitzpatrick',
      employee_salary: 385750,
      employee_age: 19,
      profile_image: '',
    },
    {
      id: 16,
      employee_name: 'Michael Silva',
      employee_salary: 198500,
      employee_age: 66,
      profile_image: '',
    },
    {
      id: 17,
      employee_name: 'Paul Byrd',
      employee_salary: 725000,
      employee_age: 64,
      profile_image: '',
    },
    {
      id: 18,
      employee_name: 'Gloria Little',
      employee_salary: 237500,
      employee_age: 59,
      profile_image: '',
    },
    {
      id: 19,
      employee_name: 'Bradley Greer',
      employee_salary: 132000,
      employee_age: 41,
      profile_image: '',
    },
    {
      id: 20,
      employee_name: 'Dai Rios',
      employee_salary: 217500,
      employee_age: 35,
      profile_image: '',
    },
    {
      id: 21,
      employee_name: 'Jenette Caldwell',
      employee_salary: 345000,
      employee_age: 30,
      profile_image: '',
    },
    {
      id: 22,
      employee_name: 'Yuri Berry',
      employee_salary: 675000,
      employee_age: 40,
      profile_image: '',
    },
    {
      id: 23,
      employee_name: 'Caesar Vance',
      employee_salary: 106450,
      employee_age: 21,
      profile_image: '',
    },
    {
      id: 24,
      employee_name: 'Doris Wilder',
      employee_salary: 85600,
      employee_age: 23,
      profile_image: '',
    },
  ];

  detailForm = this.fb.group({
    name: ['', Validators.required],
    dc: ['', Validators.required],
    paymentType: ['', Validators.required],
    expired: ['', Validators.required],
    notes: [''],
    products: this.fb.group({
      product: ['', Validators.required],
      unit: ['', Validators.required],
      quantity: [],
      price: [],
      totalPrice: [],
    }),
  });

  paymentTypes = [
    { name: 'Cash H+1' },
    { name: 'Cash H+3' },
    { name: 'Cash H+7' },
    { name: 'Transfer H+1' },
    { name: 'Transfer H+3' },
    { name: 'Transfer H+7' },
  ];

  productList = [
    {
      name: 'Greenfields Full Cream Milk 1L',
      unit: [
        {
          name: 'Karton',
          price: 400000,
        },
        {
          name: 'Pak',
          price: 40000,
        },
        {
          name: 'Pcs',
          price: 4000,
        },
      ],
    },
    {
      name: 'Morning Dew Milk',
      unit: [
        {
          name: 'Karton',
          price: 500000,
        },
        {
          name: 'Pak',
          price: 50000,
        },
        {
          name: 'Pcs',
          price: 5000,
        },
      ],
    },
    {
      name: 'Le Minerale 600ml',
      unit: [
        {
          name: 'Karton',
          price: 200000,
        },
        {
          name: 'Pak',
          price: 20000,
        },
        {
          name: 'Pcs',
          price: 2000,
        },
      ],
    },
  ];

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getData();
    this.getProductList();
    this.isShown = false;
  }

  getData() {
    setTimeout(() => {
      return this.http.get<any>(`${this.api}`).subscribe((data) => {
        this.employees = data;
        console.log(this.employees, 'this is data');
      });
    }, 3000);
  }

  getProductList() {
    console.log(this.productList, 'ini console product list');
    const data = this.productList.map((e) => e.unit);
    this.unit = data;
    console.log(this.unit, 'ini console unit');
    for (let i = 0; i < this.unit.length; i++) {
      console.log(this.unit[i], 'ini detail unit');
      this.units = this.unit[i];
    }
    // if(this.units.name === 'Le Minerale 600ml'){
    //   console.log(this.units[2].price,'ini console price 1');
    // }
  }

  toggleShow() {
    this.isShown = !this.isShown;
  }

  onSubmit() {
    console.log(this.detailForm.value);
  }

  reloadCurrentPage() {
    window.location.reload();
  }
}
