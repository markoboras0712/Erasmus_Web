<template>
  <div>
    <v-list disabled dense dark>
      <v-list-item v-for="(item, index) in $t('items')" :key="(item, index)" >
        <v-spacer />
        <v-list-item-icon>
          <v-icon>mdi-information-variant</v-icon>
        </v-list-item-icon>

        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  i18n: {
    messages: {
      hr: {
        items: [
          {
            title: 'Razvio Marko Boras'
          },
          {
            title: 'Logo dizajnirao Ivan Stajcer'
          }
        ]
      },
      en: {
        items: [
          {
            title: 'Developed by Marko Boras'
          },
          {
            title: 'Logo designed by Ivan Stajcer'
          }
        ]
      },
      de: {
        items: [
          {
            title: 'Entwickelt von Marko Boras'
          },
          {
            icon: 'mdi-map-marker',
            title: 'Logo von Ivan Stajcer'
          }
        ]
      },
      it: {
        items: [
          {
            title: 'Sviluppato da Marko Boras'
          },
          {
            title: 'Logo disegnato da Ivan Stajcer'
          }
        ]
      },
      sl: {
        items: [
          {
            title: 'Razvil Marko Boras'
          },
          {
            title: 'Logotip oblikoval Ivan Stajcer'
          }
        ]
      },
      cs: {
        items: [
          {
            title: 'Vyvinut Marko Boras'
          },
          {
            title: 'Logo navrhl Ivan Stajcer'
          }
        ]
      }
    }
  }
}
</script>
