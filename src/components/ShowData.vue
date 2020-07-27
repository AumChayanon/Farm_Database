<template>
  <div style="width: 100%; height: auto; margin: 0px;">
    <div class="body_Show" v-if="this.status === 'default'">
      <div class="row" style="margin-top:70px;">
        <div class="search-wrapper panel-heading col-sm-12" style="padding:0px 35px 25px 35px;">
          <h3>ค้นหา</h3>
          <input
            class="form-control"
            type="text"
            v-model="searchQuery"
            placeholder="ตำบล/หมู่ที่/บ้านเลขที่/ผู้เก็บ"
            style="
            box-shadow: -5px -5px 5px #ffffff, 5px 5px 10px #dbdada; 
            border-radius: 50px;
            background-color: #F9F9F9;
            "
          />
        </div>
      </div>
      <div v-if="this.statusUser === 'adminhab'">
        <table class="table table-hover">
        <thead>
          <tr>
            <th>ตำบล</th>
            <th>หมู่</th>
            <th>เลขที่</th>
            <th>จำนวน</th>
            <th>ผู้เก็บ</th>
            <th style="padding: 0px 0px 0.75rem 0px;">แก้ไข</th>
            <th style="padding: 0px 0px 0.75rem 0px;">ลบ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in resultQuery" :key="item.id">
            <td v-on:click="doSomething(item.key)">
              <a target="_blank">{{ item.district }}</a>
            </td>
            <td v-on:click="doSomething(item.key)">
              <a target="_blank">{{ item.moo }}</a>
            </td>
            <td v-on:click="doSomething(item.key)">
              <a target="_blank">{{ item.house_number }}</a>
            </td>
            <td v-on:click="doSomething(item.key)">
              <a target="_blank">{{ item.num_perople }}</a>
            </td>
            <td v-on:click="doSomething(item.key)">
              <a target="_blank" class="text">{{ item.explorers }}</a>
            </td>
            <td style="padding: auto  0px 0.75rem 0px;">
              <a
                target="_blank"
                class="card-link"
                style="color: #008cff;"
                v-on:click="editData(item.key)"
              >
                <svg
                  id="Capa_1"
                  enable-background="new 0 0 512 512"
                  height="18"
                  viewBox="0 0 512 512"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <g>
                      <path
                        d="M392.533,238.937c-9.426,0-17.067,7.641-17.067,17.067V426.67c0,9.426-7.641,17.067-17.067,17.067H51.2
                          c-9.426,0-17.067-7.641-17.067-17.067V85.337c0-9.426,7.641-17.067,17.067-17.067H256c9.426,0,17.067-7.641,17.067-17.067
                          S265.426,34.137,256,34.137H51.2C22.923,34.137,0,57.06,0,85.337V426.67c0,28.277,22.923,51.2,51.2,51.2h307.2
                          c28.277,0,51.2-22.923,51.2-51.2V256.003C409.6,246.578,401.959,238.937,392.533,238.937z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M458.742,19.142c-12.254-12.256-28.875-19.14-46.206-19.138c-17.341-0.05-33.979,6.846-46.199,19.149L141.534,243.937
                            c-1.865,1.879-3.272,4.163-4.113,6.673l-34.133,102.4c-2.979,8.943,1.856,18.607,10.799,21.585
                            c1.735,0.578,3.552,0.873,5.38,0.875c1.832-0.003,3.653-0.297,5.393-0.87l102.4-34.133c2.515-0.84,4.8-2.254,6.673-4.13
                            l224.802-224.802C484.25,86.023,484.253,44.657,458.742,19.142z M434.603,87.419L212.736,309.286l-66.287,22.135l22.067-66.202
                            L390.468,43.353c12.202-12.178,31.967-12.158,44.145,0.044c5.817,5.829,9.095,13.72,9.12,21.955
                            C443.754,73.631,440.467,81.575,434.603,87.419z"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </td>
            <td style="padding: 0.75rem 0px 0.75rem 0px;">
              <a
                target="_blank"
                class="card-link"
                style="color: #ff4a4a;"
                v-on:click="delData(item.key)"
              >
                <svg
                  id="Layer_1"
                  enable-background="new 0 0 512 512"
                  height="18"
                  viewBox="0 0 512 512"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="m424 64h-88v-16c0-26.467-21.533-48-48-48h-64c-26.467 0-48 21.533-48 48v16h-88c-22.056 0-40 17.944-40 40v56c0 8.836 7.164 16 16 16h8.744l13.823 290.283c1.221 25.636 22.281 45.717 47.945 45.717h242.976c25.665 0 46.725-20.081 47.945-45.717l13.823-290.283h8.744c8.836 0 16-7.164 16-16v-56c0-22.056-17.944-40-40-40zm-216-16c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v16h-96zm-128 56c0-4.411 3.589-8 8-8h336c4.411 0 8 3.589 8 8v40c-4.931 0-331.567 0-352 0zm313.469 360.761c-.407 8.545-7.427 15.239-15.981 15.239h-242.976c-8.555 0-15.575-6.694-15.981-15.239l-13.751-288.761h302.44z"
                    />
                    <path
                      d="m256 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"
                    />
                    <path
                      d="m336 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"
                    />
                    <path
                      d="m176 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"
                    />
                  </g>
                </svg>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <div v-else>
        <table class="table table-hover">
        <thead>
          <tr>
            <th>ตำบล</th>
            <th>หมู่</th>
            <th>เลขที่</th>
            <th>จำนวน</th>
            <th>ผู้เก็บ</th>
            <th style="padding: 0px 0px 0.75rem 0px;">แก้ไข</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in resultQuery" :key="item.id">
            <td v-on:click="doSomething(item.key)">
              <a target="_blank">{{ item.district }}</a>
            </td>
            <td v-on:click="doSomething(item.key)">
              <a target="_blank">{{ item.moo }}</a>
            </td>
            <td v-on:click="doSomething(item.key)">
              <a target="_blank">{{ item.house_number }}</a>
            </td>
            <td v-on:click="doSomething(item.key)">
              <a target="_blank">{{ item.num_perople }}</a>
            </td>
            <td v-on:click="doSomething(item.key)">
              <a target="_blank" class="text">{{ item.explorers }}</a>
            </td>
            <td style="padding: auto  0px 0.75rem 0px;">
              <a
                target="_blank"
                class="card-link"
                style="color: #008cff;"
                v-on:click="editData(item.key)"
              >
                <svg
                  id="Capa_1"
                  enable-background="new 0 0 512 512"
                  height="18"
                  viewBox="0 0 512 512"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <g>
                      <path
                        d="M392.533,238.937c-9.426,0-17.067,7.641-17.067,17.067V426.67c0,9.426-7.641,17.067-17.067,17.067H51.2
                          c-9.426,0-17.067-7.641-17.067-17.067V85.337c0-9.426,7.641-17.067,17.067-17.067H256c9.426,0,17.067-7.641,17.067-17.067
                          S265.426,34.137,256,34.137H51.2C22.923,34.137,0,57.06,0,85.337V426.67c0,28.277,22.923,51.2,51.2,51.2h307.2
                          c28.277,0,51.2-22.923,51.2-51.2V256.003C409.6,246.578,401.959,238.937,392.533,238.937z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M458.742,19.142c-12.254-12.256-28.875-19.14-46.206-19.138c-17.341-0.05-33.979,6.846-46.199,19.149L141.534,243.937
                            c-1.865,1.879-3.272,4.163-4.113,6.673l-34.133,102.4c-2.979,8.943,1.856,18.607,10.799,21.585
                            c1.735,0.578,3.552,0.873,5.38,0.875c1.832-0.003,3.653-0.297,5.393-0.87l102.4-34.133c2.515-0.84,4.8-2.254,6.673-4.13
                            l224.802-224.802C484.25,86.023,484.253,44.657,458.742,19.142z M434.603,87.419L212.736,309.286l-66.287,22.135l22.067-66.202
                            L390.468,43.353c12.202-12.178,31.967-12.158,44.145,0.044c5.817,5.829,9.095,13.72,9.12,21.955
                            C443.754,73.631,440.467,81.575,434.603,87.419z"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      
      

      <Pagination
        v-if="this.data_conclude"
        :totalRecords="this.data_conclude.length"
        :perPageOptions="perPageOptions"
        v-model="pagination"
      />
    </div>

    <!-- show data-->
    <div class="body_Show" v-if="this.status === 'show'" id="slide2">
      <div style="width: 100%; height: 9%; ">
        <button
          type="button"
          class="btn btn-secondary btn-lg"
          v-on:click="cancel"
          style="float: right;"
        >X</button>
      </div>
      <br />

      <!-- card ที่อยู่ -->
      <div class="card">
        <pre>องค์กรเก็บข้อมูล: {{ this.search_explorers.explorer }}</pre>
        <p>ผู้เก็บข้อมูล: {{ this.search_explorers.name }} วันที่: {{this.search_explorers.date}} เวลา: {{this.search_explorers.time}}</p>
        <h3 style="color:#508944;">ที่อยู่</h3>
        <div class="row">
          <div class="col">
            <label for="exampleFormControlSelect1">ตำบล:</label>
            <p class="font-weight-bold">{{ this.search_house.district }}</p>
          </div>
          <div class="col">
            <label for="exampleFormControlSelect1">อำเภอ:</label>
            <p class="font-weight-bold">{{ this.search_house.amphoe }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="exampleFormControlSelect1">จังหวัด:</label>
            <p class="font-weight-bold">{{ this.search_house.province }}</p>
          </div>
          <div class="col">
            <label for="exampleFormControlSelect1">รหัสไปรษณีย์:</label>
            <p class="font-weight-bold">{{ this.search_house.zip }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="exampleFormControlSelect1">หมู่ที่:</label>
            <p class="font-weight-bold">{{ this.search_house.moo }}</p>
          </div>
          <div class="col">
            <label for="exampleFormControlSelect1">บ้านเลขที่:</label>
            <p class="font-weight-bold">{{ this.search_house.house_number }}</p>
          </div>
        </div>
      </div>

      <!-- card ครอบครัว -->
      <div class="card">
        <h3 style="color:#508944;">ครอบครัว</h3>
        <br />
        <div v-for="(index, counter) in search_peo" :key="index.id">
          <h4>คนที่: {{ counter + 1 }}</h4>
          <div class="form-group">
            <img class="preview" :src="showimg[counter].img" />
          </div>
          <div class="row">
            <div class="col">
              <label for="exampleFormControlSelect1">เพศ:</label>
              <p class="font-weight-bold">{{ index.sex }}</p>
            </div>
            <div class="col">
              <label for="exampleFormControlSelect1">คำนำหน้า:</label>
              <p
                class="font-weight-bold"
              >{{ index.name_prefix.prefix }} {{ index.name_prefix.other }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="exampleFormControlSelect1">ชื่อ:</label>
              <p class="font-weight-bold">{{ index.name }}</p>
            </div>
            <div class="col">
              <label for="exampleFormControlSelect1">นามสกุล:</label>
              <p class="font-weight-bold">{{ index.lastname }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="exampleFormControlSelect1">อายุ:</label>
              <p class="font-weight-bold">{{ index.age }}</p>
            </div>
            <div class="col">
              <label for="exampleFormControlSelect1">สถานะ:</label>
              <p class="font-weight-bold">{{ index.status }}</p>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">สถานะ:</label>
            <p class="font-weight-bold">{{ index.relationship }}</p>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">เบอร์โทรสัพท์:</label>
            <p class="font-weight-bold">{{ index.phone }}</p>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">อาศัยอยู่ในพื้นที่:</label>
            <p class="font-weight-bold">{{ index.live }}</p>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">การศึกษา:</label>
            <p class="font-weight-bold">{{ index.education.ed }}</p>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">โรค:</label>
            <p class="font-weight-bold">{{ index.disease.sta_dis }} {{ index.disease.othe_dis }}</p>
          </div>
          <div class="form-group">
            <label
              class="font-weight-bold"
              for="exampleFormControlSelect1"
              style="color:#508944;"
            >กลุ่มวิสาหกิจ:</label>
            <div v-if="index.job.re_veget.length > 0">
              <p>{{ index.job.sta_veget[0] }}</p>
              <div class="row">
                <div class="col">
                  <p class="font-weight-bold">รายรับ: {{ index.job.re_veget }}</p>
                </div>
                <div class="col">
                  <p class="font-weight-bold">รายจ่าย: {{ index.job.ex_veget }}</p>
                </div>
              </div>
            </div>
            <div v-if="index.job.re_rice.length > 0">
              <p>{{ index.job.sta_rice[0] }}</p>
              <div class="row">
                <div class="col">
                  <p class="font-weight-bold">รายรับ: {{ index.job.re_rice }}</p>
                </div>
                <div class="col">
                  <p class="font-weight-bold">รายจ่าย: {{ index.job.ex_rice }}</p>
                </div>
              </div>
            </div>
            <div v-if="index.job.re_rub.length > 0">
              <p>{{ index.job.sta_rub[0] }}</p>
              <div class="row">
                <div class="col">
                  <p class="font-weight-bold">รายรับ: {{ index.job.re_rub }}</p>
                </div>
                <div class="col">
                  <p class="font-weight-bold">รายจ่าย: {{ index.job.ex_rub }}</p>
                </div>
              </div>
            </div>
            <div v-if="index.job.re_fish.length > 0">
              <p>{{ index.job.sta_fish[0] }}</p>
              <div class="row">
                <div class="col">
                  <p class="font-weight-bold">รายรับ: {{ index.job.re_fish }}</p>
                </div>
                <div class="col">
                  <p class="font-weight-bold">รายจ่าย: {{ index.job.ex_fish }}</p>
                </div>
              </div>
            </div>
            <div v-if="index.job.re_herb.length > 0">
              <p>{{ index.job.sta_herb[0] }}</p>
              <div class="row">
                <div class="col">
                  <p class="font-weight-bold">รายรับ: {{ index.job.re_herb }}</p>
                </div>
                <div class="col">
                  <p class="font-weight-bold">รายจ่าย: {{ index.job.ex_herb }}</p>
                </div>
              </div>
            </div>
            <div v-if="index.job.re_silk.length > 0">
              <p>{{ index.job.sta_silk[0] }}</p>
              <div class="row">
                <div class="col">
                  <p class="font-weight-bold">รายรับ: {{ index.job.re_silk }}</p>
                </div>
                <div class="col">
                  <p class="font-weight-bold">รายจ่าย: {{ index.job.ex_silk }}</p>
                </div>
              </div>
            </div>
            <div v-if="index.job.re_other.length > 0">
              <p>{{ index.job.sta_other[0] }}</p>
              <div class="row" v-if="index.job.re_other !== ''">
                <div class="col">
                  <p class="font-weight-bold">ชนิดอื่นๆ: {{ index.job.type_other }}</p>
                </div>
                <div class="col">
                  <div class="col">
                    <p class="font-weight-bold">รายรับ: {{ index.job.re_other }}</p>
                  </div>
                  <div class="col">
                    <p class="font-weight-bold">รายจ่าย: {{ index.job.ex_other }}</p>
                  </div>
                </div>
              </div>
              <div class="row" v-if="index.job.re_other2 !== ''">
                <div class="col">
                  <p class="font-weight-bold">ชนิดอื่นๆ: {{ index.job.type_other2 }}</p>
                </div>
                <div class="col">
                  <div class="col">
                    <p class="font-weight-bold">รายรับ: {{ index.job.re_other2 }}</p>
                  </div>
                  <div class="col">
                    <p class="font-weight-bold">รายจ่าย: {{ index.job.ex_other2 }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- income -->
          <div class="form-group">
            <label for="exampleFormControlSelect1">อาชีพ:</label>
            <p class="font-weight-bold">{{ index.first_jop.sta_fj }} {{ index.first_jop.othe_fj }}</p>
          </div>
          <br />
          <label for="exampleFormControlSelect1" style="color:#508944;">อาชีพทางการเกษตร</label>
          <p style="margin: 16px 0px 0px 0px" class="font-weight-bold">รายได้อาชีพหลัก</p>
          <p>ทำนา</p>
          <div class="row">
            <div class="col">
              <label for="exampleFormControlSelect1">กระสอบ/ปี:</label>
              <p class="font-weight-bold">{{ index.re_farm_job.field.sack }}</p>
            </div>
            <div class="col">
              <label for="exampleFormControlSelect1">กิโลกรัม/กระสอบ:</label>
              <p class="font-weight-bold">{{ index.re_farm_job.field.kg }}</p>
            </div>
          </div>
          <label for="exampleFormControlSelect1">เลี้ยงสัตว์:</label>
          <div class="row">
            <div class="col">
              <label for="exampleFormControlSelect1">ชนิดสัตว์:</label>
              <p class="font-weight-bold">{{ index.re_farm_job.animal.ani1 }}</p>
            </div>
            <div class="col">
              <label for="exampleFormControlSelect1">เลี้ยงสัตว์/ปี:</label>
              <p class="font-weight-bold">{{ index.re_farm_job.animal.cost_ami1 }}</p>
            </div>
          </div>
          <div class="row" v-if="index.re_farm_job.animal.ani2 !== ''">
            <div class="col">
              <label for="exampleFormControlSelect1">ชนิดสัตว์:</label>
              <p class="font-weight-bold">{{ index.re_farm_job.animal.ani2 }}</p>
            </div>
            <div class="col">
              <label for="exampleFormControlSelect1">เลี้ยงสัตว์/ปี:</label>
              <p class="font-weight-bold">{{ index.re_farm_job.animal.cost_ami2 }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="exampleFormControlSelect1">ทอเสื่อ/ปี:</label>
              <p class="font-weight-bold">{{ index.re_farm_job.mat.mat }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="exampleFormControlSelect1">ปลูกผัก/ปี:</label>
              <p class="font-weight-bold">{{ index.re_farm_job.vegetables.vegetables }}</p>
            </div>
          </div>
          <label for="exampleFormControlSelect1">อื่นๆ:</label>
          <div class="row">
            <div class="col">
              <label for="exampleFormControlSelect1">ชนิดอื่นๆ:</label>
              <p class="font-weight-bold">{{ index.re_farm_job.other.type1 }}</p>
            </div>
            <div class="col">
              <label for="exampleFormControlSelect1">อื่นๆ/ปี:</label>
              <p class="font-weight-bold">{{ index.re_farm_job.other.costother1 }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="exampleFormControlSelect1">ชนิดอื่นๆ:</label>
              <p class="font-weight-bold">{{ index.re_farm_job.other.type2 }}</p>
            </div>
            <div class="col">
              <label for="exampleFormControlSelect1">อื่นๆ/ปี:</label>
              <p class="font-weight-bold">{{ index.re_farm_job.other.costother2 }}</p>
            </div>
          </div>

          <br />
          <p
            style="margin: 16px 0px 0px 0px; color:#508944;"
            class="font-weight-bold"
          >รายได้อาชีพเสริม</p>
          <p>ทำนา</p>
          <div class="row">
            <div class="col">
              <label for="exampleFormControlSelect1">กระสอบ/ปี:</label>
              <p class="font-weight-bold">{{ index.re_farm_job.pre_field.sack }}</p>
            </div>
            <div class="col">
              <label for="exampleFormControlSelect1">กิโลกรัม/กระสอบ:</label>
              <p class="font-weight-bold">{{ index.re_farm_job.pre_field.kg }}</p>
            </div>
          </div>
          <label for="exampleFormControlSelect1">เลี้ยงสัตว์:</label>
          <div class="row">
            <div class="col">
              <label for="exampleFormControlSelect1">ชนิดสัตว์:</label>
              <p class="font-weight-bold">{{ index.re_farm_job.pre_animal.ani1 }}</p>
            </div>
            <div class="col">
              <label for="exampleFormControlSelect1">เลี้ยงสัตว์/ปี:</label>
              <p class="font-weight-bold">{{ index.re_farm_job.pre_animal.cost_ami1 }}</p>
            </div>
          </div>
          <div class="row" v-if="index.re_farm_job.pre_animal.ani2 !== ''">
            <div class="col">
              <label for="exampleFormControlSelect1">ชนิดสัตว์:</label>
              <p class="font-weight-bold">{{ index.re_farm_job.pre_animal.ani2 }}</p>
            </div>
            <div class="col">
              <label for="exampleFormControlSelect1">เลี้ยงสัตว์/ปี:</label>
              <p class="font-weight-bold">{{ index.re_farm_job.pre_animal.cost_ami2 }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="exampleFormControlSelect1">ทอเสื่อ/ปี:</label>
              <p class="font-weight-bold">{{ index.re_farm_job.pre_mat.mat }}</p>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">ปลูกผัก/ปี:</label>
            <p class="font-weight-bold">{{ index.re_farm_job.pre_vegetables.vegetables }}</p>
          </div>
          <label for="exampleFormControlSelect1">อื่นๆ:</label>
          <div class="row">
            <div class="col">
              <label for="exampleFormControlSelect1">ชนิดอื่นๆ:</label>
              <p class="font-weight-bold">{{ index.re_farm_job.pre_other.type1 }}</p>
            </div>
            <div class="col">
              <label for="exampleFormControlSelect1">อื่นๆ/ปี:</label>
              <p class="font-weight-bold">{{ index.re_farm_job.pre_other.costother1 }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="exampleFormControlSelect1">ชนิดอื่นๆ:</label>
              <p class="font-weight-bold">{{ index.re_farm_job.pre_other.type2 }}</p>
            </div>
            <div class="col">
              <label for="exampleFormControlSelect1">อื่นๆ/ปี:</label>
              <p class="font-weight-bold">{{ index.re_farm_job.pre_other.costother2 }}</p>
            </div>
          </div>
          <br />
          <p
            style="margin: 16px 0px 0px 0px; color:#508944;"
            class="font-weight-bold"
          >รายจ่ายอาชีพหลัก</p>
          <div class="row">
            <div class="col">
              <label for="exampleFormControlSelect1">ค่าปุ๋ย/ปี:</label>
              <p class="font-weight-bold">{{ index.ex_farm_job.fertilizer.fertilizer }}</p>
            </div>
            <div class="col">
              <label for="exampleFormControlSelect1">ค่าจ้าง/ปี:</label>
              <p class="font-weight-bold">{{ index.ex_farm_job.wage.wage }}</p>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">ค่าเมล็ดพันธุ์ข้าว/ปี:</label>
            <p class="font-weight-bold">{{ index.ex_farm_job.rice.rice }}</p>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">ค่าเมล็ดพันธุ์ผัก/ปี:</label>
            <p class="font-weight-bold">{{ index.ex_farm_job.vegetables.vege }}</p>
          </div>
          <label for="exampleFormControlSelect1">ค่าอาหารสัตว์/ปี:</label>
          <div class="row">
            <div class="col">
              <p class="font-weight-bold">{{ index.ex_farm_job.animal_feed.animal_feed }}</p>
            </div>
          </div>
          <label for="exampleFormControlSelect1">อื่นๆ:</label>
          <div class="row">
            <div class="col">
              <label for="exampleFormControlSelect1">ชนิดอื่นๆ:</label>
              <p class="font-weight-bold">{{ index.ex_farm_job.other.other1.other }}</p>
            </div>
            <div class="col">
              <label for="exampleFormControlSelect1">อื่นๆ/ปี:</label>
              <p class="font-weight-bold">{{ index.ex_farm_job.other.other1.cost }}</p>
            </div>
          </div>
          <div class="row" v-if="index.ex_farm_job.other.other2.other !== ''">
            <div class="col">
              <label for="exampleFormControlSelect1">ชนิดอื่นๆ:</label>
              <p class="font-weight-bold">{{ index.ex_farm_job.other.other2.other }}</p>
            </div>
            <div class="col">
              <label for="exampleFormControlSelect1">อื่นๆ/ปี:</label>
              <p class="font-weight-bold">{{ index.ex_farm_job.other.other2.cost }}</p>
            </div>
          </div>
          <div class="row" v-if="index.ex_farm_job.other.other3.other !== ''">
            <div class="col">
              <label for="exampleFormControlSelect1">ชนิดอื่นๆ:</label>
              <p class="font-weight-bold">{{ index.ex_farm_job.other.other3.other }}</p>
            </div>
            <div class="col">
              <label for="exampleFormControlSelect1">อื่นๆ/ปี:</label>
              <p class="font-weight-bold">{{ index.ex_farm_job.other.other3.cost }}</p>
            </div>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">รายจ่ายอาชีพเสริม:</label>
            <p class="font-weight-bold"></p>
            <div class="row">
              <div class="col">
                <label for="exampleFormControlSelect1">ค่าปุ๋ย/ปี:</label>
                <p class="font-weight-bold">{{ index.ex_farm_job.pre_fertilizer.fertilizer }}</p>
              </div>
              <div class="col">
                <label for="exampleFormControlSelect1">ค่าจ้าง/ปี:</label>
                <p class="font-weight-bold">{{ index.ex_farm_job.pre_wage.wage }}</p>
              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">ค่าเมล็ดพันธุ์ข้าว/ปี:</label>
              <p class="font-weight-bold">{{ index.ex_farm_job.pre_rice.rice }}</p>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">ค่าเมล็ดพันธุ์ผัก/ปี:</label>
              <p class="font-weight-bold">{{ index.ex_farm_job.pre_vegetables.vege }}</p>
            </div>
            <label for="exampleFormControlSelect1">ค่าอาหารสัตว์/ปี:</label>
            <div class="row">
              <div class="col">
                <p class="font-weight-bold">{{ index.ex_farm_job.pre_animal_feed.animal_feed }}</p>
              </div>
            </div>
            <label for="exampleFormControlSelect1">อื่นๆ:</label>
            <div class="row">
              <div class="col">
                <label for="exampleFormControlSelect1">ชนิดอื่นๆ:</label>
                <p class="font-weight-bold">{{ index.ex_farm_job.pre_other.other1.other }}</p>
              </div>
              <div class="col">
                <label for="exampleFormControlSelect1">อื่นๆ/ปี:</label>
                <p class="font-weight-bold">{{ index.ex_farm_job.pre_other.other1.cost }}</p>
              </div>
            </div>
            <div class="row" v-if="index.ex_farm_job.pre_other.other2.other !== ''">
              <div class="col">
                <label for="exampleFormControlSelect1">ชนิดอื่นๆ:</label>
                <p class="font-weight-bold">{{ index.ex_farm_job.pre_other.other2.other }}</p>
              </div>
              <div class="col">
                <label for="exampleFormControlSelect1">อื่นๆ/ปี:</label>
                <p class="font-weight-bold">{{ index.ex_farm_job.pre_other.other2.cost }}</p>
              </div>
            </div>
            <div class="row" v-if="index.ex_farm_job.pre_other.other3.other !== ''">
              <div class="col">
                <label for="exampleFormControlSelect1">ชนิดอื่นๆ:</label>
                <p class="font-weight-bold">{{ index.ex_farm_job.pre_other.other3.other }}</p>
              </div>
              <div class="col">
                <label for="exampleFormControlSelect1">อื่นๆ/ปี:</label>
                <p class="font-weight-bold">{{ index.ex_farm_job.pre_other.other3.cost }}</p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div class="form-group" v-if="counter === 0">
            <label
              for="exampleFormControlSelect1"
              style="color:#508944;"
            >รายจ่ายภายในครัวเรือน/เดือน</label>

            <div class="row">
              <div class="col">
                <label for="exampleFormControlSelect1">ค่าน้ำ/เดือน:</label>
                <p class="font-weight-bold">{{ index.expenditure.water }}</p>
              </div>
              <div class="col">
                <label for="exampleFormControlSelect1">ค่าไฟ/เดือน:</label>
                <p class="font-weight-bold">{{ index.expenditure.electric }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="exampleFormControlSelect1">ค่าอาหาร/เดือน:</label>
                <p class="font-weight-bold">{{ index.expenditure.food }}</p>
              </div>
              <div class="col">
                <label for="exampleFormControlSelect1">ค่าน้ำมัน/เดือน:</label>
                <p class="font-weight-bold">{{ index.expenditure.oil }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="exampleFormControlSelect1">ค่าโทรศัพท์/เดือน:</label>
                <p class="font-weight-bold">{{ index.expenditure.phone }}</p>
              </div>
              <div class="col"></div>
            </div>
            <label for="exampleFormControlSelect1">กู้ยืม/เดือน:</label>
            <div class="row" v-if="index.expenditure.borrow.borrow1.bor !== ''">
              <div class="col">
                <p class="font-weight-bold">1. {{ index.expenditure.borrow.borrow1.bor }}</p>
              </div>
              <div class="col">
                <p class="font-weight-bold">{{ index.expenditure.borrow.borrow1.cost }} /เดือน</p>
              </div>
            </div>
            <div class="row" v-if="index.expenditure.borrow.borrow2.bor !== ''">
              <div class="col">
                <p class="font-weight-bold">2. {{ index.expenditure.borrow.borrow2.bor }}</p>
              </div>
              <div class="col">
                <p class="font-weight-bold">{{ index.expenditure.borrow.borrow2.cost }} /เดือน</p>
              </div>
            </div>
            <div class="row" v-if="index.expenditure.borrow.borrow3.bor !== ''">
              <div class="col">
                <p class="font-weight-bold">3. {{ index.expenditure.borrow.borrow3.bor }}</p>
              </div>
              <div class="col">
                <p class="font-weight-bold">{{ index.expenditure.borrow.borrow3.cost }} /เดือน</p>
              </div>
            </div>
            <label for="exampleFormControlSelect1">อื่นๆ/เดือน:</label>
            <div class="row" v-if="index.expenditure.other.other1.other !== ''">
              <div class="col">
                <p class="font-weight-bold">1. {{ index.expenditure.other.other1.other }}</p>
              </div>
              <div class="col">
                <p class="font-weight-bold">{{ index.expenditure.other.other1.cost }} /เดือน</p>
              </div>
            </div>
            <div class="row" v-if="index.expenditure.other.other2.other !== ''">
              <div class="col">
                <p class="font-weight-bold">2. {{ index.expenditure.other.other2.other }}</p>
              </div>
              <div class="col">
                <p class="font-weight-bold">{{ index.expenditure.other.other2.cost }} /เดือน</p>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <!-- card ที่ดิน -->
      <div class="card">
        <h3 style="color:#508944;">ที่ดิน</h3>
        <div v-for="(indexL, counterLand) in search_land" :key="indexL.id">
          <h4 for="exampleFormControlSelect1">แปลงที่ {{ counterLand + 1 }}</h4>
          <label for="exampleFormControlSelect1">ขนาดพื้นที่:</label>
          <div class="row">
            <div class="col">
              <label for="exampleFormControlSelect1">ไร่</label>
              <p class="font-weight-bold">{{ indexL.area_size.rai }}</p>
            </div>
            <div class="col">
              <label for="exampleFormControlSelect1">งาน</label>
              <p class="font-weight-bold">{{ indexL.area_size.ngan }}</p>
            </div>
            <div class="col">
              <label for="exampleFormControlSelect1">ตารางวา</label>
              <p class="font-weight-bold">{{ indexL.area_size.wa }}</p>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">พืชที่ปลูก:</label>
            <p class="font-weight-bold">{{ indexL.plant }}</p>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">ที่ตั้ง:</label>
            <p class="font-weight-bold">{{ indexL.location }}</p>
          </div>
          <div class="form-group">
            <button
              type="button"
              style="color: #ffffff;"
              class="btnMap"
              v-on:click="showMap(indexL.location )"
            >Map</button>
          </div>
          <hr />
        </div>
      </div>
    </div>

    <!-- Google Map -->
    <div v-if="this.status === 'map'" id="slide3" style="background-color: #ffffff">
      <div>
        <div style="padding:16px;">
          <br />
          <button
            type="button"
            style="color: #ff4a4a;width: 100%;background-color: #f9f9f9;"
            class="btnMap"
            v-on:click="outMap"
          >ออก</button>
        </div>
        <div id="map" ref="map">AA</div>
      </div>
    </div>

    <!-- edit -->
    <div class="body_Show" v-if="this.status === 'edit'" id="slide2">
      <div style="width: 100%; height: 9%; ">
        <button
          type="button"
          class="btn btn-secondary btn-lg"
          v-on:click="cancel"
          style="float: right;"
        >X</button>
      </div>
      <h3 style="padding-left:16px; ">แก้ไขฟอร์ม</h3>
      <EditData :data_edit="this.data" :edit="this.edit" @close_edit_forms="closeEditForms" :api="this.api" />
    </div>
  </div>
</template>

<script
  async
  defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDwRemyTGrDVGy-EYRLa79puv5mqncOf-Y"
></script>
<script>
import EditData from "./EditForms";
import * as firebase from "firebase";
import Pagination from "../components/Pagination";
import Swal from "sweetalert2";
import axios from "axios";
// CommonJS
//const Swal = require('sweetalert2')

var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var labelIndex = 0;
var amphoeD = "amphoeD";
var map = null; //map
var markers = [];
var markers_locations = [];
var infoWindow = null;
var draw_areas = [];
var colors = []; // map
var clickMap = 0;
const perPageOptions = [20, 50, 100];
var database = firebase.database();
var dataRef = database.ref("/data");
export default {
  name: "Show",
  props: ["data_conclude", "data", "statusUser", "api"],
  components: {
    EditData,
    Pagination
  },
  
  data: function() {
    return {
      map: null, //map
      markers: [],
      markers_locations: [],
      infoWindow: null,
      draw_areas: [],
      colors: [], // map
      img: [],
      showimg: [
        {
          img: "",
        },
      ],
      searchQuery: null,
      data_people: [],
      search_peo: [],
      search_explorers: [],
      search_house: [],
      search_land: [],
      search_income: [],
      search_in_peo: [],
      status: "default",
      edit: "",
      show_data: [],
      statusMap: "default",
      locations: [],
      perPageOptions,
      pagination: { page: 1, perPage: perPageOptions[1] }
    };
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.data_conclude.filter(item => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(
              v =>
                item.district.toLowerCase().includes(v) ||
                item.moo.toLowerCase().includes(v) ||
                item.house_number.toLowerCase().includes(v) ||
                item.explorers.toLowerCase().includes(v)
            );
        });
      }
      if (this.data_conclude) {
        const firstIndex = (this.pagination.page - 1) * this.pagination.perPage;
        const lastIndex = this.pagination.page * this.pagination.perPage;
        return this.data_conclude.slice(firstIndex, lastIndex);
      } else {
        return this.data_conclude;
      }
    }
  },
  async updated() {
    if (clickMap === 1) {
      this.deleteMarkers();
      if (this.locations.length > 0) {
        map = new window.google.maps.Map(this.$refs["map"], {
          center: { lat: this.locations[0].lat, lng: this.locations[0].lng },
          zoom: 17,
          mapTypeId: "satellite"
        });
      }

      infoWindow = new google.maps.InfoWindow();
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            //map.setCenter(pos);
          },
          function() {
            this.handleLocationError(true, infoWindow, map.getCenter());
          }
        );
      } else {
        // Browser doesn't support Geolocation
        this.handleLocationError(false, infoWindow, map.getCenter());
      }
      // This event listener will call addMarker() when the map is clicked.

      /*google.maps.event.addListener(map, "click", (e) => {
      // function call not working
      that.addMarker(e.latLng);
      that.done();
    });*/
      for (var i = 0; i < this.locations.length; i++) {
        this.addMarker(this.locations[i]);
        this.done();
      }
    }
  },
  methods: {
    closeEditForms(e){
      this.status = e;
    },
    outMap() {
      this.status = "show";
      this.locations = [];
      clickMap = 0;
    },
    cancel() {
      this.status = "default";
      this.all_data = [];
    },
    editData(value) {
      this.edit = value;
      this.status = "edit";
    },
    async delData(value) {
      //console.log(value);
      const delimg = this.data.find(mgs => mgs._id == value);
      Swal.fire({
        title: "ลบข้อมูล?",
        text: "คุณแน่ใจที่จะลบข้อมูล",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#f55454",
        cancelButtonColor: "#447b89",
        confirmButtonText: "ลบ",
        cancelButtonText: "ยกเลิก"
      }).then(result => {
        if (result.value) {
          Swal.fire("ลบเสร็จสิ้น!", "คุณได้ลบข้อมูลสำเร็จเรียบร้อยแล้ว.", "success");
          
          console.log(delimg);
          for(var i = 0; i< delimg.families.length; i++){
            if(delimg.families[i].img.length > 0){
              axios.delete(this.api.img + "/" + delimg.families[i].img ).then((response) => {
                  console.log(response);
                })
                .catch((e) => {
                  this.errors.push(e);
                });
                  }
          }
          axios
          .delete(this.api.data + "/" + value )
          .then((response) => {
            console.log(response);
          })
          .catch((e) => {
            this.errors.push(e);
          });
        }
      });
      const del = this.data_conclude.find(mgs => mgs.key == value);
      const index = this.data.indexOf(del);
      this.data.splice(index, 1);
      this.data_conclude.splice(index, 1);
    },
    showMap(location) {
      clickMap = 1;
      var k = 0;
      for (var i = 0; i < location.match(/{|}|\(|\)/g).length / 2; i++) {
        this.locations.push({
          lat: parseFloat(location.replace(/[()]/g, "").split(",")[k]),
          lng: parseFloat(location.replace(/[()]/g, "").split(",")[k + 1])
        });
        k += 2;
      }
      this.status = "map";
    },
    async doSomething(e) {
      this.search_house = [];
      this.search_peo = [];
      this.search_land = [];
      this.search_income = [];
      this.search_in_peo = [];
      this.search_explorers = [];

      const housetest = this.data.find(mgs => mgs._id == e);
      this.search_house = housetest.address;
      this.search_peo = housetest.families;
      this.search_land = housetest.land;
      this.search_explorers = housetest.explorers;
      for(var i = 0; i < housetest.families.length; i++){
        if(housetest.families[i].img.length < 30){
          this.addVisa()
          var imgShow = "";
                  await axios
                  .get(this.api.img + "/"+ housetest.families[i].img)
                  .then((response) => {
                    imgShow = response.data.img
                    this.showimg[i].img = imgShow
                  })
                  .catch((e) => {
                    this.errors.push(e);
                  });
        }
        
      }

      this.status = "show";
    },
    addVisa() {
      this.showimg.push({ img: "" });
    },
    // map
    getDataMap() {
      clickMap = 0;
      this.statusMap = "default";
      alert(markers_locations);
      var number = this.data.land.length;
      this.data.land[number - 1].location = markers_locations.toString();
    },
    done() {
      var color =
        "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
      var drawing = new google.maps.Polygon({
        paths: markers_locations,
        strokeColor: color,
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: color,
        fillOpacity: 0.35
      });
      drawing.setMap(map);
      // Add a listener for the click event.
      drawing.addListener("click", this.showArrays);
      draw_areas.push(drawing);
      colors.push(color);
    },
    addMarker(location) {
      var marker = new google.maps.Marker({
        position: location,
        label: labels[labelIndex++ % labels.length],
        map: map
      });
      markers_locations.push(location);
      markers.push(marker);
    },
    handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(
        browserHasGeolocation
          ? "Error: The Geolocation service failed."
          : "Error: Your browser doesn't support geolocation."
      );
      infoWindow.open(map);
    },
    setMapOnAll(map) {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
      }
    },
    clearMarkers() {
      this.setMapOnAll(null);
      for (var i = 0; i < draw_areas.length; i++) {
        draw_areas[i].setMap(null);
      }
    },
    deleteMarkers() {
      this.clearMarkers();
      draw_areas = [];
      labelIndex = 0;
      colors = [];
      markers_locations = [];
      markers = [];
    } // map
  }
};
</script>

<style>
.body_Show {
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0px 8px 0px 8px;
  background-color: #f9f9f9;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
.div_showForms {
  width: 100%;
  height: 100%;
  margin: 0;
}
img.preview {
  width: 150px;
}
#slide2 {
  position: absolute;
  bottom: -500px;
  width: 100%;
  height: 100%;
  -webkit-animation: slide 0.5s forwards;
  -webkit-animation-delay: 1s;
  animation: slide 0.5s forwards;
  animation-delay: 0.1s;
}
.card {
  background-color: #ffffff;
  border-radius: 5px;
  padding: 18px 24px 10px 24px;
  margin-bottom: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.082);
  border: none;
}
.row {
  padding: 0px;
}
.btn-secondary {
  background-color: #ffffff00 !important;
  color: #508944;
  border: 0px;
  width: auto;
  margin: 5px;
  font-size: 25px;
  border-radius: 0px 0px 25px 25px;
  border: 2px solid #508944;
}
.btnMap {
  width: 50%;
  height: 40px;
  color: #ffffff;
  background-color: #508944;
  border: 0px;
  border-radius: 50px;
  text-align: center;
  font-size: 18px;
  margin: auto;
  margin-bottom: 16px;
  box-shadow: -5px -5px 5px #ffffff, 5px 5px 10px #dbdada;
}
.btnClick {
  width: 50%;
  height: 40px;
  background-image: linear-gradient(to right, #6ba55f, #508944);
  color: #ffffff;
  border: 0px;
  border-radius: 10px;
  text-align: center;
  font-size: 18px;
  margin: auto;
  margin-bottom: 16px;
}
@-webkit-keyframes slide {
  100% {
    bottom: 0;
  }
}
@keyframes slide {
  100% {
    bottom: 0;
  }
}
#slide3 {
  position: absolute;
  bottom: -500px;
  width: 100%;
  height: 100%;
  -webkit-animation: slide 0.5s forwards;
  -webkit-animation-delay: 1s;
  animation: slide 0.5s forwards;
  animation-delay: 0.1s;
}
@-webkit-keyframes slide3 {
  100% {
    bottom: 0;
  }
}
@keyframes slide3 {
  100% {
    bottom: 0;
  }
}
#map {
  width: 100%;
  height: 550px;
  margin: 0;
}
/* Optional: Makes the sample page fill the window. */
#floating-panel {
  position: absolute;
  top: 10px;
  left: 25%;
  z-index: 5;
  background-color: #fff;
  padding: 5px;
  border: 1px solid #999;
  text-align: center;
  font-family: "Roboto", "sans-serif";
  line-height: 30px;
  padding-left: 10px;
}
.text {
  display: block;
  width: 40px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
a {
  font-size: 14px;
}
th {
  font-size: 14px;
}
.font-weight-bold{
  font-size: 18px;
}
</style>
