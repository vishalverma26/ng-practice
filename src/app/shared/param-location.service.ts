import { HashLocationStrategy } from "@angular/common";
import { Injectable } from "@angular/core";

@Injectable()
export class ParameterHashLocationStrategy extends HashLocationStrategy{
  prepareExternalUrl(internal: string): string {
    // console.log('preparing hash', window.location.search, super.prepareExternalUrl(internal));
    // return window.location.search + super.prepareExternalUrl(internal);
    return this.getBaseHref() + '#' + internal;
  }
}
