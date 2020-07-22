<template>
  <div class="div_conclude">
      <div class="row">
        <div class="search-wrapper panel-heading col-sm-12" style="padding:0px 30px 20px 30px;">
          <h3>ค้นหา</h3>
          <input
            class="form-control"
            type="text"
            v-model="searchQuery"
            placeholder="ตำบล"
            style="
            box-shadow: -5px -5px 5px #ffffff, 5px 5px 10px #dbdada; 
            border-radius: 50px;
            background-color: #F9F9F9;
            "
          />
        </div>
      </div>
      <div class="row" style="text-align: center;">
        <div class="col">
          <div class="col"><h2>{{this.countHome}}</h2><p>จำนวนครัวเรือน</p></div>
        </div>
        <div class="col">
          <div class="col"><h2>{{this.countPeople}}</h2><p>จำนวนประชากร</p></div>
        </div>
      </div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>ตำบล</th>
            <th style="text-align: center;">จำนวนประชากร</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in resultQuery" :key="item.id">
            <td>{{ item.district }}
            </td>
            <td style="text-align: center;">{{ item.count_people }}
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: "showpeople",
  props: ["data", "countPeople", "countHome"],
  data() {
    return {
      searchQuery:""
    };
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {

        return this.data.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(
              (v) =>
                item.district.toLowerCase().includes(v)
            );
        });
      } else {
        return this.data;
      }
    },
  },
};
</script>

<style>
.div_conclude {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 70px 16px 16px 16px; 
}
</style>
