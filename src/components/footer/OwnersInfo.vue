<template>
  <div>
    <v-list disabled dense dark color="blue">
      <v-list-item v-for="(item, index) in $t('items')" :key="(item, index)" justify-space-around>
        <v-list-item-icon>
          <v-icon>{{ icons[index] }}</v-icon>
        </v-list-item-icon>

        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      icons: [
        'mdi-home',
        'mdi-map-marker',
        'mdi-phone',
        'mdi-cellphone-android',
        'mdi-email'
      ]
    }
  },
  i18n: {
    messages: {
      hr: {
        items: [
          {
            title: 'Albert & Gordana Semenčić'
          },
          {
            title: 'Novalja, otok Pag, Hrvatska'
          },
          {
            title: 'goran.semencic@gmail.com'
          }
        ]
      },
      en: {
        items: [
          {
            title: 'Albert & Gordana Semenčić'
          },
          {
            title: 'Novalja, island Pag, Croatia'
          },
          {
            title: 'goran.semencic@gmail.com'
          }
        ]
      },
      de: {
        items: [
          {
            title: 'Albert & Gordana Semenčić'
          },
          {
            title: 'Novalja, Insel Pag, Kroatien'
          },
          {
            title: 'goran.semencic@gmail.com'
          }
        ]
      },
      it: {
        items: [
          {
            title: 'Albert & Gordana Semenčić'
          },
          {
            title: 'Novalja, isola Pag, Croazia'
          },
          {
            title: 'goran.semencic@gmail.com'
          }
        ]
      },
      sl: {
        items: [
          {
            title: 'Albert & Gordana Semenčić'
          },
          {
            title: 'Novalja, otok Pag, Hrvaška'
          },
          {
            title: 'goran.semencic@gmail.com'
          }
        ]
      },
      cs: {
        items: [
          {
            title: 'Albert & Gordana Semenčić'
          },
          {
            title: 'Novalja, ostrov Pag, Chorvatsko'
          },
          {
            title: 'goran.semencic@gmail.com'
          }
        ]
      }
    }
  }
}
</script>
