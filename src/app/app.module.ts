import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';

import { ThemeModule } from '../../theme/theme.module';
import { overrideComponents } from '../../theme/override-components';

let genericComponents = [AppComponent, BoxComponent];

genericComponents = genericComponents.filter(component => {
  return !overrideComponents.includes(component.name);
});

@NgModule({
  declarations: genericComponents,
  imports: [BrowserModule, ThemeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
