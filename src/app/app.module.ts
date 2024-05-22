import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";

import { LibrariesComponent } from "./components/libraries/libraries.component";
import { BookFormComponent } from "./components/book-form/book-form.component";
import { LibraryDetailComponent } from "./components/library-detail/library-detail.component";
import { LoginComponent } from "./components/login/login.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { BookStoreComponent } from "./components/book-store/book-store.component";

const routes: Routes = [
	{ path: "login", component: LoginComponent },
	{ path: "libraries", component: LibrariesComponent },

	{ path: "libraries/:id", component: LibraryDetailComponent },
	{ path: "add-book", component: BookFormComponent },
	{ path: "book", component: BookStoreComponent },
	{ path: "", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule.forRoot(routes),
		LibrariesComponent,
		BookFormComponent,
		LoginComponent,
		BookStoreComponent,
	],
	declarations: [AppComponent, TopBarComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}
