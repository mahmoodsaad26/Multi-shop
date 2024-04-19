"use strict";(self.webpackChunkmulti_shop=self.webpackChunkmulti_shop||[]).push([[165],{5165:(I,_,r)=>{r.r(_),r.d(_,{ProductDetailsComponent:()=>x});var c=r(6814),l=r(756),t=r(4769),d=r(1120),u=r(1132),p=r(6286),h=r(2425),g=r(8806);function m(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"i",4),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.addProductToWishlist(s.productId))}),t.qZA()}}function v(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"i",5),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.removeProduct(s.productId))}),t.qZA()}}function D(o,a){if(1&o&&t._UZ(0,"img",19),2&o){const e=t.oxw().$implicit,i=t.oxw(2);t.Q6J("src",e,t.LSH)("alt",i.productDetails.title)("title",i.productDetails.title)}}function f(o,a){1&o&&(t.ynx(0),t.YNc(1,D,1,3,"ng-template",18),t.BQk())}function T(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",6)(1,"div",7)(2,"owl-carousel-o",8),t.YNc(3,f,2,0,"ng-container",9),t.qZA()(),t.TgZ(4,"div",10)(5,"div")(6,"h2",11),t._uU(7),t.qZA(),t.TgZ(8,"p",12),t._uU(9),t.qZA(),t.TgZ(10,"span",13),t._uU(11),t.qZA(),t.TgZ(12,"div",14)(13,"span"),t._uU(14),t.ALo(15,"currency"),t.qZA(),t.TgZ(16,"span"),t._uU(17),t._UZ(18,"i",15),t.qZA()(),t.TgZ(19,"button",16,17),t.NdJ("click",function(){t.CHM(e);const s=t.MAs(20),n=t.oxw();return t.KtG(n.addProductToCart(n.productDetails._id,s))}),t._uU(21,"+Add to cart"),t.qZA()()()()}if(2&o){const e=t.oxw();t.xp6(2),t.Q6J("options",e.productDetailsOptions),t.xp6(1),t.Q6J("ngForOf",e.productDetails.images),t.xp6(4),t.Oqu(e.productDetails.title),t.xp6(2),t.Oqu(e.productDetails.description),t.xp6(2),t.Oqu(e.productDetails.category.name),t.xp6(3),t.Oqu(t.xi3(15,7,e.productDetails.price,"EGP ")),t.xp6(3),t.hij("",e.productDetails.ratingsAverage," ")}}let x=(()=>{class o{constructor(e,i,s,n,P,C){this._ActivatedRoute=e,this._ProductsService=i,this._Renderer2=s,this._CartService=n,this._ToastrService=P,this._WishListService=C,this.productId="",this.prodIdWishList="",this.productDetails=null,this.wishlistData=[],this.productDetailsOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!0,navSpeed:700,items:1,nav:!1}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:e=>{this.productId=e.get("id")}}),this._ProductsService.getSpecificProduct(this.productId).subscribe({next:e=>{this.productDetails=e.data,console.log(this.productDetails)}})}addProductToCart(e,i){this._Renderer2.setAttribute(i,"disabled","true"),this._CartService.addToCart(e).subscribe({next:s=>{this._Renderer2.removeAttribute(i,"disabled"),this._ToastrService.success(s.message),this._CartService.cartItemsCount.next(s.numOfCartItems),console.log(s)},error:s=>{this._Renderer2.removeAttribute(i,"disabled")}})}addProductToWishlist(e){this._WishListService.addToWishlist(e).subscribe({next:i=>{this.wishlistData=i.data,this._ToastrService.success(i.message),this._WishListService.count.next(i.data.length),console.log(i)},error:i=>{this._ToastrService.error("error")}})}removeProduct(e){this._WishListService.removeFromWishlist(e).subscribe({next:i=>{this.wishlistData=i.data,this._ToastrService.success(i.message),this._WishListService.count.next(i.data.length)},error:i=>{this._ToastrService.error("error")}})}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(d.gz),t.Y36(u.s),t.Y36(t.Qsj),t.Y36(p.N),t.Y36(h._W),t.Y36(g.i))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-details"]],standalone:!0,features:[t.jDz],decls:4,vars:3,consts:[[1,"w-75","mx-auto","my-5","rounded","shadow","p-4","position-relative"],["role","button","class","fa-regular fa-heart  wishIcon",3,"click",4,"ngIf"],["role","button","class","fa-solid fa-heart text-danger wishIcon  ",3,"click",4,"ngIf"],["class","row align-items-center",4,"ngIf"],["role","button",1,"fa-regular","fa-heart","wishIcon",3,"click"],["role","button",1,"fa-solid","fa-heart","text-danger","wishIcon",3,"click"],[1,"row","align-items-center"],[1,"col-md-3"],[3,"options"],[4,"ngFor","ngForOf"],[1,"col-md-9"],[1,"h5"],[1,"text-muted"],[1,"category-color"],[1,"d-flex","justify-content-between"],[1,"fas","fa-star","rating-color"],[1,"main-btn","w-100","mb-2",3,"click"],["addBtn",""],["carouselSlide",""],[1,"w-100",3,"src","alt","title"]],template:function(i,s){1&i&&(t.TgZ(0,"section",0),t.YNc(1,m,1,0,"i",1),t.YNc(2,v,1,0,"i",2),t.YNc(3,T,22,10,"div",3),t.qZA()),2&i&&(t.xp6(1),t.Q6J("ngIf",!s.wishlistData.includes(s.productId)),t.xp6(1),t.Q6J("ngIf",s.wishlistData.includes(s.productId)),t.xp6(1),t.Q6J("ngIf",s.productDetails))},dependencies:[c.ez,c.sg,c.O5,c.H9,l.bB,l.Fy,l.Mp],styles:[".wishIcon[_ngcontent-%COMP%]{position:absolute;top:10%;right:10%;font-size:2rem}"]})}return o})()}}]);