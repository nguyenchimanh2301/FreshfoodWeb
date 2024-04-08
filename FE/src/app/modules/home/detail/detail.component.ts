import { Component, OnInit ,OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/service/cartservice';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit , OnDestroy {
  public product_Detail:any
  public id:any
  public date:any;
  public subscription!: Subscription;
  public host = environment.BASE_API;
  listProduct:any;
  constructor(private http:HttpClient,private router:Router,private activatedRoute: ActivatedRoute,private cart:CartService) { }
  
  ngOnInit(): void {
   this.subscription = this.activatedRoute.params.subscribe(params =>{
    this.id = params['id'];
    console.log(this.id);
  })
  this.load();
  this.loadsp();

}
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
  addCart(item:any): void {
    this.cart.addToCart(item);
    alert('Đã thêm vào giở hàng thành công');
    this.remove();
  }
  remove(){
    localStorage.removeItem('id');
  }
  load(){
    let id_lsp:any = JSON.parse(localStorage.getItem('id') || '{}');
    console.log(id_lsp);
    this.http.get('https://localhost:44310/get_cung_loai?id_lsp='+id_lsp.id_loai_sp).subscribe(data => {
      this.listProduct = data;
      console.log(this.listProduct);
    })
  }
  loadsp(){
    this.http.get(this.host+'/get_by_id?id='+this.id).subscribe(res=>{
      this.product_Detail = res;
      localStorage.setItem('id', JSON.stringify(this.product_Detail));
    })
  }
}
