import { Component, Injectable, OnInit } from '@angular/core';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import {environment} from '../../../environments/environment';

import {FormControl, FormGroup, Validators} from "@angular/forms";

import { HttpClient } from '@angular/common/http';

import {Router} from "@angular/router";







@Component({

selector: 'app-dashboard-items',

template: `\

<!DOCTYPE html>

<html ng-app>

<head>

<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Add icon library -->

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<meta name="viewport" content="width=device-width, initial-scale=1">

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<style>

#products {

font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;

border-collapse: collapse;

width: 100%;

}



#products td, #products th {

border: 1px solid #ddd;

padding: 8px;

}



#products tr:nth-child(even){background-color: #f2f2f2;}



#products tr:hover {background-color: red;}



#products th {

padding-top: 12px;

padding-bottom: 12px;

text-align: left;

background-color: #4CAF50;

color: white;

}

.btn {

background-color: DodgerBlue;

border: none;

color: white;

padding: 12px 16px;

font-size: 16px;

cursor: pointer;

}



/* Darker background on mouse-over */

.btn:hover {

background-color: RoyalBlue;

}

</style>

</head>

<body>



<table id="products">

<tr>

<th>Name</th>

<th>Price</th>

<th>CreatedAt</th>

<th>UpdatedAt</th>

<th>Seller</th>

<th></th>

<th></th>

<th></th>

</tr>

<tr>

<td><input type="text" id="productName" class="form-control"

formControlName="userNameField" ngModel></td>

<td><input type="text" id="productPrice" class="form-control"

formControlName="userNameField" ngModel></td>

<td></td>

<td></td>

<td></td>

<td><button type="button" class="btn btn-primary" onclick="editProduct()">Edit</button></td>

<td> </td>

<td><button type="button" class="btn btn-primary" onclick="addProduct()">+</button></td>

</tr>

<tr *ngFor="let item of data">

<td>{{item.name}}</td>

<td>{{item.price}}</td>

<td>{{item.createdAt}}</td>

<td>{{item.updatedAt}}</td>

<td>{{item.sellerName}}</td>

<td><button type="button" class="btn btn-primary" (click)="editProduct(item._id)">Edit</button></td>

<td><button type="button" class="btn btn-primary" (click)="deleteProduct(item._id)">-</button></td>

<td> </td>

</tr>

</table>

</body>

</html>`

})

export class ItemsComponent implements OnInit

{

data =[];

constructor(private http: HttpClient,private router: Router){}



ngOnInit()

{

this.http.get('http://localhost:3000/api/product/getProducts').

subscribe(res =>{this.data=res["data"]});

}



deleteProduct(ident:string)

{

var config = {

headers :

{

'Content-Type':'application/json'

}

}

this.http.delete('http://localhost:3000/api/product/deleteProduct/'+ident,config).

subscribe();

window.location.reload();

}



// addProduct()

// {

// var info =

// JSON.stringify({name:document.getElementById("productName").value,

// price:document.getElementById("myText").productPrice})



// var config =

// {

// headers :

// {

// 'Content-Type': 'application/json'

// }

// }

// this.http.post(environment.apiUrl+'/product/createProduct',info, config)

// .subscribe((info:any) => {console.log(info);});

// window.location.reload();

// }






// editProduct(ident:string)

// {

// this.http.patch('http://localhost:3000/api/product/updateProduct/ident').

// subscribe();

// window.location.reload();

// }

}
