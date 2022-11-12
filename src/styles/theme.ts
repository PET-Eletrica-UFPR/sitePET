import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        blue: {
          'pet': '#0000FF'
        }
    },

    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },

    textStyles: {
        h1: {
        fontSize: ['36px', '48px'],
        fontWeight: 'bold'
        }
    },

    styles: {
        global: {
            body: {
                bg: '#E5E5E5',
                color: '#A8A8B3'
            }
        }
    }
})
