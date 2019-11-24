<template>
  <v-app>
    <v-content>
      <Calendar/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/Calendar';

export default {
  name: 'App',

  components: {
    Calendar
  },

  data: () => ({
    //
  }),
};
</script>
