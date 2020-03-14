<template>
  <div>
    <v-card class="mx-auto" max-width="1920" outlined flat tile>
      <v-card-text>
        <div>Word of the Day</div>
        <div class="card">
          <span class="display-1 text--primary clea">be•nev•o•lent</span>
          <span class="spanleft">
            <img src="~assets/images/common/return.svg" />
          </span>
        </div>
        <p>adjective</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.clea {
  font-size: 20px;
  color: #000000;
}
.theme--light.v-card.v-card--outlined {
  border: none;
}
.card {
  display: flex;
}
.card span {
  display: block;
  flex: 1;
}
.spanleft {
  text-align: right;
}

</style>