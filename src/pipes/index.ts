import { NgModule } from '@angular/core';
import { NgArrayPipesModule } from './array/index';
import { NgObjectPipesModule } from './object/index';
import { NgStringPipesModule } from './string/index';
import { NgMathPipesModule } from './math/index';
import { NgBooleanPipesModule } from './boolean/index';
import { NgDatePipesModule } from './date/index';

@NgModule({
  exports: [
    NgArrayPipesModule,
    NgStringPipesModule,
    NgMathPipesModule,
    NgBooleanPipesModule,
    NgObjectPipesModule,
    NgDatePipesModule,
  ],
})
export class NgPipesModule {}

export * from './array/index';
export * from './object/index';
export * from './string/index';
export * from './math/index';
export * from './boolean/index';
export * from './date/index';
