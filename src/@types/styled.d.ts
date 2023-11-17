import { esfaTheme } from '@/styles';
import 'styled-components';

export type ITheme = typeof esfaTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
