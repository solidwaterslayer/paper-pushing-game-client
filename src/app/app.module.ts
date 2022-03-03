import { DragDropModule } from '@angular/cdk/drag-drop'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'


@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, DragDropModule, HttpClientModule]
})
export class AppModule {}
