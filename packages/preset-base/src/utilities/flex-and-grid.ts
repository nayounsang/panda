import type { UtilityConfig } from '@pandacss/types'

export const flexGrid: UtilityConfig = {
  flexBasis: {
    className: 'flex-b',
    group: 'Flex Layout',
    values(theme) {
      return {
        ...theme('sizes'),
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        full: '100%',
      }
    },
  },
  flex: {
    className: 'flex',
    group: 'Flex Layout',
    values: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
  },
  flexDirection: {
    className: 'flex-d',
    group: 'Flex Layout',
    shorthand: 'flexDir',
  },
  flexGrow: {
    className: 'flex-g',
    group: 'Flex Layout',
  },
  flexShrink: {
    className: 'flex-sh',
    group: 'Flex Layout',
  },

  gridTemplateColumns: {
    className: 'grid-tc',
    group: 'Grid Layout',
    values: {
      '1': 'repeat(1, minmax(0, 1fr))',
      '2': 'repeat(2, minmax(0, 1fr))',
      '3': 'repeat(3, minmax(0, 1fr))',
      '4': 'repeat(4, minmax(0, 1fr))',
      '5': 'repeat(5, minmax(0, 1fr))',
      '6': 'repeat(6, minmax(0, 1fr))',
      '7': 'repeat(7, minmax(0, 1fr))',
      '8': 'repeat(8, minmax(0, 1fr))',
      '9': 'repeat(9, minmax(0, 1fr))',
      '10': 'repeat(10, minmax(0, 1fr))',
      '11': 'repeat(11, minmax(0, 1fr))',
      '12': 'repeat(12, minmax(0, 1fr))',
    },
  },
  gridTemplateRows: {
    className: 'grid-tr',
    group: 'Grid Layout',
    values: {
      '1': 'repeat(1, minmax(0, 1fr))',
      '2': 'repeat(2, minmax(0, 1fr))',
      '3': 'repeat(3, minmax(0, 1fr))',
      '4': 'repeat(4, minmax(0, 1fr))',
      '5': 'repeat(5, minmax(0, 1fr))',
      '6': 'repeat(6, minmax(0, 1fr))',
      '7': 'repeat(7, minmax(0, 1fr))',
      '8': 'repeat(8, minmax(0, 1fr))',
      '9': 'repeat(9, minmax(0, 1fr))',
      '10': 'repeat(10, minmax(0, 1fr))',
      '11': 'repeat(11, minmax(0, 1fr))',
      '12': 'repeat(12, minmax(0, 1fr))',
    },
  },
  gridColumn: {
    className: 'grid-c',
    group: 'Grid Layout',
    values: {
      full: '1 / -1',
      '1': 'span 1 / span 1',
      '2': 'span 2 / span 2',
      '3': 'span 3 / span 3',
      '4': 'span 4 / span 4',
      '5': 'span 5 / span 5',
      '6': 'span 6 / span 6',
      '7': 'span 7 / span 7',
      '8': 'span 8 / span 8',
      '9': 'span 9 / span 9',
      '10': 'span 10 / span 10',
      '11': 'span 11 / span 11',
      '12': 'span 12 / span 12',
      d1: '1',
      d2: '2',
      d3: '3',
      d4: '4',
      d5: '5',
      d6: '6',
      d7: '7',
      d8: '8',
      d9: '9',
      d10: '10',
      d11: '11',
      d12: '12',
    },
  },
  gridRow: {
    className: 'grid-r',
    group: 'Grid Layout',
    values: {
      full: '1 / -1',
      '1': 'span 1 / span 1',
      '2': 'span 2 / span 2',
      '3': 'span 3 / span 3',
      '4': 'span 4 / span 4',
      '5': 'span 5 / span 5',
      '6': 'span 6 / span 6',
      '7': 'span 7 / span 7',
      '8': 'span 8 / span 8',
      '9': 'span 9 / span 9',
      '10': 'span 10 / span 10',
      '11': 'span 11 / span 11',
      '12': 'span 12 / span 12',
      d1: '1',
      d2: '2',
      d3: '3',
      d4: '4',
      d5: '5',
      d6: '6',
      d7: '7',
      d8: '8',
      d9: '9',
      d10: '10',
      d11: '11',
      d12: '12',
    },
  },
  gridColumnStart: {
    className: 'grid-cs',
    group: 'Grid Layout',
  },
  gridColumnEnd: {
    className: 'grid-ce',
    group: 'Grid Layout',
  },
  gridAutoFlow: {
    className: 'grid-af',
    group: 'Grid Layout',
  },
  gridAutoColumns: {
    className: 'grid-ac',
    group: 'Grid Layout',
    values: {
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)',
    },
  },
  gridAutoRows: {
    className: 'grid-ar',
    group: 'Grid Layout',
    values: {
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)',
    },
  },
  gap: {
    className: 'gap',
    group: 'Flex Layout',
    values: 'spacing',
  },
  gridGap: {
    className: 'grid-g',
    group: 'Grid Layout',
    values: 'spacing',
  },
  gridRowGap: {
    className: 'grid-rg',
    group: 'Grid Layout',
    values: 'spacing',
  },
  gridColumnGap: {
    className: 'grid-cg',
    group: 'Grid Layout',
    values: 'spacing',
  },
  rowGap: {
    className: 'rg',
    group: 'Grid Layout',
    values: 'spacing',
  },
  columnGap: {
    className: 'cg',
    group: 'Grid Layout',
    values: 'spacing',
  },
  justifyContent: {
    className: 'jc',
    group: 'Flex Layout',
  },
  alignContent: {
    className: 'ac',
    group: 'Flex Layout',
  },
  alignItems: {
    className: 'ai',
    group: 'Flex Layout',
  },
  alignSelf: {
    className: 'as',
    group: 'Flex Layout',
  },
}
