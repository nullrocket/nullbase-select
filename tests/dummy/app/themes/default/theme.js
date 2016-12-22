import COLORS from 'nullbase-theme-service/utils/colors';
export default {
  'nb-select': [ {
    context: 'default',
    'focused-underline-color': '#81C784',
    'underline-color':'#444',
    'focused-label-color':'green',
    'label-color':'#222',
    'error-label-color':"blue",
    'focused-error-label-color':'yellow',
    'text-color':'green',
    'error-text-color':'silver',
    'hint-text-color':'gold'
  }
  ],
  'nb-basic-layout': [
    {
      context: 'default',
      'header-background-color': {
        "standard": COLORS.BLUE_500,

      },
      'right-sidebar-width': "500px",
      'left-sidebar-width': "240px"
    }


  ],
  'nb-button': [
    {
      context: 'default',
      "text-color": {
        "raised-text": COLORS.BLUE_500,
        "flat-text": COLORS.BLUE_500
      }
    },
    {

      context: 'header',
      'background-color': {
        "flat-text": COLORS.BLUE_500,
        "raised-text": COLORS.BLUE_500,
        'flat-icon': COLORS.BLUE_500,
        'raised-icon': COLORS.BLUE_500
      }


    },
    {
      context: 'nested-header',
      'background-color': {
        "flat-text": COLORS.RED_500,
        "raised-text": COLORS.RED_500,
        'flat-icon': COLORS.RED_500,
        'raised-icon': COLORS.RED_500
      }

    },

  ]
};
