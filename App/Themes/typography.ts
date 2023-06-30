const base = {
  '400': 'SFProText-Regular',
  '500': 'SFProText-Medium',
  '600': 'SFProText-Semibold',
  '700': 'SFProText-Bold',
  '400t': 'SFProDisplay-Regular',
  '500t': 'SFProDisplay-Medium',
  '700t': 'SFProDisplay-Bold',
};

export default {
  h1: {
    fontFamily: base['700t'],
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: 0.36,
  },
  h2: {
    fontFamily: base['700t'],
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0.36,
  },
  text: {
    fontFamily: base['500t'],
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.2,
  },
  textLarge: {
    fontFamily: base['500t'],
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.25,
  },
  textSmall: {
    fontFamily: base['500t'],
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.2,
  },
  label: {
    fontFamily: base['600'],
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.25,
  },
  button: {
    fontFamily: base['600'],
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.25,
  },
};
