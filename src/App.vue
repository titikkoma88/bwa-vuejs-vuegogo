<template>
  <div id="app">
    <div class="container">
      <div class="row header mb-5 p-3">
        <div class="col-lg-12">
          <h2>What I do Today?</h2>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row content">
        <div class="col-lg-12">
          <div class="pekerjaan-rumah">
            <div
              v-for="tugasSaya in tugas"
              v-bind:key="tugasSaya.id"
              class="tugas"
            >
              <p>{{ tugasSaya.namaTugas }}</p>
              <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      tugas: [
        {
          id: 1,
          namaTugas: "Mencuci baju",
          isDone: false,
        },
        {
          id: 2,
          namaTugas: "Ngoding Website",
          isDone: false,
        },
        {
          id: 3,
          namaTugas: "Belanja Kebutuhan",
          isDone: false,
        },
        {
          id: 4,
          namaTugas: "Istirahat 8 Jam",
          isDone: false,
        },
      ],
    };
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  background: #1abc9c;
}
.header h2 {
  margin: 0;
}
</style>
