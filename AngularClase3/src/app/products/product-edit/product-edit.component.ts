import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent implements OnInit {
  /* 
  The exclamation mark (`!`) is a TypeScript non-null assertion operator. 
  It tells the TypeScript compiler that the property will definitely be assigned a value at runtime, even though it is not initialized at the point of declaration. 
  This is useful in scenarios where the property is guaranteed to be set later, such as in a lifecycle hook or a method, but TypeScript's strict null checks would otherwise raise an error.
 */
  id!: number;
  /* 
  The question mark (?) makes the property optional, meaning it may or may not have a value. 
  If the property is not provided, it will be `undefined` by default. 
  This is useful for properties that are not mandatory and can be omitted without causing issues in the application.  
  */
  ProductId?: number;
  constructor(private route: ActivatedRoute){

  }

  ngOnInit(){
    //We will get the id from the route, like this
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.ProductId = this.id;
    //Or we can access the parameter like this. We will see it detailed in the next classes
    // this.route.params.subscribe(params => {
    //   this.id = +params['id'];
    //   this.ProductId = this.id;
    // });
  }

}
