import fonts from './fonts';
import colors from './colors';
import {fp, spV} from './normalize';
const TYPOGRAPHY_COLORS: any = {
  BLACK: colors.BASIC.BLACK,
  GREY: colors.GRAYSCALE.GRAY80,
  GREY100: colors.GRAYSCALE.GRAY100,
  GREYLIGHT: colors.BASIC.GREY,
  WHITE: colors.GRAYSCALE.WHITE,
  RED: colors.SUPPORT.SBALERT60,
  GREEN: colors.GREEN.SBGREEN50,
};
const TYPOGRAPHY_STYLES = {
  h1: (color: string) => ({
    fontFamily: fonts.FONT_BLACK_SF_DISPLAY,
    color: TYPOGRAPHY_COLORS[color],
    fontSize: fonts.FONT_SIZE_24,
    lineHeight: fp(30),
  }),
  h2: (color: string) => ({
    fontFamily: fonts.FONT_HEAVY_SF_DISPLAY,
    color: TYPOGRAPHY_COLORS[color],
    fontSize: fonts.FONT_SIZE_XLARGE_20,
    lineHeight: fp(32),
  }),
  h3: (color: string, isBold: boolean) => ({
    fontFamily: !isBold ? fonts.FONT_BOLD_SF_TEXT : fonts.FONT_BLACK_SF_TEXT,
    color: TYPOGRAPHY_COLORS[color],
    fontSize: fonts.FONT_SIZE_LARGE,
    fontWeight: 'bold',
    lineHeight: fp(19),
  }),
  h4: (color: string, textDecorationLine: string) => ({
    fontFamily: fonts.FONT_BOLD_SF_TEXT,
    color: TYPOGRAPHY_COLORS[color],
    fontSize: fonts.FONT_SIZE_MEDIUM_X,
    fontWeight: 'bold',
    lineHeight: fp(17),
    textDecorationLine: textDecorationLine || 'none',
  }),
  h5: (color: string, textAlign?: string) => ({
    fontFamily: fonts.FONT_REGULAR_SF_TEXT,
    color: TYPOGRAPHY_COLORS[color],
    fontSize: fonts.FONT_SIZE_REGULAR,
    fontWeight: 'bold',
    lineHeight: fp(16),
    textAlign: textAlign || 'center',
  }),
  largeBody: (color: string, textAlign: string) => ({
    fontFamily: fonts.FONT_MEDIUM_SF_TEXT,
    color: TYPOGRAPHY_COLORS[color],
    fontSize: fonts.FONT_SIZE_LARGE,
    lineHeight: fp(21),
    textAlign: textAlign || 'left',
  }),
  smallBody: () => ({
    fontFamily: fonts.FONT_SP_PRO_TEXT,
    color: TYPOGRAPHY_COLORS.GREY,
    fontSize: fonts.FONT_SIZE_MEDIUM_X,
    fontWeight: 'normal',
    lineHeight: fp(20),
    fontStyle: 'normal',
  }),
  hyperLink: (color: string) => ({
    fontFamily: fonts.FONT_BOLD_SF_TEXT,
    color: TYPOGRAPHY_COLORS[color] || TYPOGRAPHY_COLORS.GREEN,
    fontSize: fonts.FONT_SIZE_LARGE,
    lineHeight: fp(21),
  }),
  caption: (color: string) => ({
    fontFamily: fonts.FONT_BOLD_SF_TEXT,
    color: TYPOGRAPHY_COLORS[color],
    fontSize: fonts.FONT_SIZE_REGULAR,
    lineHeight: fp(21),
  }),
  captionHyperLink: (color: string, fontSize: number) => ({
    fontFamily: fonts.FONT_BOLD_SF_TEXT,
    color: TYPOGRAPHY_COLORS[color],
    fontSize: fontSize || fonts.FONT_SIZE_REGULAR,
    lineHeight: fp(16),
    textDecorationLine: 'underline',
  }),
  inlineButton: (color: string) => ({
    fontFamily: fonts.FONT_BOLD_SF_TEXT,
    color: TYPOGRAPHY_COLORS[color],
    fontSize: fonts.FONT_SIZE_LARGE,
    lineHeight: fp(24),
    includeFontPadding: false,
  }),
  ctaLabel: (color: string) => ({
    fontFamily: fonts.FONT_BOLD_SF_TEXT,
    color: TYPOGRAPHY_COLORS[color],
    fontSize: fonts.FONT_SIZE_LARGE,
    lineHeight: fp(24),
  }),
  normalBodyTextStyle: (color: string) => ({
    color: TYPOGRAPHY_COLORS[color],
    includeFontPadding: false,
  }),
  alignedViewStyle: (textAlign: string, top: number, bottom: number) => {
    const marginStyles = getMarginStyles(top, bottom);
    switch (textAlign) {
      case 'center':
        return {
          alignItems: 'center',
          justifyContent: 'center',
          ...marginStyles,
        };
      case 'left':
        return {alignItems: 'flex-start', ...marginStyles};
      case 'right':
        return {alignItems: 'flex-end', ...marginStyles};
      default:
        return {};
    }
  },
};
const getMarginStyles = (top: number, bottom: number) => {
  let marginStyle = {};
  if (top) {
    marginStyle = {marginTop: spV(top)};
  }
  if (bottom) {
    marginStyle = {...marginStyle, marginBottom: spV(bottom)};
  }
  return marginStyle;
};

export {TYPOGRAPHY_COLORS, TYPOGRAPHY_STYLES};
