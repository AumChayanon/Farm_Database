<template>
  <div class="div_plant">
      <div class="row">
        <div class="search-wrapper panel-heading col-sm-12" style="padding:0px 30px 20px 30px;">
          <h3>ค้นหา</h3>
          <input
            class="form-control"
            type="text"
            v-model="searchQuery"
            placeholder="ชนิดพืช"
            style="
            box-shadow: -5px -5px 5px #ffffff, 5px 5px 10px #dbdada; 
            border-radius: 50px;
            background-color: #F9F9F9;
            "
          />
        </div>
      </div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>ชนิดพืช</th>
            <th style="text-align: center;">จำนวนแปลงในการปลูก</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in resultQuery" :key="item.id">
            <td>{{ item.plant }}
            </td>
            <td style="text-align: center;">{{ item.count }}
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
    name:"plant",
    props:['data'],
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
                item.plant.toLowerCase().includes(v)
            );
        });
      } else {
        return this.data;
      }
    },
  }
}
</script>

<style>
.div_plant{
    width: 100%;
    height: 100%;
    margin: 70px 0px 0px 0px;
}
</style>