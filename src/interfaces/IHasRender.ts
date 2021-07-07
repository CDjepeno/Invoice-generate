import { IHasHtmlFormat } from './IHasHtmlFormat';

export interface IHasRender {
  render(docObj: IHasHtmlFormat, docType: string): void;
}