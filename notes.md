# Notes

## How to Create a Feature Module
Angular doc recommands to regroup application features in modules. Each module will declare its routes,
components, services, etc.

To generate a module, run:
```bash
ng generate module dummy -m app --routing
```
- `-m` indicates the declaring module, generally `app`.
- `--routing` creates a routing module, i.e. add a `dummy-routing.module.ts` file.

The command above will genrate a folder named `dummy` within we `src/app` folder with
two files: `dummy.module.ts` and `dummy-routing.module.ts`.

Note that if you have an `app-routing.mdule.ts` file where you declared some routes, you must include
your new module class before the `AppRoutingModule` class so that wildcard routes won't hide
your module routes.

Excerpt from the `AppModule` class.
```js
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SomeModule, // Here...
    AppRoutingModule
  ],
  declarations: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```
