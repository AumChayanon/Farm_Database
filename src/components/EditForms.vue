<template>
  <div class="div_edit">
    <div v-if="this.status === 'default'">
      <!-- card ที่อยู่ -->
      <div class="card">
        <pre>องค์กรเก็บข้อมูล: {{ this.data.explorers.explorer }}</pre>
        <p>ผู้เก็บข้อมูล: {{ this.data.explorers.name }} วันที่: {{this.data.explorers.date}} เวลา: {{this.data.explorers.time}}</p>
        <h3 style="color:#508944;">1. ที่อยู่</h3>
        <div class="form-group">
          <!-- ตำบล/แขวง -->
          <addressinput-subdistrict style="width: 65vw;" v-model="data.address.district" />
          <!-- อำเภอ/เขต -->
          <addressinput-district style="width: 65vw;" v-model="data.address.amphoe" />
          <!-- จังหวัด -->
          <addressinput-province style="width: 65vw;" v-model="data.address.province" />
          <!-- รหัสไปรษณีย์ -->
          <addressinput-zipcode style="width: 65vw;" v-model="data.address.zip" />
          <div class="row">
            <div class="col">
              <label for="exampleFormControlSelect1">
                หมู่ที่
                <samp style="color: red;">*</samp>
              </label>
              <input
                class="form-control"
                type="number"
                placeholder="หมู่ที่"
                value="บ้านโต้น"
                v-model="data.address.moo"
              />
            </div>
            <div class="col">
              <label for="exampleFormControlSelect1">
                บ้านเลขที่
                <samp style="color: red;">*</samp>
              </label>
              <input
                class="form-control"
                type="number"
                placeholder="บ้านเลขที่"
                v-model="data.address.house_number"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- card ครอบครัว -->
      <div class="card">
        <h3 style="color:#508944;">2. ครอบครัว</h3>
        <div class="form-group">
          <label>(คนแรกคือหัวหน้าครอบครัว)</label>
          <br />
          <div v-for="(family, counter) in data.families" v-bind:key="counter">
            <span @click="deleteVisa(counter)" style="float: right;">X</span>
            <br />
            <h4>คนที่: {{ counter + 1 }}.</h4>
            <div class="form-group">
              <img class="preview" :src="data.families[counter].img" />
            </div>
            <div class="form-group">
              <p>อัพโหลดรูป:</p>
              <input type="file" @change="previewImage" accept="image/*" style="font-family: auto;" />
            </div>

            <b-form-group label="เพศ:">
              <b-form-radio-group v-model="family.sex" :options="op_sex" :key="family.paId"></b-form-radio-group>
            </b-form-group>
            <b-form-group label="คำนำหน้า:">
              <b-form-radio-group
                v-model="family.name_prefix.prefix"
                :options="op_name_prefix"
                :key="family.paId"
              ></b-form-radio-group>
              <input
                v-if="family.name_prefix.prefix === 'อื่นๆ'"
                class="form-control"
                type="text"
                placeholder="ชื่อ"
                v-model="family.name_prefix.other"
                style="margin-top: 10px;"
              />
            </b-form-group>
            <div class="row">
              <div class="col">
                <label for="duration">ชื่อ</label>

                <input class="form-control" type="text" placeholder="ชื่อ" v-model="family.name" />
              </div>
              <div class="col">
                <label for="exampleFormControlSelect1">นามสกุล</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="นามสกุล"
                  v-model="family.lastname"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="exampleFormControlSelect1">อายุ</label>
                <input class="form-control" type="number" placeholder="อายุ" v-model="family.age" />
              </div>
              <div class="col">
                <label for="exampleFormControlSelect1">สถานะ</label>
                <b-form-select v-model="family.status" :options="op_sta" placeholder="เลือก"></b-form-select>
              </div>
            </div>
            <br />
            <b-form-group label="อาชีพ:">
              <b-form-radio-group
                v-model="family.first_jop.sta_fj"
                :options="op_first_jop_none"
                :key="family.paId"
              ></b-form-radio-group>
              <b-form-radio-group
                :disabled="family.first_jop.sta_fj === 'ไม่มี'"
                v-model="family.first_jop.sta_fj"
                :options="op_first_jop"
                :key="family.paId"
              ></b-form-radio-group>
              <input
                v-if="family.first_jop.sta_fj === 'อื่นๆ'"
                class="form-control"
                type="text"
                placeholder="อื่นๆ โปรดเลือก"
                v-model="family.first_jop.othe_fj"
              />
            </b-form-group>

            <div class="form-group">
              <label for="exampleFormControlSelect1">ความสัมพันธ์ (กับหัวหน้าครอบครัว)</label>
              <b-form-select
                v-model="family.relationship"
                :options="op_relationship"
                placeholder="เลือก"
              ></b-form-select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">เบอร์โทรศัพท์</label>
              <input
                class="form-control"
                type="tel"
                placeholder="08xxxxxxxx"
                style="width: 250px;"
                v-model="family.phone"
              />
            </div>
            <b-form-group label="อาศัยอยู่ในพื้นที่หรือไม่:">
              <b-form-radio-group v-model="family.live" :options="op_live" :key="family.paId"></b-form-radio-group>
            </b-form-group>
            <b-form-group>
              <h3 style="color:#508944;">3. การศึกษา:</h3>
              <b-form-radio-group
                :id="'checkboxED' + counter"
                v-model="family.education.sta_ed"
                :options="op_ed"
                :key="family.paId"
              ></b-form-radio-group>
            </b-form-group>
            <div
              class="row"
              v-if="
                family.education.sta_ed === 'อยู่ระหว่างศึกษา' ||
                  family.education.sta_ed === 'จบการศึกษา'
              "
            >
              <div class="col" v-if="family.education.sta_ed === 'อยู่ระหว่างศึกษา'">
                <b-form-select
                  v-model="family.education.ed"
                  :options="op_education"
                  placeholder="เลือก"
                ></b-form-select>
              </div>
              <div class="col" v-if="family.education.sta_ed === 'จบการศึกษา'">
                <b-form-select
                  v-model="family.education.ed"
                  :options="op_congrats"
                  placeholder="เลือก"
                ></b-form-select>
              </div>
            </div>
            <br />
            <h3 style="color:#508944;">4. โรค:</h3>
            <b-form-group label="(สามารถเลือกได้มากกว่า 1):">
              <b-form-radio-group
                v-model="family.disease.sta_dis[0]"
                :options="op_first_jop_none"
                :key="family.paId"
              ></b-form-radio-group>
              <b-form-checkbox-group
                v-if="family.disease.sta_dis[0] === 'มี'"
                :id="'checkbox' + counter"
                v-model="family.disease.sta_dis"
                :options="op_disease"
                :key="family.paId"
              ></b-form-checkbox-group>
              <b-form-radio-group
                v-if="family.disease.sta_dis[0] === 'มี'"
                v-model="family.disease.sta_dis[10]"
                :options="op_farm_other"
                :key="family.paId"
              ></b-form-radio-group>
              <input
                v-if="
                        family.disease.sta_dis[10] === 'อื่นๆ' && family.disease.sta_dis[0] === 'มี'"
                class="form-control"
                type="text"
                placeholder="โปรดระบุ"
                v-model="family.disease.othe_dis"
              />
            </b-form-group>
            <br />
            <h3 style="color:#508944;">5. กลุ่มวิสาหกิจ:</h3>

            <b-form-group label="(สามารถเลือกได้มากกว่า 1):">
              <b-form-checkbox-group
                :id="'checkboxop_job_veget' + counter"
                v-model="family.job.sta_veget"
                :options="op_job_veget"
                :key="family.paId"
              ></b-form-checkbox-group>
              <div class="row" v-if="family.job.sta_veget[0] === 'ปลูกผัก'">
                <div class="col">
                  <label for="exampleFormControlSelect1">รายได้ของกลุ่ม</label>
                  <input
                    class="form-control"
                    type="number"
                    placeholder="เฉลี่ย (บาท/เดือน)"
                    v-model="family.job.re_veget"
                  />
                </div>
                <div class="col">
                  <label for="exampleFormControlSelect1">รายจ่ายของกลุ่ม</label>
                  <input
                    class="form-control"
                    type="number"
                    placeholder="เฉลี่ย (บาท/เดือน)"
                    v-model="family.job.ex_veget"
                  />
                </div>
              </div>
            </b-form-group>
            <b-form-group>
              <b-form-checkbox-group
                :id="'checkboxop_job_rice' + counter"
                v-model="family.job.sta_rice"
                :options="op_job_rice"
                :key="family.paId"
              ></b-form-checkbox-group>
              <div class="row" v-if="family.job.sta_rice[0] === 'ปลูกข้าว'">
                <div class="col">
                  <label for="exampleFormControlSelect1">รายได้ของกลุ่ม</label>
                  <input
                    class="form-control"
                    type="number"
                    placeholder="เฉลี่ย (บาท/เดือน)"
                    v-model="family.job.re_rice"
                  />
                </div>
                <div class="col">
                  <label for="exampleFormControlSelect1">รายจ่ายของกลุ่ม</label>
                  <input
                    class="form-control"
                    type="number"
                    placeholder="เฉลี่ย (บาท/เดือน)"
                    v-model="family.job.ex_rice"
                  />
                </div>
              </div>
            </b-form-group>
            <b-form-group>
              <b-form-checkbox-group
                :id="'checkboxop_job_rub' + counter"
                v-model="family.job.sta_rub"
                :options="op_job_rub"
                :key="family.paId"
              ></b-form-checkbox-group>
              <div class="row" v-if="family.job.sta_rub[0] === 'นวด'">
                <div class="col">
                  <label for="exampleFormControlSelect1">รายได้ของกลุ่ม</label>
                  <input
                    class="form-control"
                    type="number"
                    placeholder="เฉลี่ย (บาท/เดือน)"
                    v-model="family.job.re_rub"
                  />
                </div>
                <div class="col">
                  <label for="exampleFormControlSelect1">รายจ่ายของกลุ่ม</label>
                  <input
                    class="form-control"
                    type="number"
                    placeholder="เฉลี่ย (บาท/เดือน)"
                    v-model="family.job.ex_rub"
                  />
                </div>
              </div>
            </b-form-group>
            <b-form-group>
              <b-form-checkbox-group
                :id="'checkboxop_job_fish' + counter"
                v-model="family.job.sta_fish"
                :options="op_job_fish"
                :key="family.paId"
              ></b-form-checkbox-group>
              <div class="row" v-if="family.job.sta_fish[0] === 'เลี้ยงปลา'">
                <div class="col">
                  <label for="exampleFormControlSelect1">รายได้ของกลุ่ม</label>
                  <input
                    class="form-control"
                    type="number"
                    placeholder="เฉลี่ย (บาท/เดือน)"
                    v-model="family.job.re_fish"
                  />
                </div>
                <div class="col">
                  <label for="exampleFormControlSelect1">รายจ่ายของ</label>
                  <input
                    class="form-control"
                    type="number"
                    placeholder="เฉลี่ย (บาท/เดือน)"
                    v-model="family.job.ex_fish"
                  />
                </div>
              </div>
            </b-form-group>
            <b-form-group>
              <b-form-checkbox-group
                :id="'checkboxop_job_herb' + counter"
                v-model="family.job.sta_herb"
                :options="op_job_herb"
                :key="family.paId"
              ></b-form-checkbox-group>
              <div class="row" v-if="family.job.sta_herb[0] === 'สมุนไพร'">
                <div class="col">
                  <label for="exampleFormControlSelect1">รายได้ของกลุ่ม</label>
                  <input
                    class="form-control"
                    type="number"
                    placeholder="เฉลี่ย (บาท/เดือน)"
                    v-model="family.job.re_herb"
                  />
                </div>
                <div class="col">
                  <label for="exampleFormControlSelect1">รายจ่ายของกลุ่ม</label>
                  <input
                    class="form-control"
                    type="number"
                    placeholder="เฉลี่ย (บาท/เดือน)"
                    v-model="family.job.ex_herb"
                  />
                </div>
              </div>
            </b-form-group>
            <b-form-group>
              <b-form-checkbox-group
                :id="'checkboxop_job_silk' + counter"
                v-model="family.job.sta_silk"
                :options="op_job_silk"
                :key="family.paId"
              ></b-form-checkbox-group>
              <div class="row" v-if="family.job.sta_silk[0] === 'หม่อนไหม'">
                <div class="col">
                  <label for="exampleFormControlSelect1">รายได้ของกลุ่ม</label>
                  <input
                    class="form-control"
                    type="number"
                    placeholder="เฉลี่ย (บาท/เดือน)"
                    v-model="family.job.re_silk"
                  />
                </div>
                <div class="col">
                  <label for="exampleFormControlSelect1">รายจ่ายของกลุ่ม</label>
                  <input
                    class="form-control"
                    type="number"
                    placeholder="เฉลี่ย (บาท/เดือน)"
                    v-model="family.job.ex_silk"
                  />
                </div>
              </div>
            </b-form-group>
            <b-form-group>
              <b-form-checkbox-group
                :id="'checkboxop_farm_other' + counter"
                v-model="family.job.sta_other"
                :options="op_farm_other"
                :key="family.paId"
              ></b-form-checkbox-group>
              <div v-if="family.job.sta_other[0] === 'อื่นๆ'">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">1 ชนิดอื่นๆ</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="โปรดระบุ"
                    v-model="family.job.type_other"
                  />
                </div>
                <div class="row" style="padding-top: 0px;">
                  <div class="col" style="padding: 0px 12px 0px 12px;">
                    <label for="exampleFormControlSelect1">รายได้ของกลุ่ม/เดือน</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="รายได้ของกลุ่มเฉลี่ย(บาท/เดือน)"
                      v-model="family.job.re_other"
                    />
                  </div>
                  <div class="col" style="padding: 0px 12px 0px 12px;">
                    <label for="exampleFormControlSelect1">รายจ่ายของกลุ่ม/เดือน</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="รายจ่ายของกลุ่มเฉลี่ย(บาท/เดือน)"
                      v-model="family.job.ex_other"
                    />
                  </div>
                </div>
                <br />
                <div class="form-group">
                  <label for="exampleFormControlSelect1">2 ชนิดอื่นๆ</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="โปรดระบุ"
                    v-model="family.job.type_other2"
                  />
                </div>
                <div class="row" style="padding: 0px 12px 0px 12px;">
                  <div class="col" style="padding: 0px;">
                    <label for="exampleFormControlSelect1">รายได้ของกลุ่ม/เดือน</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="รายได้ของกลุ่มเฉลี่ย(บาท/เดือน)"
                      v-model="family.job.re_other2"
                    />
                  </div>
                  <div class="col" style="padding: 0px 12px 0px 12px;">
                    <label for="exampleFormControlSelect1">รายจ่ายของกลุ่ม/เดือน</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="รายจ่ายของกลุ่มเฉลี่ย(บาท/เดือน)"
                      v-model="family.job.ex_other2"
                    />
                  </div>
                </div>
              </div>
            </b-form-group>

            <br />
            <div class="form-group">
              <h3 style="color:#508944;">6. อาชีพทางการเกษตร:</h3>
              <h5 style="margin: 16px 0px 0px 0px" class="font-weight-bold">6.1 รายได้อาชีพหลัก:</h5>

              <b-form-group>
                <b-form-checkbox-group
                  :id="'checkboxfield' + counter"
                  v-model="family.re_farm_job.field.status"
                  :options="op_field"
                  :key="family.paId"
                ></b-form-checkbox-group>
                <div class="row" v-if="family.re_farm_job.field.status[0] === 'ทำนา'">
                  <div class="col">
                    <label for="exampleFormControlSelect1">กระสอบ</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/ปี)"
                      v-model="family.re_farm_job.field.sack"
                    />
                  </div>
                  <div class="col">
                    <label for="exampleFormControlSelect1">(กิโลกรัม/กระสอบ)</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="โปรดระบุ"
                      v-model="family.re_farm_job.field.kg"
                    />
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox-group
                  :id="'checkboxanimal' + counter"
                  v-model="family.re_farm_job.animal.status"
                  :options="op_animal"
                  :key="family.paId"
                ></b-form-checkbox-group>
                <div class="row" v-if="family.re_farm_job.animal.status[0] === 'เลี้ยงสัตว์'">
                  <div class="col">
                    <label for="exampleFormControlSelect1">1. ชนิดสัตว์</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="ชนิดสัตว์"
                      v-model="family.re_farm_job.animal.ani1"
                    />
                  </div>
                  <div class="col">
                    <label for="exampleFormControlSelect1">เลี้ยงสัตว์</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/เดือน)"
                      v-model="family.re_farm_job.animal.cost_ami1"
                    />
                  </div>
                </div>
                <div class="row" v-if="family.re_farm_job.animal.status[0] === 'เลี้ยงสัตว์'">
                  <div class="col">
                    <label for="exampleFormControlSelect1">2. ชนิดสัตว์</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="ชนิดสัตว์"
                      v-model="family.re_farm_job.animal.ani2"
                    />
                  </div>
                  <div class="col">
                    <label for="exampleFormControlSelect1">เลี้ยงสัตว์</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/เดือน)"
                      v-model="family.re_farm_job.animal.cost_ami2"
                    />
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox-group
                  :id="'checkboxmat' + counter"
                  v-model="family.re_farm_job.mat.status"
                  :options="op_mat"
                  :key="family.paId"
                ></b-form-checkbox-group>
                <div class="row" v-if="family.re_farm_job.mat.status[0] === 'ทอเสื่อ'">
                  <div class="col">
                    <label for="exampleFormControlSelect1">ทอเสื่อ</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/เดือน)"
                      v-model="family.re_farm_job.mat.mat"
                    />
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox-group
                  :id="'checkboxvegetables' + counter"
                  v-model="family.re_farm_job.vegetables.status"
                  :options="op_vegetables"
                  :key="family.paId"
                ></b-form-checkbox-group>
                <div class="row" v-if="family.re_farm_job.vegetables.status[0] === 'ปลูกผัก'">
                  <div class="col">
                    <label for="exampleFormControlSelect1">ปลูกผัก</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/เดือน)"
                      v-model="family.re_farm_job.vegetables.vegetables"
                    />
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox-group
                  :id="'checkboxother' + counter"
                  v-model="family.re_farm_job.other.status"
                  :options="op_farm_other"
                  :key="family.paId"
                ></b-form-checkbox-group>
                <div class="row" v-if="family.re_farm_job.other.status[0] === 'อื่นๆ'">
                  <div class="col">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="1. โปรดระบุ"
                      v-model="family.re_farm_job.other.type1"
                    />
                  </div>
                  <div class="col">
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/เดือน)"
                      v-model="family.re_farm_job.other.costother1"
                    />
                  </div>
                </div>
                <div class="row" v-if="family.re_farm_job.other.status[0] === 'อื่นๆ'">
                  <div class="col">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="2. โปรดระบุ"
                      v-model="family.re_farm_job.other.type2"
                    />
                  </div>
                  <div class="col">
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/เดือน)"
                      v-model="family.re_farm_job.other.costother2"
                    />
                  </div>
                </div>
              </b-form-group>

              <h5 style="margin: 16px 0px 0px 0px" class="font-weight-bold">6.2 รายได้อาชีพเสริม:</h5>

              <b-form-group>
                <b-form-checkbox-group
                  :id="'checkboxPrefield' + counter"
                  v-model="family.re_farm_job.pre_field.status"
                  :options="op_field"
                  :key="family.paId"
                ></b-form-checkbox-group>
                <div class="row" v-if="family.re_farm_job.pre_field.status[0] === 'ทำนา'">
                  <div class="col">
                    <label for="exampleFormControlSelect1">กระสอบ</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/ปี)"
                      v-model="family.re_farm_job.pre_field.sack"
                    />
                  </div>
                  <div class="col">
                    <label for="exampleFormControlSelect1">(กิโลกรัม/กระสอบ)</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="โปรดระบุ"
                      v-model="family.re_farm_job.pre_field.kg"
                    />
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox-group
                  :id="'checkboxPreanimal' + counter"
                  v-model="family.re_farm_job.pre_animal.status"
                  :options="op_animal"
                  :key="family.paId"
                ></b-form-checkbox-group>
                <div
                  class="row"
                  v-if="
                    family.re_farm_job.pre_animal.status[0] === 'เลี้ยงสัตว์'
                  "
                >
                  <div class="col">
                    <label for="exampleFormControlSelect1">1. ชนิดสัตว์</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="ชนิดสัตว์"
                      v-model="family.re_farm_job.pre_animal.ani1"
                    />
                  </div>
                  <div class="col">
                    <label for="exampleFormControlSelect1">เลี้ยงสัตว์</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/เดือน)"
                      v-model="family.re_farm_job.pre_animal.cost_ami1"
                    />
                  </div>
                </div>
                <div
                  class="row"
                  v-if="
                    family.re_farm_job.pre_animal.status[0] === 'เลี้ยงสัตว์'
                  "
                >
                  <div class="col">
                    <label for="exampleFormControlSelect1">2. ชนิดสัตว์</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="ชนิดสัตว์"
                      v-model="family.re_farm_job.pre_animal.ani2"
                    />
                  </div>
                  <div class="col">
                    <label for="exampleFormControlSelect1">เลี้ยงสัตว์</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/เดือน)"
                      v-model="family.re_farm_job.pre_animal.cost_ami2"
                    />
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox-group
                  :id="'checkboxpremat' + counter"
                  v-model="family.re_farm_job.pre_mat.status"
                  :options="op_mat"
                  :key="family.paId"
                ></b-form-checkbox-group>
                <div class="row" v-if="family.re_farm_job.pre_mat.status[0] === 'ทอเสื่อ'">
                  <div class="col">
                    <label for="exampleFormControlSelect1">ทอเสื่อ</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/เดือน)"
                      v-model="family.re_farm_job.pre_mat.mat"
                    />
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox-group
                  :id="'checkboxprevegetables' + counter"
                  v-model="family.re_farm_job.pre_vegetables.status"
                  :options="op_vegetables"
                  :key="family.paId"
                ></b-form-checkbox-group>
                <div
                  class="row"
                  v-if="
                    family.re_farm_job.pre_vegetables.status[0] === 'ปลูกผัก'
                  "
                >
                  <div class="col">
                    <label for="exampleFormControlSelect1">ปลูกผัก</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/เดือน)"
                      v-model="family.re_farm_job.pre_vegetables.vegetables"
                    />
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox-group
                  :id="'checkboxPreother' + counter"
                  v-model="family.re_farm_job.pre_other.status"
                  :options="op_farm_other"
                  :key="family.paId"
                ></b-form-checkbox-group>
                <div class="row" v-if="family.re_farm_job.pre_other.status[0] === 'อื่นๆ'">
                  <div class="col">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="1. โปรดระบุ"
                      v-model="family.re_farm_job.pre_other.type1"
                    />
                  </div>
                  <div class="col">
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/เดือน)"
                      v-model="family.re_farm_job.pre_other.costother1"
                    />
                  </div>
                </div>
                <div class="row" v-if="family.re_farm_job.pre_other.status[0] === 'อื่นๆ'">
                  <div class="col">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="2. โปรดระบุ"
                      v-model="family.re_farm_job.pre_other.type2"
                    />
                  </div>
                  <div class="col">
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/เดือน)"
                      v-model="family.re_farm_job.pre_other.costother2"
                    />
                  </div>
                </div>
              </b-form-group>

              <h5 style="margin: 16px 0px 0px 0px" class="font-weight-bold">6.3 รายจ่ายอาชีพหลัก:</h5>

              <b-form-group>
                <b-form-checkbox-group
                  :id="'checkbox_fertilizer' + counter"
                  v-model="family.ex_farm_job.fertilizer.status"
                  :options="op_fertilizer"
                  :key="family.paId"
                ></b-form-checkbox-group>
                <div class="row" v-if="family.ex_farm_job.fertilizer.status[0] === 'ค่าปุ๋ย'">
                  <div class="col">
                    <label for="exampleFormControlSelect1">ค่าปุ๋ย</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/ปี)"
                      v-model="family.ex_farm_job.fertilizer.fertilizer"
                    />
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox-group
                  :id="'checkboxwage' + counter"
                  v-model="family.ex_farm_job.wage.status"
                  :options="op_wage"
                  :key="family.paId"
                ></b-form-checkbox-group>
                <div class="row" v-if="family.ex_farm_job.wage.status[0] === 'ค่าจ้าง'">
                  <div class="col">
                    <label for="exampleFormControlSelect1">ค่าจ้าง</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/ปี)"
                      v-model="family.ex_farm_job.wage.wage"
                    />
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox-group
                  :id="'checkboxrice' + counter"
                  v-model="family.ex_farm_job.rice.status"
                  :options="op_rice"
                  :key="family.paId"
                ></b-form-checkbox-group>
                <div
                  class="row"
                  v-if="
                    family.ex_farm_job.rice.status[0] === 'ค่าเมล็ดพันธุ์ข้าว'
                  "
                >
                  <div class="col">
                    <label for="exampleFormControlSelect1">ค่าเมล็ดพันธุ์ข้าว</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/ปี)"
                      v-model="family.ex_farm_job.rice.rice"
                    />
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox-group
                  :id="'checkboxvege' + counter"
                  v-model="family.ex_farm_job.vegetables.status"
                  :options="op_vege"
                  :key="family.paId"
                ></b-form-checkbox-group>
                <div
                  class="row"
                  v-if="
                    family.ex_farm_job.vegetables.status[0] ===
                      'ค่าเมล็ดพันธุ์ผัก'
                  "
                >
                  <div class="col">
                    <label for="exampleFormControlSelect1">ค่าเมล็ดพันธุ์ผัก</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/เดือน)"
                      v-model="family.ex_farm_job.vegetables.vege"
                    />
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox-group
                  :id="'checkboxop_animal_feed' + counter"
                  v-model="family.ex_farm_job.animal_feed.status"
                  :options="op_animal_feed"
                  :key="family.paId"
                ></b-form-checkbox-group>
                <div
                  class="row"
                  v-if="
                    family.ex_farm_job.animal_feed.status[0] === 'ค่าอาหารสัตว์'
                  "
                >
                  <div class="col">
                    <label for="exampleFormControlSelect1">ค่าอาหารสัตว์</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/เดือน)"
                      v-model="family.ex_farm_job.animal_feed.animal_feed"
                    />
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox-group
                  :id="'checkboxex_farm_job_other' + counter"
                  v-model="family.ex_farm_job.other.status"
                  :options="op_farm_other"
                  :key="family.paId"
                ></b-form-checkbox-group>
                <div class="row" v-if="family.ex_farm_job.other.status[0] === 'อื่นๆ'">
                  <div class="col">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="1. โปรดระบุ"
                      v-model="family.ex_farm_job.other.other1.other"
                    />
                  </div>
                  <div class="col">
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/เดือน)"
                      v-model="family.ex_farm_job.other.other1.cost"
                    />
                  </div>
                </div>
                <div class="row" v-if="family.ex_farm_job.other.status[0] === 'อื่นๆ'">
                  <div class="col">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="2. โปรดระบุ"
                      v-model="family.ex_farm_job.other.other2.other"
                    />
                  </div>
                  <div class="col">
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/เดือน)"
                      v-model="family.ex_farm_job.other.other2.cost"
                    />
                  </div>
                </div>
                <div class="row" v-if="family.ex_farm_job.other.status[0] === 'อื่นๆ'">
                  <div class="col">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="3. โปรดระบุ"
                      v-model="family.ex_farm_job.other.other3.other"
                    />
                  </div>
                  <div class="col">
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/เดือน)"
                      v-model="family.ex_farm_job.other.other3.cost"
                    />
                  </div>
                </div>
              </b-form-group>

              <h5 style="margin: 16px 0px 0px 0px" class="font-weight-bold">6.4 รายจ่ายอาชีพเสริม</h5>
              <b-form-group>
                <b-form-checkbox-group
                  :id="'checkboxpre_fertilizer' + counter"
                  v-model="family.ex_farm_job.pre_fertilizer.status"
                  :options="op_fertilizer"
                  :key="family.paId"
                ></b-form-checkbox-group>
                <div
                  class="row"
                  v-if="
                    family.ex_farm_job.pre_fertilizer.status[0] === 'ค่าปุ๋ย'
                  "
                >
                  <div class="col">
                    <label for="exampleFormControlSelect1">ค่าปุ๋ย</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/ปี)"
                      v-model="family.ex_farm_job.pre_fertilizer.fertilizer"
                    />
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox-group
                  :id="'checkboxprewage' + counter"
                  v-model="family.ex_farm_job.pre_wage.status"
                  :options="op_wage"
                  :key="family.paId"
                ></b-form-checkbox-group>
                <div class="row" v-if="family.ex_farm_job.pre_wage.status[0] === 'ค่าจ้าง'">
                  <div class="col">
                    <label for="exampleFormControlSelect1">ค่าจ้าง</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/ปี)"
                      v-model="family.ex_farm_job.pre_wage.wage"
                    />
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox-group
                  :id="'checkboxprerice' + counter"
                  v-model="family.ex_farm_job.pre_rice.status"
                  :options="op_rice"
                  :key="family.paId"
                ></b-form-checkbox-group>
                <div
                  class="row"
                  v-if="
                    family.ex_farm_job.pre_rice.status[0] ===
                      'ค่าเมล็ดพันธุ์ข้าว'
                  "
                >
                  <div class="col">
                    <label for="exampleFormControlSelect1">ค่าเมล็ดพันธุ์ข้าว</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/ปี)"
                      v-model="family.ex_farm_job.pre_rice.rice"
                    />
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox-group
                  :id="'checkboxprevege' + counter"
                  v-model="family.ex_farm_job.pre_vegetables.status"
                  :options="op_vege"
                  :key="family.paId"
                ></b-form-checkbox-group>
                <div
                  class="row"
                  v-if="
                    family.ex_farm_job.pre_vegetables.status[0] ===
                      'ค่าเมล็ดพันธุ์ผัก'
                  "
                >
                  <div class="col">
                    <label for="exampleFormControlSelect1">ค่าเมล็ดพันธุ์ผัก</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/เดือน)"
                      v-model="family.ex_farm_job.pre_vegetables.vege"
                    />
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox-group
                  :id="'checkboxoppre_animal_feed' + counter"
                  v-model="family.ex_farm_job.pre_animal_feed.status"
                  :options="op_animal_feed"
                  :key="family.paId"
                ></b-form-checkbox-group>
                <div
                  class="row"
                  v-if="
                    family.ex_farm_job.pre_animal_feed.status[0] ===
                      'ค่าอาหารสัตว์'
                  "
                >
                  <div class="col">
                    <label for="exampleFormControlSelect1">ค่าอาหารสัตว์</label>
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/เดือน)"
                      v-model="family.ex_farm_job.pre_animal_feed.animal_feed"
                    />
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <b-form-checkbox-group
                  :id="'checkboxex_farm_job_pre_other' + counter"
                  v-model="family.ex_farm_job.pre_other.status"
                  :options="op_farm_other"
                  :key="family.paId"
                ></b-form-checkbox-group>
                <div class="row" v-if="family.ex_farm_job.pre_other.status[0] === 'อื่นๆ'">
                  <div class="col">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="1. โปรดระบุ"
                      v-model="family.ex_farm_job.pre_other.other1.other"
                    />
                  </div>
                  <div class="col">
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/เดือน)"
                      v-model="family.ex_farm_job.pre_other.other1.cost"
                    />
                  </div>
                </div>
                <div class="row" v-if="family.ex_farm_job.pre_other.status[0] === 'อื่นๆ'">
                  <div class="col">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="2. โปรดระบุ"
                      v-model="family.ex_farm_job.pre_other.other2.other"
                    />
                  </div>
                  <div class="col">
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/เดือน)"
                      v-model="family.ex_farm_job.pre_other.other2.cost"
                    />
                  </div>
                </div>
                <div class="row" v-if="family.ex_farm_job.pre_other.status[0] === 'อื่นๆ'">
                  <div class="col">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="3. โปรดระบุ"
                      v-model="family.ex_farm_job.pre_other.other3.other"
                    />
                  </div>
                  <div class="col">
                    <input
                      class="form-control"
                      type="number"
                      placeholder="เฉลี่ย (บาท/เดือน)"
                      v-model="family.ex_farm_job.pre_other.other3.cost"
                    />
                  </div>
                </div>
              </b-form-group>
            </div>
            <br />

            <div class="form-group" v-if="counter === 0">
              <h5 for="exampleFormControlSelect1" class="font-weight-bold">6.5 รายจ่ายภายในครัวเรือน</h5>
              <div class="row">
                <div class="col">
                  <label for="exampleFormControlSelect1">ค่าน้ำ</label>
                  <input
                    class="form-control"
                    type="number"
                    placeholder="เฉลี่ย(บาท/เดือน)"
                    v-model="family.expenditure.water"
                  />
                </div>
                <div class="col">
                  <label for="exampleFormControlSelect1">ค่าไฟ</label>
                  <input
                    class="form-control"
                    type="number"
                    placeholder="เฉลี่ย(บาท/เดือน)"
                    v-model="family.expenditure.electric"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label for="exampleFormControlSelect1">ค่าอาหาร</label>
                  <input
                    class="form-control"
                    type="number"
                    placeholder="เฉลี่ย(บาท/เดือน)"
                    v-model="family.expenditure.food"
                  />
                </div>
                <div class="col">
                  <label for="exampleFormControlSelect1">ค่าน้ำมัน</label>
                  <input
                    class="form-control"
                    type="number"
                    placeholder="เฉลี่ย(บาท/เดือน)"
                    v-model="family.expenditure.oil"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label for="exampleFormControlSelect1">ค่าโทรศัพท์</label>
                  <input
                    class="form-control"
                    type="number"
                    placeholder="เฉลี่ย(บาท/เดือน)"
                    v-model="family.expenditure.phone"
                  />
                </div>
                <div class="col"></div>
              </div>
              <label for="exampleFormControlSelect1">กู้ยืม</label>
              <div class="row">
                <div class="col">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="โปรดระบุ"
                    v-model="family.expenditure.borrow.borrow1.bor"
                  />
                </div>
                <div class="col">
                  <input
                    class="form-control"
                    type="number"
                    placeholder="เฉลี่ย(บาท/เดือน)"
                    v-model="family.expenditure.borrow.borrow1.cost"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="โปรดระบุ"
                    v-model="family.expenditure.borrow.borrow2.bor"
                  />
                </div>
                <div class="col">
                  <input
                    class="form-control"
                    type="number"
                    placeholder="เฉลี่ย(บาท/เดือน)"
                    v-model="family.expenditure.borrow.borrow2.cost"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="โปรดระบุ"
                    v-model="family.expenditure.borrow.borrow3.bor"
                  />
                </div>
                <div class="col">
                  <input
                    class="form-control"
                    type="number"
                    placeholder="เฉลี่ย(บาท/เดือน)"
                    v-model="family.expenditure.borrow.borrow3.cost"
                  />
                </div>
              </div>
              <label for="exampleFormControlSelect1">อื่นๆ โปรดระบุ</label>
              <div class="row">
                <div class="col">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="โปรดระบุ"
                    v-model="family.expenditure.other.other1.other"
                  />
                </div>
                <div class="col">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="เฉลี่ย(บาท/เดือน)"
                    v-model="family.expenditure.other.other1.cost"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="โปรดระบุ"
                    v-model="family.expenditure.other.other2.other"
                  />
                </div>
                <div class="col">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="เฉลี่ย(บาท/เดือน)"
                    v-model="family.expenditure.other.other2.cost"
                  />
                </div>
              </div>
            </div>

            <hr />
          </div>
        </div>
        <button @click="addVisa" class="btn_add">+ เพิ่มสมาชิกในครอบครัว</button>
      </div>

      <!-- card ที่ดิน -->
      <div class="card">
        <h3 style="color:#508944;">7. ที่ดิน</h3>
        <div v-for="(area, counter) in data.land" v-bind:key="counter">
          <span @click="deleteland(counter)" style="float: right;">X</span>
          <br />
          <h4 for="exampleFormControlSelect1">แปลงที่ {{ (area.area = counter + 1) }}</h4>
          <br />
          <label for="exampleFormControlSelect1">ขนาดพื้นที่:</label>
          <div class="row">
            <div class="col">
              <label for="exampleFormControlSelect1">ไร่</label>
              <input
                class="form-control"
                type="number"
                placeholder="ไร่"
                v-model="area.area_size.rai"
                required
              />
            </div>
            <div class="col">
              <label for="exampleFormControlSelect1">งาน</label>
              <input
                class="form-control"
                type="number"
                placeholder="งาน"
                v-model="area.area_size.ngan"
              />
            </div>
            <div class="col">
              <label for="exampleFormControlSelect1">ตารางวา</label>
              <input
                class="form-control"
                type="number"
                placeholder="ตารางวา"
                v-model="area.area_size.wa"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="exampleFormControlSelect1">พืชที่ปลูก</label>
              <input class="form-control" type="text" placeholder="พืชที่ปลูก" v-model="area.plant" />
            </div>
            <div class="col"></div>
          </div>
          <div class="row">
            <div class="col">
              <label for="exampleFormControlSelect1">ที่ตั้ง</label>
              <input
                class="form-control"
                type="text"
                placeholder="ที่ตั้ง"
                v-model="area.location"
                style="color:#508944;"
              />
            </div>
          </div>
          <div class="form-group">
            <button
              type="button"
              style="color: #ffffff;"
              class="btnMap"
              v-on:click="showMap(area.location, counter)"
            >Map</button>
          </div>
          <hr />
        </div>
        <button @click="addland" class="btn_add">+ เพิ่มแปลง</button>
      </div>

      <div class="saveData">
        <button v-on:click="clickUpdate" class="btnSave">อัปเดต</button>
      </div>
    </div>

    <div v-if="this.status ==='map'">
      <div>
        <div>
          <button
            type="button"
            style="color: #508944;width: 100px; margin-left: 16px;background-color: #f9f9f9; box-shadow: -5px -5px 5px #ffffff, 5px 5px 10px #dbdada;"
            class="btnMap"
            v-on:click="getDataMap"
          >เลือก</button>
          <button
            type="button"
            style="color: #fd931b;width: 100px; margin-left: 16px; background-color: #f9f9f9; box-shadow: -5px -5px 5px #ffffff, 5px 5px 10px #dbdada;"
            class="btnMap"
            v-on:click="deleteMarkers"
          >ลบ</button>

          <button
            type="button"
            style="color: #ff4a4a;width: 100px; margin-left: 16px;background-color: #f9f9f9; box-shadow: -5px -5px 5px #ffffff, 5px 5px 10px #dbdada;"
            class="btnMap"
            v-on:click="outMap"
          >ออก</button>

          <!-- Replace the value of the key parameter with your own API key. -->
        </div>
        <div id="map" ref="map"></div>
      </div>
    </div>
  </div>
</template>

<script
  async
  defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDwRemyTGrDVGy-EYRLa79puv5mqncOf-Y"
></script>
<script>
import * as firebase from "firebase";
import formEJson from "../assets/formsEdit.json"
import options from "../assets/options.json"
var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var labelIndex = 0;
var number = 0;
var amphoeD = "amphoeD";
var database = firebase.database();
var dataRef = database.ref("/data");
var clickMap = 0;

var map = null; //map
var locations = [];
var markers = [];
var markers_locations = [];
var infoWindow = null;
var draw_areas = [];
var colors = [];

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export default {
  name: "edit",
  props: ["edit", "data_edit"],
  data() {
    return {
      //map
      status: "default",
      statusMap: "default", // map
      data: formEJson,
      data_read: [],
      imageData: null,
      uploadValue: 0,
      op_job_veget: options.op_job_veget,
      op_job_rice: options.op_job_rice,
      op_job_rub: options.op_job_rub,
      op_job_sell: options.op_job_sell,
      op_job_fish: options.op_job_fish,
      op_job_herb: options.op_job_herb,
      op_job_silk: options.op_job_silk,
      op_live: options.op_live,
      op_fertilizer: options.op_fertilizer,
      op_animal_feed: options.op_animal_feed,
      op_wage: options.op_wage,
      op_rice: options.op_rice,
      op_vege: options.op_vege,
      op_field: options.op_field,
      op_animal: options.op_animal,
      op_vegetables: options.op_vegetables,
      op_mat: options.op_mat.op_mat,
       op_farm_other: options.op_farm_other,
      op_ed: options.op_ed,
      op_sex: options.op_sex,
      op_name_prefix:options.op_name_prefix,
      op_sta: options.op_sta,
      op_relationship: options.op_relationship,
      op_first_jop_none: options.op_first_jop_none,
      op_first_jop: options.op_first_jop,
      op_disease: options.op_disease,
      op_education: options.op_education,
      op_congrats: options.op_congrats,
    };
  },
  async created() {
    this.data_read = this.data_edit.find(mgs => mgs.key == this.edit);
    //this.data["income"] = incometest
    this.data.address = this.data_read.address;
    this.data.explorers = this.data_read.explorers;
    for (var l = 0; l < this.data_read.land.length - 1; l++) {
      this.addland();
    }
    for (var j = 0; j < this.data_read.land.length; j++) {
      this.data.land[j] = this.data_read.land[j];
    }
    
    for (var k = 0; k < this.data_read.families.length - 1; k++) {
      this.addVisa();
    }
    await this.createForms();
    //console.log("data", this.data);
  },
  async updated() {
    if (clickMap === 1) {
      if (locations.length > 0) {
        this.deleteMarkers();
        map = new window.google.maps.Map(this.$refs["map"], {
          center: { lat: locations[0].lat, lng: locations[0].lng },
          zoom: 17,
          mapTypeId: "satellite"
        });
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
        for (var i = 0; i < locations.length; i++) {
          this.addMarker(locations[i]);
          this.done();
        }
        const that = this;
        google.maps.event.addListener(map, "click", e => {
          // function call not working
          that.addMarker(e.latLng);
          that.done();
        });
      } else {
        this.deleteMarkers();
        map = new window.google.maps.Map(this.$refs["map"], {
          center: { lat: 16.439625, lng: 102.828728 },
          zoom: 17,
          mapTypeId: "satellite"
        });
        infoWindow = new google.maps.InfoWindow();

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              infoWindow.setPosition(pos);
              infoWindow.setContent("Location found.");
              infoWindow.open(map);
              map.setCenter(pos);
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
        const that = this;
        google.maps.event.addListener(map, "click", e => {
          // function call not working
          that.addMarker(e.latLng);
          that.done();
        });
      }
    }
  },
  methods: {
    outMap() {
      this.status = "default";
      clickMap = 0;
    },
    createForms() {
      for (var i = 0; i < this.data_read.families.length; i++) {
        this.data.families[i].img = this.data_read.families[i].img;
        this.data.families[i].sex = this.data_read.families[i].sex;
        this.data.families[i].name_prefix.prefix = this.data_read.families[
          i
        ].name_prefix.prefix;
        this.data.families[i].name_prefix.other = this.data_read.families[
          i
        ].name_prefix.other;
        this.data.families[i].name = this.data_read.families[i].name;
        this.data.families[i].lastname = this.data_read.families[i].lastname;
        this.data.families[i].age = this.data_read.families[i].age;
        this.data.families[i].status = this.data_read.families[i].status;
        this.data.families[i].phone = this.data_read.families[i].phone;
        this.data.families[i].live = this.data_read.families[i].live;
        this.data.families[i].relationship = this.data_read.families[
          i
        ].relationship;
        this.data.families[i].revenue_job = this.data_read.families[
          i
        ].revenue_job;
        this.data.families[i].expenditure_job = this.data_read.families[
          i
        ].expenditure_job;
        this.data.families[i].education.sta_ed = this.data_read.families[
          i
        ].education.sta_ed;
        this.data.families[i].education.ed = this.data_read.families[
          i
        ].education.ed;
        this.data.families[i].expenditure.water = this.data_read.families[
          i
        ].expenditure.water;
        this.data.families[i].expenditure.electric = this.data_read.families[
          i
        ].expenditure.electric;
        this.data.families[i].expenditure.food = this.data_read.families[
          i
        ].expenditure.food;
        this.data.families[i].expenditure.oil = this.data_read.families[
          i
        ].expenditure.oil;
        this.data.families[i].expenditure.borrow = this.data_read.families[
          i
        ].expenditure.borrow;
        this.data.families[i].expenditure.phone = this.data_read.families[
          i
        ].expenditure.phone;
        this.data.families[i].expenditure.other = this.data_read.families[
          i
        ].expenditure.other;

        // กลุ่มวิสาหกิจ
        if (this.data_read.families[i].job.re_veget !== "") {
          this.data.families[i].job.sta_veget[0] = this.data_read.families[
            i
          ].job.sta_veget[0];
        }
        if (this.data_read.families[i].job.re_rice !== "") {
          this.data.families[i].job.sta_rice[0] = this.data_read.families[
            i
          ].job.sta_rice[0];
        }
        if (this.data_read.families[i].job.re_rub !== "") {
          this.data.families[i].job.sta_rub[0] = this.data_read.families[
            i
          ].job.sta_rub[0];
        }
        if (this.data_read.families[i].job.re_fish !== "") {
          this.data.families[i].job.sta_fish[0] = this.data_read.families[
            i
          ].job.sta_fish[0];
        }
        if (this.data_read.families[i].job.re_herb !== "") {
          this.data.families[i].job.sta_herb[0] = this.data_read.families[
            i
          ].job.sta_herb[0];
        }
        if (this.data_read.families[i].job.re_silk !== "") {
          this.data.families[i].job.sta_silk[0] = this.data_read.families[
            i
          ].job.sta_silk[0];
        }
        if (this.data_read.families[i].job.re_other !== "") {
          this.data.families[i].job.sta_other[0] = this.data_read.families[
            i
          ].job.sta_other[0];
        }

        this.data.families[i].job.re_veget = this.data_read.families[
          i
        ].job.re_veget;
        this.data.families[i].job.ex_veget = this.data_read.families[
          i
        ].job.ex_veget;

        this.data.families[i].job.re_rice = this.data_read.families[
          i
        ].job.re_rice;
        this.data.families[i].job.ex_rice = this.data_read.families[
          i
        ].job.ex_rice;

        this.data.families[i].job.re_rub = this.data_read.families[
          i
        ].job.re_rub;
        this.data.families[i].job.ex_rub = this.data_read.families[
          i
        ].job.ex_rub;

        this.data.families[i].job.re_fish = this.data_read.families[
          i
        ].job.re_fish;
        this.data.families[i].job.ex_fish = this.data_read.families[
          i
        ].job.ex_fish;

        this.data.families[i].job.re_herb = this.data_read.families[
          i
        ].job.re_herb;
        this.data.families[i].job.ex_herb = this.data_read.families[
          i
        ].job.ex_herb;

        this.data.families[i].job.re_silk = this.data_read.families[
          i
        ].job.re_silk;
        this.data.families[i].job.ex_silk = this.data_read.families[
          i
        ].job.ex_silk;

        this.data.families[i].job.re_other = this.data_read.families[
          i
        ].job.re_other;
        this.data.families[i].job.ex_other = this.data_read.families[
          i
        ].job.ex_other;
        if (this.data_read.families[i].disease.hasOwnProperty("sta_dis")) {
          if (
            this.data_read.families[i].disease.sta_dis[0] !== "" ||
            this.data_read.families[i].disease.sta_dis[10] !== ""
          ) {
            this.data.families[i].disease = this.data_read.families[i].disease;
            this.data.families[i].disease.othe_dis = this.data_read.families[
              i
            ].disease.othe_dis;
            //console.log("disease",i, this.data_read.families[i].disease.hasOwnProperty('sta_dis'));
          }
        }
        /*this.data.families[i].disease.sta_dis = this.data_read.families[
          i
        ].disease.sta_dis;
        this.data.families[i].disease.othe_dis = this.data_read.families[
          i
        ].disease.othe_dis;*/
        this.data.families[i].first_jop = this.data_read.families[i].first_jop;
        /*this.data.families[i].first_jop.othe_fj = this.data_read.families[
          i
        ].first_jop.othe_fj;*/

        //อาชีพเกษตรกร รายได้หลักและเสริม
        if (this.data_read.families[i].re_farm_job.field.kg.length > 0) {
          this.data.families[i].re_farm_job.field = this.data_read.families[
            i
          ].re_farm_job.field;
        }
        if (this.data_read.families[i].re_farm_job.animal.ani1 !== "") {
          this.data.families[i].re_farm_job.animal = this.data_read.families[
            i
          ].re_farm_job.animal;
        }
        if (this.data_read.families[i].re_farm_job.mat.mat !== "") {
          this.data.families[i].re_farm_job.mat = this.data_read.families[
            i
          ].re_farm_job.mat;
        }
        if (
          this.data_read.families[i].re_farm_job.vegetables.vegetables !== ""
        ) {
          this.data.families[
            i
          ].re_farm_job.vegetables = this.data_read.families[
            i
          ].re_farm_job.vegetables;
        }
        if (this.data_read.families[i].re_farm_job.other.type1 !== "") {
          this.data.families[i].re_farm_job.other = this.data_read.families[
            i
          ].re_farm_job.other;
        }
        if (this.data_read.families[i].re_farm_job.pre_mat.mat !== "") {
          this.data.families[i].re_farm_job.pre_mat = this.data_read.families[
            i
          ].re_farm_job.pre_mat;
        }
        if (this.data_read.families[i].re_farm_job.pre_field.kg !== "") {
          this.data.families[i].re_farm_job.pre_field = this.data_read.families[
            i
          ].re_farm_job.pre_field;
        }
        if (this.data_read.families[i].re_farm_job.pre_animal.ani1 !== "") {
          this.data.families[
            i
          ].re_farm_job.pre_animal = this.data_read.families[
            i
          ].re_farm_job.pre_animal;
        }
        if (
          this.data_read.families[i].re_farm_job.pre_vegetables.vegetables !==
          ""
        ) {
          this.data.families[
            i
          ].re_farm_job.pre_vegetables = this.data_read.families[
            i
          ].re_farm_job.pre_vegetables;
        }
        if (this.data_read.families[i].re_farm_job.pre_other.type1 !== "") {
          this.data.families[i].re_farm_job.pre_other = this.data_read.families[
            i
          ].re_farm_job.pre_other;
        }

        //อาชีพเกษตรกร รายจ่ายหลักและเสริม
        if (
          this.data_read.families[i].ex_farm_job.fertilizer.fertilizer !== ""
        ) {
          this.data.families[
            i
          ].ex_farm_job.fertilizer = this.data_read.families[
            i
          ].ex_farm_job.fertilizer;
        }
        if (this.data_read.families[i].ex_farm_job.wage.wage !== "") {
          this.data.families[i].ex_farm_job.wage = this.data_read.families[
            i
          ].ex_farm_job.wage;
        }
        if (this.data_read.families[i].ex_farm_job.rice.rice !== "") {
          this.data.families[i].ex_farm_job.rice = this.data_read.families[
            i
          ].ex_farm_job.rice;
        }
        if (this.data_read.families[i].ex_farm_job.vegetables.vege !== "") {
          this.data.families[
            i
          ].ex_farm_job.vegetables = this.data_read.families[
            i
          ].ex_farm_job.vegetables;
        }
        if (
          this.data_read.families[i].ex_farm_job.animal_feed.animal_feed !== ""
        ) {
          this.data.families[
            i
          ].ex_farm_job.animal_feed = this.data_read.families[
            i
          ].ex_farm_job.animal_feed;
        }
        if (
          this.data_read.families[i].ex_farm_job.pre_fertilizer.fertilizer !==
          ""
        ) {
          this.data.families[
            i
          ].ex_farm_job.pre_fertilizer = this.data_read.families[
            i
          ].ex_farm_job.pre_fertilizer;
        }
        if (this.data_read.families[i].ex_farm_job.pre_wage.wage !== "") {
          this.data.families[i].ex_farm_job.pre_wage = this.data_read.families[
            i
          ].ex_farm_job.pre_wage;
        }
        if (this.data_read.families[i].ex_farm_job.pre_rice.rice !== "") {
          this.data.families[i].ex_farm_job.pre_rice = this.data_read.families[
            i
          ].ex_farm_job.pre_rice;
        }
        if (this.data_read.families[i].ex_farm_job.pre_vegetables.vege !== "") {
          this.data.families[
            i
          ].ex_farm_job.pre_vegetables = this.data_read.families[
            i
          ].ex_farm_job.pre_vegetables;
        }
        if (
          this.data_read.families[i].ex_farm_job.pre_animal_feed.animal_feed !==
          ""
        ) {
          this.data.families[
            i
          ].ex_farm_job.pre_animal_feed = this.data_read.families[
            i
          ].ex_farm_job.pre_animal_feed;
        }
        if (
          this.data_read.families[i].ex_farm_job.pre_other.other1.cost !== ""
        ) {
          this.data.families[i].ex_farm_job.pre_other = this.data_read.families[
            i
          ].ex_farm_job.pre_other;
        }
        if (this.data_read.families[i].ex_farm_job.other.other1.cost !== "") {
          this.data.families[i].ex_farm_job.other = this.data_read.families[
            i
          ].ex_farm_job.other;
        }
      }
    },
    async clickUpdate() {
      //console.log("this.edit", this.edit, "this.data", this.data);
      await dataRef.child(this.edit).update({ ...this.data });
      this.$emit("close_edit_forms", "default");
      //await this.reloadApp();
    },
    reloadApp() {
      window.location.reload();
    },
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];

      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            var num = this.data.families.length - 1;
            this.data.families[num].img = url;
          });
        }
      );
    },
    addVisa() {
      this.data.families.push({
        img: "",
        sex: "",
        name_prefix: {
          prefix: "",
          other: ""
        },
        name: "",
        lastname: "",
        age: "",
        status: "",
        phone: "",
        live: "",
        job: {
          sta_veget: [],
          re_veget: "",
          ex_veget: "",
          sta_rice: [],
          re_rice: "",
          ex_rice: "",
          sta_rub: [],
          re_rub: "",
          ex_rub: "",
          sta_sell: [],
          re_sell: "",
          ex_sell: "",
          sta_fish: [],
          re_fish: "",
          ex_fish: "",
          sta_herb: [],
          re_herb: "",
          ex_herb: "",
          sta_silk: [],
          re_silk: "",
          ex_silk: "",
          sta_other: [],
          re_other: "",
          ex_other: "",
          type_other: "",
          sta_other2: [],
          re_other2: "",
          ex_other2: "",
          type_other2: ""
        },
        disease: {
          sta_dis: [],
          othe_dis: ""
        },
        education: {
          sta_ed: "",
          ed: ""
        },
        relationship: "",
        first_jop: {
          sta_fj: [],
          othe_fj: ""
        },
        expenditure: {
          water: "",
          electric: "",
          food: "",
          oil: "",
          borrow: {
            borrow1: {
              bor: "",
              cost: ""
            },
            borrow2: {
              bor: "",
              cost: ""
            },
            borrow3: {
              bor: "",
              cost: ""
            }
          },
          phone: "",
          other: {
            other1: {
              other: "",
              cost: ""
            },
            other2: {
              other: "",
              cost: ""
            }
          }
        },
        revenue_job: "",
        expenditure_job: "",
        re_farm_job: {
          field: {
            sack: "",
            kg: "",
            status: []
          },
          animal: {
            status: [],
            ani1: "",
            cost_ami1: "",
            ani2: "",
            cost_ami2: ""
          },
          mat: {
            status: [],
            mat: ""
          },
          pre_mat: {
            status: [],
            mat: ""
          },
          pre_field: {
            sack: "",
            kg: "",
            status: []
          },
          pre_animal: {
            status: [],
            cost_ami1: "",
            ani1: "",
            cost_ami2: "",
            ani2: ""
          },
          vegetables: {
            status: [],
            vegetables: ""
          },
          pre_vegetables: {
            status: [],
            vegetables: ""
          },
          other: {
            status: [],
            type1: "",
            costother1: "",
            type2: "",
            costother2: ""
          },
          pre_other: {
            status: [],
            type1: "",
            costother1: "",
            type2: "",
            costother2: ""
          }
        },
        ex_farm_job: {
          fertilizer: {
            status: [],
            fertilizer: ""
          },
          wage: {
            status: [],
            wage: ""
          },
          rice: {
            status: [],
            rice: ""
          },
          vegetables: {
            status: [],
            vege: ""
          },
          animal_feed: {
            status: [],
            animal_feed: ""
          },
          pre_fertilizer: {
            status: [],
            fertilizer: ""
          },
          pre_wage: {
            status: [],
            wage: ""
          },
          pre_rice: {
            status: [],
            rice: ""
          },
          pre_vegetables: {
            status: [],
            vege: ""
          },
          pre_animal_feed: {
            status: [],
            animal_feed: ""
          },
          pre_other: {
            status: [],
            other1: {
              other: "",
              cost: ""
            },
            other2: {
              other: "",
              cost: ""
            },
            other3: {
              other: "",
              cost: ""
            }
          },
          other: {
            status: [],
            other1: {
              other: "",
              cost: ""
            },
            other2: {
              other: "",
              cost: ""
            },
            other3: {
              other: "",
              cost: ""
            }
          }
        }
      });
    },
    deleteVisa(counter) {
      this.data.families.splice(counter, 1);
    },
    addland() {
      this.data.land.push({
        area: "",
        area_size: {
          rai: "",
          ngan: "",
          wa: ""
        },
        location: "",
        plant: ""
      });
    },
    deleteland(counter) {
      this.data.land.splice(counter, 1);
    },
    showMap(location, counter) {
      if (location) {
        locations = [];
        number = counter;
        clickMap = 1;
        var k = 0;
        for (var i = 0; i < location.match(/{|}|\(|\)/g).length / 2; i++) {
          locations.push({
            lat: parseFloat(location.replace(/[()]/g, "").split(",")[k]),
            lng: parseFloat(location.replace(/[()]/g, "").split(",")[k + 1])
          });
          k += 2;
        }
      } else {
        number = counter;
        clickMap = 1;
      }
      this.status = "map";
    },
    getDataMap() {
      clickMap = 0;
      //this.statusMap = "default";
      this.status = "default";
      /* if(this.data.land.length >= 1){
        for(var i = 1; i <= this.data.land.length - 1 ; i ++){
          this.data.land[i].location = markers_locations
        }
      }else{
        this.data.land[0].location = markers_locations
        alert(this.data.land[0].location)*/
      //}
      alert(markers_locations);
      this.data.land[number].location = markers_locations.toString();
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
    showArrays(event) {
      // Since this polygon has only one path, we can call getPath() to return the
      // MVCArray of LatLngs.
      var vertices = getPath();
      var contentString =
        "<b>Bermuda Triangle polygon</b><br>" +
        "Clicked location: <br>" +
        event.latLng.lat() +
        "," +
        event.latLng.lng() +
        "<br>";
      // Iterate over the vertices.
      for (var i = 0; i < vertices.getLength(); i++) {
        var xy = vertices.getAt(i);
        contentString +=
          "<br>" + "Coordinate " + i + ":<br>" + xy.lat() + "," + xy.lng();
      }
      // Replace the info window's content and position.
      infoWindow.setContent(contentString);
      infoWindow.setPosition(event.latLng);
      infoWindow.open(map);
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
    }
  }
};
</script>

<style scope>
.div_edit {
  width: 100%;
  height: auto;
  margin: 0;
}
.saveData {
  width: auto;
  height: 50px;
  margin-top: 30px;
  margin-right: 30px;
  margin-left: 30px;
  margin-bottom: 30px;
  text-align: center;
}
.btnSave {
  width: 100%;
  height: 50px;
  background-color: #508944;
  color: #ffffff;
  border: 0px;
  border-radius: 50px;
  text-align: center;
  font-size: 22px;
  margin: auto;
}
#map {
  width: 100%;
  height: 500px;
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
.btnMap {
  width: 50%;
  height: 40px;
  border: 0px;
  border-radius: 50px;
  text-align: center;
  font-size: 18px;
  margin: auto;
  margin-bottom: 16px;
}
</style>
