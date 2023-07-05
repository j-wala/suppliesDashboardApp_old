// app.js
const app = createApp({
  data() {
    return {
      supplies: [
        { id: 1, name: 'Pen', quantity: 50 },
        { id: 2, name: 'Notebook', quantity: 20 },
        { id: 3, name: 'Stapler', quantity: 10 },
      ],
    };
  },
  computed: {
    totalSupplies() {
      return this.supplies.length;
    },
    availableSupplies() {
      return this.supplies.filter(supply => supply.quantity > 0).length;
    },
    outOfStockSupplies() {
      return this.supplies.filter(supply => supply.quantity === 0).length;
    },
  },
  mounted() {
    const vuetify = new Vuetify();
    this.app.use(vuetify);
  },
  template: `
    <v-app>
      <v-main>
        <v-container>
          <v-card>
            <v-card-title>
              <h1 class="display-1">Supplies Tracking App Dashboard</h1>
            </v-card-title>
            <v-card-text>
              <h2 class="display-2">Supplies Summary</h2>
              <v-row>
                <v-col cols="6" md="4">
                  <v-card>
                    <v-card-text>
                      <h3 class="display-3">Total Supplies</h3>
                      <p class="subheading">{{ totalSupplies }}</p>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="6" md="4">
                  <v-card>
                    <v-card-text>
                      <h3 class="display-3">Available Supplies</h3>
                      <p class="subheading">{{ availableSupplies }}</p>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="6" md="4">
                  <v-card>
                    <v-card-text>
                      <h3 class="display-3">Out of Stock Supplies</h3>
                      <p class="subheading">{{ outOfStockSupplies }}</p>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <v-card>
            <v-card-title>
              <h2 class="display-2">Supplies List</h2>
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item v-for="supply in supplies" :key="supply.id">
                  <v-list-item-content>
                    <v-list-item-title class="display-1">{{ supply.name }}</v-list-item-title>
                    <v-list-item-subtitle class="subheading">Quantity: {{ supply.quantity }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-container>
      </v-main>
    </v-app>
  `,
});

app.mount('#app');
