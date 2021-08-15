# Steps For Reproduction
```
ng add @ngrx/schematics@latest  

ng g m dashboard --routing
ng g c dashboard/dashboard 

ng add @ngrx/store@latest

ng generate feature dashboard/store/Dashboard -m dashboard/dashboard.module.ts --group  
? Should we generate and wire success and failure actions? Yes
? Do you want to use the create functions? Yes
? What should be the prefix of the action? custom
```
