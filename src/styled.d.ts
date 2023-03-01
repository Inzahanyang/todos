import "styled-components";
import { string } from "yargs";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
  }
}
