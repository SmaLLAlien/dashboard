(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{IAk5:function(t,o,e){"use strict";e.r(o);var n=e("PCNd"),i=e("tyNb"),r=e("xPyH"),c=e("eIep"),s=e("fXoL"),d=e("lJxs"),a=e("4ypk");let l=(()=>{class t{constructor(t){this.httpService=t,this.prefix="todo.json"}getTodoList(){return this.httpService.get("https://dashboard-70225.firebaseio.com/"+this.prefix).pipe(Object(d.a)(t=>Object.keys(t).map(o=>Object.assign({},t[o],{id:o}))))}deleteTodo(t){return this.httpService.delete(`https://dashboard-70225.firebaseio.com/todo/${t}.json`)}}return t.\u0275fac=function(o){return new(o||t)(s.Sb(a.a))},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac}),t})();var b=e("BhKi"),p=e("ofXK");function h(t,o){if(1&t){const t=s.Pb();s.Ob(0,"div",1),s.Wb("click",(function(){return s.jc(t),s.Yb().scrollToTop()})),s.Nb()}}let g=(()=>{class t{constructor(){this.isScrollToTopVisible=!1,this.minScrollPosition=100}onWindowScroll(){const t=window.pageYOffset;this.isScrollToTopVisible=t>this.minScrollPosition}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s.Db({type:t,selectors:[["app-scroll-to-top"]],hostBindings:function(t,o){1&t&&s.Wb("scroll",(function(){return o.onWindowScroll()}),!1,s.ic)},decls:1,vars:1,consts:[["class","top",3,"click",4,"ngIf"],[1,"top",3,"click"]],template:function(t,o){1&t&&s.mc(0,h,1,0,"div",0),2&t&&s.dc("ngIf",o.isScrollToTopVisible)},directives:[p.k],styles:['.top[_ngcontent-%COMP%]{background:url(ui_background.ac349399045d8f09d442.jpg) no-repeat;background-size:cover;border:1px solid #412817;border-radius:10px 0 0 10px;bottom:20px;box-shadow:0 0 5px 0 rgba(0,0,0,.75);cursor:pointer;height:60px;position:fixed;right:0;width:80px}.top[_ngcontent-%COMP%]:before{background:url(up-arrow.d7addfd07318471dc1df.svg) no-repeat 50%;content:"";display:block;height:100%;width:100%}.top[_ngcontent-%COMP%]:hover{background:linear-gradient(rgba(0,0,0,.15),rgba(0,0,0,.15)),url(ui_background.ac349399045d8f09d442.jpg) no-repeat 50%;background-size:cover}'],changeDetection:0}),t})();function u(t,o){if(1&t&&(s.Ob(0,"p",9),s.oc(1),s.Nb()),2&t){const t=s.Yb();s.zb(1),s.pc(t.todo.description)}}function f(t,o){if(1&t&&(s.Ob(0,"li",12),s.Ob(1,"a"),s.oc(2),s.Nb(),s.Nb()),2&t){const t=o.$implicit,e=s.Yb(2);s.zb(1),s.Ab("href",t,s.kc),s.zb(1),s.pc(e.getHost(t))}}function _(t,o){if(1&t&&(s.Ob(0,"div"),s.oc(1),s.Zb(2,"uppercase"),s.Ob(3,"ul",10),s.mc(4,f,3,2,"li",11),s.Nb(),s.Nb()),2&t){const t=s.Yb();s.zb(1),s.qc(" ",s.ac(2,2,"Links:")," "),s.zb(3),s.dc("ngForOf",t.todo.links)}}let m=(()=>{class t{constructor(){this.isAdmin=!1,this.editing=new s.n,this.deleting=new s.n}getHost(t){return new URL(t).hostname}edit(){this.editing.emit(this.todo.id)}delete(){this.isAdmin?this.deleting.emit(this.todo.id):alert(r.f)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s.Db({type:t,selectors:[["app-todo"]],inputs:{todo:"todo",isAdmin:"isAdmin"},outputs:{editing:"editing",deleting:"deleting"},decls:12,vars:3,consts:[[1,"todo"],[1,"todo__corner","todo__corner-left"],[1,"todo__corner","todo__corner-right"],[1,"todo__content"],[1,"todo__header"],[1,"todo__edit",3,"click"],[1,"todo__delete",3,"click"],["class","todo__description",4,"ngIf"],[4,"ngIf"],[1,"todo__description"],[1,"todo__link"],["class","todo__link-item",4,"ngFor","ngForOf"],[1,"todo__link-item"]],template:function(t,o){1&t&&(s.Ob(0,"div",0),s.Kb(1,"div",1),s.Kb(2,"div",2),s.Ob(3,"div",3),s.Ob(4,"h2",4),s.oc(5),s.Nb(),s.Ob(6,"p",5),s.Wb("click",(function(){return o.edit()})),s.oc(7,"Edit"),s.Nb(),s.Ob(8,"p",6),s.Wb("click",(function(){return o.delete()})),s.oc(9,"Delete"),s.Nb(),s.mc(10,u,2,1,"p",7),s.mc(11,_,5,4,"div",8),s.Nb(),s.Nb()),2&t&&(s.zb(5),s.pc(o.todo.header?o.todo.header:"TODO"),s.zb(5),s.dc("ngIf",o.todo.description),s.zb(1),s.dc("ngIf",o.todo.links))},directives:[p.k,p.j],pipes:[p.n],styles:[".todo[_ngcontent-%COMP%]{background:url(frame.ea8805298e19b68e33d3.svg) no-repeat;background-size:cover;border-radius:5px;box-shadow:0 0 10px 2px rgba(0,0,0,.75);height:316px;position:relative;transition:all .5s;width:100%}.todo[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.todo__edit[_ngcontent-%COMP%]{right:70px}.todo__delete[_ngcontent-%COMP%], .todo__edit[_ngcontent-%COMP%]{cursor:pointer;position:absolute;top:-10px}.todo__delete[_ngcontent-%COMP%]{left:70px}.todo__corner[_ngcontent-%COMP%]{background:transparent radial-gradient(closest-side at 68% 18%,#f5f5f5 0,#d9d9d9 100%) 0 0 no-repeat;border-radius:50%;box-shadow:0 3px 0 rgba(0,0,0,.15);height:20px;position:absolute;width:20px}.todo__corner-left[_ngcontent-%COMP%]{left:20px;top:5px}.todo__corner-right[_ngcontent-%COMP%]{right:20px;top:5px}.todo__content[_ngcontent-%COMP%]{color:#412817;font-family:Lobster;height:100%;overflow-y:auto;padding:0 5px}.todo__header[_ngcontent-%COMP%]{font-family:Lobster;text-align:center;text-shadow:0 5px 6px #d2a56d;text-transform:capitalize;margin:35px 0 0}.todo__description[_ngcontent-%COMP%]{line-height:35px;margin-top:10px}.todo__link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#412817;margin-right:20px}.todo__link-item[_ngcontent-%COMP%]{margin-bottom:15px}"],changeDetection:0}),t})();function v(t,o){if(1&t){const t=s.Pb();s.Ob(0,"div",7),s.Ob(1,"app-todo",8),s.Wb("editing",(function(o){return s.jc(t),s.Yb(3).openEdit(o)}))("deleting",(function(o){return s.jc(t),s.Yb(3).delete(o)})),s.Nb(),s.Nb()}if(2&t){const t=o.$implicit,e=s.Yb(3);s.zb(1),s.dc("isAdmin",e.isAdmin)("todo",t)}}function O(t,o){if(1&t&&(s.Mb(0),s.mc(1,v,2,2,"div",6),s.Lb()),2&t){const t=s.Yb().ngIf;s.zb(1),s.dc("ngForOf",t)}}function k(t,o){if(1&t&&(s.Ob(0,"div",4),s.mc(1,O,2,1,"ng-container",5),s.Nb()),2&t){const t=o.ngIf;s.Yb();const e=s.hc(6);s.zb(1),s.dc("ngIf",t.length)("ngIfElse",e)}}function x(t,o){1&t&&(s.Ob(0,"div",9),s.oc(1," Sorry. We are still loading. "),s.Nb())}function C(t,o){1&t&&(s.Ob(0,"div",9),s.oc(1,' Sorry. There are no todo yet. You can add one by click "Add todo" button '),s.Nb())}let P=(()=>{class t{constructor(t,o,e,n){this.dashboardService=t,this.router=o,this.loginService=e,this.route=n,this.isAdmin=this.loginService.role===r.h.admin}ngOnInit(){this.todos$=this.getTodoList()}getTodoList(){return this.dashboardService.getTodoList()}openEdit(t){this.router.navigate([`${r.e.edit}/${t}`],{relativeTo:this.route})}delete(t){confirm("Are you sure you want to delete")&&(this.todos$=this.dashboardService.deleteTodo(t).pipe(Object(c.a)(()=>this.getTodoList())))}}return t.\u0275fac=function(o){return new(o||t)(s.Jb(l),s.Jb(i.b),s.Jb(b.a),s.Jb(i.a))},t.\u0275cmp=s.Db({type:t,selectors:[["app-dashboard"]],decls:8,vars:4,consts:[[1,"dashboard"],["class","todo",4,"ngIf","ngIfElse"],["loading",""],["noTodos",""],[1,"todo"],[4,"ngIf","ngIfElse"],["class","todo__item",4,"ngFor","ngForOf"],[1,"todo__item"],[3,"isAdmin","todo","editing","deleting"],[1,"dashboard__empty"]],template:function(t,o){if(1&t&&(s.Ob(0,"div",0),s.mc(1,k,2,2,"div",1),s.Zb(2,"async"),s.mc(3,x,2,0,"ng-template",null,2,s.nc),s.mc(5,C,2,0,"ng-template",null,3,s.nc),s.Kb(7,"app-scroll-to-top"),s.Nb()),2&t){const t=s.hc(4);s.zb(1),s.dc("ngIf",s.ac(2,2,o.todos$))("ngIfElse",t)}},directives:[p.k,g,p.j,m],pipes:[p.b],styles:[".dashboard[_ngcontent-%COMP%], .dashboard[_ngcontent-%COMP%]   .todo[_ngcontent-%COMP%]{height:calc(100vh - 100px)}.dashboard[_ngcontent-%COMP%]   .todo[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-around;width:100%}.dashboard[_ngcontent-%COMP%]   .todo__item[_ngcontent-%COMP%]{margin:20px;width:480px}.dashboard[_ngcontent-%COMP%]   .todo__empty[_ngcontent-%COMP%], .dashboard__empty[_ngcontent-%COMP%]{align-items:center;color:#412817;display:flex;font-family:Lobster;font-size:2em;height:100%;justify-content:center;margin-top:-100px;text-shadow:0 5px 6px #d2a56d;width:100%}"],changeDetection:0}),t})();var w=e("LRne"),y=e("JIr8"),M=e("NqCG");let N=(()=>{class t{constructor(t,o,e,n){this.loginService=t,this.tokenService=o,this.httpService=e,this.router=n}canActivate(t,o){return this.loginService.isLoggedSubject.getValue()?this.getRole():this.router.parseUrl(`${r.e.login}`)}getRole(){const t=JSON.parse(this.tokenService.token),o=JSON.stringify({idToken:t});return!!this.loginService.role||this.httpService.post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${r.b}`,o).pipe(Object(d.a)(t=>this.checkRole(t.users[0].email)),Object(y.a)(t=>(this.loginService.isLoggedSubject.next(!1),this.router.navigate([`${r.e.login}`]),Object(w.a)(!1))))}checkRole(t){return this.loginService.role=t.includes(r.a)?r.h.admin:r.h.user,!0}}return t.\u0275fac=function(o){return new(o||t)(s.Sb(b.a),s.Sb(M.a),s.Sb(a.a),s.Sb(i.b))},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var S=e("3Pt+"),z=e("7o/Q");class j{constructor(t,o){this.predicate=t,this.inclusive=o}call(t,o){return o.subscribe(new I(t,this.predicate,this.inclusive))}}class I extends z.a{constructor(t,o,e){super(t),this.predicate=o,this.inclusive=e,this.index=0}_next(t){const o=this.destination;let e;try{e=this.predicate(t,this.index++)}catch(n){return void o.error(n)}this.nextOrComplete(t,e)}nextOrComplete(t,o){const e=this.destination;Boolean(o)?e.next(t):(this.inclusive&&e.next(t),e.complete())}}var A=e("vkgz");let L=(()=>{class t{constructor(t){this.http=t}getTodo(t){return this.http.get(`https://dashboard-70225.firebaseio.com/todo/${t}.json`)}edit(t,o){const e=JSON.stringify(t);return this.http.put(`https://dashboard-70225.firebaseio.com/todo/${o}.json`,e)}save(t){const o=JSON.stringify(t);return this.http.post("https://dashboard-70225.firebaseio.com/todo.json",o)}}return t.\u0275fac=function(o){return new(o||t)(s.Sb(a.a))},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac}),t})();var F=e("mrGz");const T=["*"];let D=(()=>{class t{constructor(){this.isDisable=!1,this.clicked=new s.n}onClick(){this.clicked.emit(!0)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s.Db({type:t,selectors:[["app-button"]],inputs:{isDisable:"isDisable"},outputs:{clicked:"clicked"},ngContentSelectors:T,decls:3,vars:1,consts:[[1,"button"],["type","button",1,"button__button",3,"disabled","click"]],template:function(t,o){1&t&&(s.cc(),s.Ob(0,"div",0),s.Ob(1,"button",1),s.Wb("click",(function(){return o.onClick()})),s.bc(2),s.Nb(),s.Nb()),2&t&&(s.zb(1),s.dc("disabled",o.isDisable))},styles:[".button[_ngcontent-%COMP%]{background:url(ui_background.ac349399045d8f09d442.jpg) no-repeat;background-size:cover;border-bottom:1px solid rgba(203,155,96,.87);border-radius:10px;height:100%;max-height:50px;overflow:hidden;position:relative;width:100%}.button__button[_ngcontent-%COMP%]{background:transparent;background:url(ui_background.ac349399045d8f09d442.jpg) no-repeat;border:1px solid rgba(203,155,96,.87);border-bottom:0;border-radius:10px;box-shadow:0 14px 5px 0 rgba(0,0,0,.25);cursor:pointer;height:95.235294117%;outline:none;width:100%}.button__button[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.button__button[_ngcontent-%COMP%]:active{background:linear-gradient(rgba(0,0,0,.15),rgba(0,0,0,.15));box-shadow:0 14px 5px 0 rgba(0,0,0,.35),inset 0 0 2px 0 rgba(0,0,0,.55);height:100%}"],changeDetection:0}),t})();function J(t,o){1&t&&(s.Ob(0,"h2"),s.oc(1,"create new todo"),s.Nb())}function $(t,o){1&t&&(s.Ob(0,"h2"),s.oc(1,"edit todo"),s.Nb())}function E(t,o){1&t&&s.Kb(0,"input",20),2&t&&s.dc("formControlName",o.index)}function Y(t,o){if(1&t){const t=s.Pb();s.Ob(0,"app-button",12),s.Wb("clicked",(function(){return s.jc(t),s.Yb().save()})),s.oc(1,"Save"),s.Nb()}if(2&t){const t=s.Yb();s.dc("isDisable",!t.isValueChanged||t.todoForm.invalid)}}function W(t,o){if(1&t){const t=s.Pb();s.Ob(0,"app-button",12),s.Wb("clicked",(function(){return s.jc(t),s.Yb().edit()})),s.oc(1,"Edit"),s.Nb()}if(2&t){const t=s.Yb();s.dc("isDisable",!t.isValueChanged||t.todoForm.invalid)}}const K=function(t){return{"form__input--error":t}};let V=(()=>{class t{constructor(t,o,e,n,i){this.fb=t,this.router=o,this.route=e,this.loginService=n,this.editorService=i,this.isValueChanged=!1,this.isEdit=!1,this.isAdmin=this.loginService.role===r.h.admin,this.isAlive=!0}ngOnInit(){this.todoForm=this.formInit(),this.initSubscription(),this.id=this.route.snapshot.params.id,this.id&&(this.isEdit=!0,this.editorService.getTodo(this.id).subscribe(t=>{this.todo=t,this.todoForm.patchValue(this.todo),this.createLinksArray(this.todo.links)}))}formInit(){return this.fb.group({header:[null,[S.i.required,S.i.maxLength(50),S.i.minLength(5)]],description:[null,[S.i.maxLength(255)]],links:this.createLinksArray([])})}createLinksArray(t){return t&&t.length&&t.forEach(t=>{this.links.push(this.fb.control([`${t}`]))}),this.fb.array([])}initSubscription(){this.todoForm.valueChanges.pipe(function(t,o=!1){return e=>e.lift(new j(t,o))}(()=>this.isAlive)).subscribe(()=>this.isValueChanged=!0)}get links(){return this.todoForm.get("links")}get header(){return this.todoForm.get("header")}get description(){return this.todoForm.get("description")}edit(){this.todoForm.invalid||(this.isAdmin?this.editorService.edit(this.todoForm.value,this.id).pipe(Object(A.a)(()=>this.router.navigate([r.e.dashboard]))).subscribe():alert(r.f))}save(){this.todoForm.invalid||(this.isAdmin?this.editorService.save(this.todoForm.value).pipe(Object(A.a)(()=>this.router.navigate([r.e.dashboard]))).subscribe():alert(r.f))}addLink(){this.links.push(this.fb.control(""))}removeLink(){this.links.removeAt(this.links.length-1)}cancel(){this.router.navigate([r.e.dashboard])}ngOnDestroy(){this.isAlive=!1}}return t.\u0275fac=function(o){return new(o||t)(s.Jb(S.c),s.Jb(i.b),s.Jb(i.a),s.Jb(b.a),s.Jb(L))},t.\u0275cmp=s.Db({type:t,selectors:[["app-editor"]],decls:30,vars:17,consts:[[1,"form",3,"formGroup"],[4,"ngIf"],[1,"form__header"],["for","header",1,"form__label"],["type","text","formControlName","header","placeholder","header","id","header",1,"form__input",3,"ngClass"],[1,"form__header-errors"],[3,"control","controlName"],[1,"form__description"],["for","description",1,"form__label"],["name","description","formControlName","description","id","description","placeholder","description",1,"form__input","form__area",3,"ngClass"],[1,"form__link-controls"],[3,"clicked"],[3,"isDisable","clicked"],["formArrayName","links",1,"form__link"],["for","link",1,"form__label"],["type","url","id","link","placeholder","link","class","form__input",3,"formControlName",4,"ngFor","ngForOf"],[1,"form__controls"],[1,"form__save"],[3,"isDisable","clicked",4,"ngIf"],[1,"form__cancel"],["type","url","id","link","placeholder","link",1,"form__input",3,"formControlName"]],template:function(t,o){1&t&&(s.Ob(0,"form",0),s.mc(1,J,2,0,"h2",1),s.mc(2,$,2,0,"h2",1),s.Ob(3,"div",2),s.Ob(4,"label",3),s.oc(5,"Header:"),s.Nb(),s.Kb(6,"input",4),s.Nb(),s.Ob(7,"div",5),s.Kb(8,"app-error-message",6),s.Nb(),s.Ob(9,"div",7),s.Ob(10,"label",8),s.oc(11,"Description:"),s.Nb(),s.Kb(12,"textarea",9),s.Nb(),s.Kb(13,"app-error-message",6),s.Ob(14,"div",10),s.Ob(15,"app-button",11),s.Wb("clicked",(function(){return o.addLink()})),s.oc(16,"Add link"),s.Nb(),s.Ob(17,"app-button",12),s.Wb("clicked",(function(){return o.removeLink()})),s.oc(18,"Remove link"),s.Nb(),s.Nb(),s.Ob(19,"div",13),s.Ob(20,"label",14),s.oc(21,"Link:"),s.Nb(),s.mc(22,E,1,1,"input",15),s.Nb(),s.Ob(23,"div",16),s.Ob(24,"div",17),s.mc(25,Y,2,1,"app-button",18),s.mc(26,W,2,1,"app-button",18),s.Nb(),s.Ob(27,"div",19),s.Ob(28,"app-button",11),s.Wb("clicked",(function(){return o.cancel()})),s.oc(29,"Cancel"),s.Nb(),s.Nb(),s.Nb(),s.Nb()),2&t&&(s.dc("formGroup",o.todoForm),s.zb(1),s.dc("ngIf",!o.isEdit),s.zb(1),s.dc("ngIf",o.isEdit),s.zb(4),s.dc("ngClass",s.fc(13,K,o.header.invalid&&o.header.touched)),s.zb(2),s.dc("control",o.header)("controlName","Header"),s.zb(4),s.dc("ngClass",s.fc(15,K,o.description.invalid&&o.description.touched)),s.zb(1),s.dc("control",o.description)("controlName","Description"),s.zb(4),s.dc("isDisable",!o.links.length),s.zb(5),s.dc("ngForOf",o.links.controls),s.zb(3),s.dc("ngIf",!o.isEdit),s.zb(1),s.dc("ngIf",o.isEdit))},directives:[S.j,S.g,S.e,p.k,S.a,S.f,S.d,p.i,F.a,D,S.b,p.j],styles:[".form[_ngcontent-%COMP%]{align-items:center;color:#412817;display:flex;flex-direction:column;font-family:Lobster;font-size:1.2em;justify-content:center;margin:0 auto;box-sizing:border-box}.form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-transform:uppercase}.form__description[_ngcontent-%COMP%], .form__header[_ngcontent-%COMP%], .form__link[_ngcontent-%COMP%]{margin-bottom:20px;width:50%;box-sizing:border-box}.form__label[_ngcontent-%COMP%]{display:block;margin-bottom:10px}.form__input[_ngcontent-%COMP%]{background:url(ui_background.ac349399045d8f09d442.jpg);border:0;border-radius:5px;box-shadow:inset 0 0 5px 0 rgba(0,0,0,.75);box-sizing:border-box;font-size:1.2em;margin-bottom:10px;min-width:440px;outline:none;padding:10px;resize:vertical;width:100%}.form__input--error[_ngcontent-%COMP%]{box-shadow:inset 0 0 6px 6px rgba(255,0,0,.2)}.form__area[_ngcontent-%COMP%]{height:200px}.form__link-controls[_ngcontent-%COMP%]{display:flex;height:30px;justify-content:center;width:50%}.form__link-controls[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]{margin-right:20px;width:30%}.form__controls[_ngcontent-%COMP%]{display:flex;height:50px;justify-content:space-around;width:50%}.form__cancel[_ngcontent-%COMP%], .form__save[_ngcontent-%COMP%]{width:30%}.form[_ngcontent-%COMP%]   app-error-message[_ngcontent-%COMP%]{display:block}@media (max-width:800px){.form[_ngcontent-%COMP%]{padding:0 20px;box-sizing:border-box}.form__description[_ngcontent-%COMP%], .form__header[_ngcontent-%COMP%], .form__link[_ngcontent-%COMP%]{margin-bottom:20px;width:100%}.form__cancel[_ngcontent-%COMP%], .form__link-controls[_ngcontent-%COMP%], .form__save[_ngcontent-%COMP%]{width:90%}}"]}),t})();const H=[{path:"",component:P,canActivate:[N]},{path:`${r.e.new}`,component:V,canActivate:[N]},{path:`${r.e.edit}/:id`,component:V,canActivate:[N]}];let R=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(o){return new(o||t)},imports:[[i.e.forChild(H)],i.e]}),t})();e.d(o,"DashboardModule",(function(){return G}));let G=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(o){return new(o||t)},providers:[l,L],imports:[[p.c,n.a,R,S.h]]}),t})()}}]);