import { Injectable } from "@angular/core";

// although no service is injected here, 
// it is good practice to add

// Instead of adding a service class to the providers[]  array in AppModule , you can set the following config in @Injectable() :

// @Injectable({providedIn: 'root'})
// export class MyService { }

// This is exactly the same as:
// export class MyService { }
 
// @NgModule({
//     ...
//     providers: [MyService]
// })
// export class AppModule { ... }

// Using this new syntax is completely optional, the traditional syntax (using providers[] ) will still work. 
// The "new syntax" does offer one advantage though: Services can be loaded lazily by Angular (behind the scenes) 
// and redundant code can be removed automatically. 
// This can lead to a better performance and loading speed - though this really only kicks in for bigger services and apps in general.
@Injectable()
export class LoggingService {

    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}