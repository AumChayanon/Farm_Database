<template>
  <div class="bodyHome">
    <div
      class="rowH"
      style="height: 10%; padding:16px 0px 16px 0px;"
      v-if="this.status === 'default'"
    >
      <div class="columnH" style="width: 70%;" id="title_logo">
        <img src="../assets/kku2.png" class="logo" alt />
        <img src="../assets/an2.png" class="logo" alt />
        <img src="../assets/en2.png" class="logo" alt />
      </div>
      <div class="columnH" style="width: 20%; padding-top:15px">
        <div v-if="this.status === 'default'" style="float: right;">
          <MenuLogout />
        </div>
      </div>
    </div>

    <div
      class="rowH"
      v-if="this.status === 'default'"
      style=" height: 65%; border-radius: 25px 25px 0px 0px;background-color: #F9F9F9; padding: 10px;"
    >
      <div class="columnH" style="height: 100%; width: 100%; padding: 0px 8px 0px 8px">
        <div
          style="text-align: center; width: 100%; border-radius: 50px; backgrou-color: #F9F9F9; box-shadow: -5px -5px 5px #ffffff, 5px 5px 10px #dbdada;"
        >
          <h4 style="padding: 16px 0px 16px 0px; color: #528123;">เก็บข้อมูลประชากร</h4>
        </div>

        <div>
          <h4 style="padding: 16px 0px 0px 16px;">สรุป</h4>
          <div class="row" style="padding: 0px 0px 0px 16px; text-align: center;">
            <div class="col">
              <div class="button button3" v-on:click="showPeople">
                <svg
                  id="Capa_1"
                  enable-background="new 0 0 512 512"
                  height="30"
                  viewBox="0 0 512 512"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="m316 306c0-33.084-26.916-60-60-60s-60 26.916-60 60 26.916 60 60 60 60-26.916 60-60zm-60 40c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z"
                    />
                    <path
                      d="m152 306c0-33.084-26.916-60-60-60s-60 26.916-60 60 26.916 60 60 60 60-26.916 60-60zm-60 40c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z"
                    />
                    <path
                      d="m480 306c0-33.084-26.916-60-60-60s-60 26.916-60 60 26.916 60 60 60 60-26.916 60-60zm-60 40c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z"
                    />
                    <path
                      d="m420 366c-35.894 0-66.923 20.77-82 49.47-15.038-28.626-45.99-49.47-82-49.47-35.894 0-66.923 20.77-82 49.47-15.038-28.626-45.99-49.47-82-49.47-49.854 0-92 40.334-92 90v46c0 5.522 4.478 10 10 10h492c5.522 0 10-4.478 10-10v-46c0-49.662-42.143-90-92-90zm-164 20c39.028 0 72 32.056 72 70v36h-144v-36c0-37.944 32.972-70 72-70zm-236 70c0-37.944 32.972-70 72-70s72 32.056 72 70v36h-144zm472 36h-144v-36c0-37.944 32.972-70 72-70s72 32.056 72 70z"
                    />
                    <path
                      d="m256 60c-16.542 0-30 13.458-30 30s13.458 30 30 30 30-13.458 30-30-13.458-30-30-30zm0 40c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10z"
                    />
                    <path
                      d="m146 90c0 16.542 13.458 30 30 30s30-13.458 30-30-13.458-30-30-30-30 13.458-30 30zm40 0c0 5.514-4.486 10-10 10s-10-4.486-10-10 4.486-10 10-10 10 4.486 10 10z"
                    />
                    <path
                      d="m366 90c0-16.542-13.458-30-30-30s-30 13.458-30 30 13.458 30 30 30 30-13.458 30-30zm-40 0c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10-10-4.486-10-10z"
                    />
                    <circle cx="256" cy="10" r="10" />
                    <path
                      d="m266.829 166.013-10.829 24.907-10.829-24.907c-1.588-3.652-5.19-6.013-9.171-6.013h-100c-38.599 0-70-31.401-70-70s31.401-70 70-70h75c5.522 0 10-4.478 10-10s-4.478-10-10-10h-75c-49.626 0-90 40.374-90 90s40.374 90 90 90h93.443l17.386 39.987c1.588 3.651 5.189 6.013 9.171 6.013s7.583-2.361 9.171-6.013l17.386-39.987h93.443c49.626 0 90-40.374 90-90s-40.374-90-90-90h-75c-5.522 0-10 4.478-10 10s4.478 10 10 10h75c38.599 0 70 31.401 70 70s-31.401 70-70 70h-100c-3.981 0-7.583 2.361-9.171 6.013z"
                    />
                  </g>
                </svg>
              </div>
              <p>ประชากร</p>
            </div>

            <div class="col">
              <div class="button button3" v-on:click="showJob">
                <div>
                  <svg
                    id="Layer_3"
                    enable-background="new 0 0 64 64"
                    height="30"
                    viewBox="0 0 64 64"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="m16 56h2v2h-2z" />
                      <path d="m38 56h2v2h-2z" />
                      <path
                        d="m28 35c-1.654 0-3-1.346-3-3h-2c0 2.757 2.243 5 5 5s5-2.243 5-5h-2c0 1.654-1.346 3-3 3z"
                      />
                      <path
                        d="m56 50.026v-7.026c0-.552-.447-1-1-1h-1v-6.184c1.161-.414 2-1.514 2-2.816v-6h-2v6c0 .551-.448 1-1 1s-1-.449-1-1v-6h-2v6c0 1.302.839 2.402 2 2.816v6.184h-1c-.553 0-1 .448-1 1v6h-.591c-1.756-5.924-7.154-10-13.409-10h-.826c2.967-1.781 5.226-4.619 6.237-8h.09c2.481 0 4.5-2.019 4.5-4.5 0-2.31-1.756-4.197-4-4.449v-.051h4c.553 0 1-.448 1-1v-4c0-.552-.447-1-1-1h-3c0-8.271-6.729-15-15-15s-15.001 6.729-15.001 15h-3c-.553 0-1 .448-1 1v4c0 .552.447 1 1 1h4v.051c-2.244.252-4 2.139-4 4.449 0 2.481 2.019 4.5 4.5 4.5h.09c1.01 3.381 3.269 6.219 6.237 8h-.827c-7.72 0-14 6.28-14 14v9c0 .552.447 1 1 1h42 4c2.757 0 5-2.243 5-5v-4c0-1.627-.793-3.061-2-3.974zm-4-6.026h2v5.101c-.323-.066-.658-.101-1-.101h-1zm-4.543 5.441c-.869.526-1.457 1.471-1.457 2.559 0 .771.301 1.468.78 2-.48.532-.78 1.229-.78 2s.301 1.468.78 2c-.48.532-.78 1.229-.78 2 0 .352.072.686.184 1h-2.184v-16.955c1.587 1.418 2.799 3.262 3.457 5.396zm-24.926-8.441 3.892 4.67-3.839 1.92-2.197-6.59zm8.334 0-2.865 3.438-2.865-3.438zm4.748 0-2.197 6.59-3.839-1.92 3.892-4.67zm-14.561 8.316c.091.275.298.497.565.607.123.052.253.077.383.077.153 0 .307-.035.447-.105l5.553-2.777 5.553 2.776c.14.071.294.106.447.106.13 0 .26-.025.383-.076.268-.111.475-.333.565-.607l2.73-8.191c.107.015.216.023.321.041v10.833h-19.999v-10.819c.107-.018.215-.034.323-.049zm-4.052 4.684h22c.553 0 1-.448 1-1v-11.323c.699.245 1.365.558 2 .923v18.4h-28v-18.376c.633-.367 1.301-.675 2-.924v11.3c0 .552.447 1 1 1zm27-27.5c0 1.26-.94 2.295-2.154 2.465.091-.644.154-1.296.154-1.965v-2.949c1.14.232 2 1.242 2 2.449zm-16-23.5c7.168 0 13 5.832 13 13h-26c0-7.168 5.832-13 13-13zm-17 15h34v2h-34zm1 8.5c0-1.207.86-2.217 2-2.449v2.949c0 .669.063 1.321.154 1.965-1.214-.17-2.154-1.205-2.154-2.465zm4 .5v-5h24v5c0 6.617-5.383 12-12 12s-12-5.383-12-12zm-8 26c0-3.542 1.552-6.72 4-8.919v16.919h-4zm48 5c0 1.654-1.346 3-3 3h-4c-.552 0-1-.449-1-1s.448-1 1-1h3v-2h-3c-.552 0-1-.449-1-1s.448-1 1-1h3v-2h-3c-.552 0-1-.449-1-1s.448-1 1-1h4c1.654 0 3 1.346 3 3z"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <p>อาชีพ</p>
            </div>

            <div class="col">
              <div class="button button3" v-on:click="showPlant">
                <svg
                  id="Capa_1"
                  enable-background="new 0 0 512 512"
                  height="30"
                  viewBox="0 0 512 512"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="m508.132 333.502c-13.855-10.759-35.798-16.702-65.219-17.663-20.315-.665-43.971 1.247-66.162 5.28-9.085-24.535-26.16-43.96-48.764-55.228-25.431-12.678-54.947-13.682-83.109-2.828-4.641 1.789-7.262 6.715-6.151 11.563.056.244.121.482.178.725-18.835-3.572-38.863-1.666-58.034 5.731-4.639 1.79-7.258 6.715-6.148 11.561.056.244.121.484.178.727-18.827-3.568-38.854-1.663-58.031 5.727-4.643 1.789-7.264 6.72-6.15 11.569.056.242.12.479.177.72-18.826-3.569-38.844-1.663-58.006 5.73-4.639 1.79-7.258 6.715-6.148 11.561 3.508 15.323 9.876 29.057 18.473 40.647-27.706 10.075-50.621 31.414-64.261 60.402-2.117 4.499-.607 9.87 3.544 12.606 20.198 13.314 42.659 20.133 64.919 20.132 7.172 0 14.321-.735 21.369-2.162-1.311 14.395.406 29.459 5.4 44.384 1.384 4.136 5.248 6.828 9.477 6.828.599 0 1.206-.054 1.813-.166 20.22-3.714 38.289-12.55 52.482-25.413.08.244.151.489.233.734 1.384 4.136 5.248 6.828 9.477 6.828.599 0 1.206-.054 1.813-.166 20.222-3.715 38.282-12.547 52.458-25.401.078.239.147.477.227.716 1.382 4.139 5.248 6.834 9.479 6.833.598 0 1.205-.054 1.812-.165 20.237-3.714 38.307-12.546 52.487-25.403.078.239.147.478.227.717 1.382 4.139 5.248 6.834 9.479 6.833.598 0 1.205-.054 1.812-.165 28.887-5.302 53.119-20.818 68.231-43.692 14.02-21.22 19.047-47.012 14.362-73.117 43.014-7.571 93.439-7.012 113.813 8.809 4.362 3.387 10.645 2.597 14.031-1.765 3.384-4.36 2.594-10.642-1.768-14.029zm-389.194.747c9.801 20.398 25.401 36.43 44.612 46.117l-28.163 7.929c-31.107-3.182-56.419-24.416-66.714-55.37 17.106-4.777 34.567-4.332 50.265 1.324zm-23.705 104.332c-23.437 7.23-49.047 4.243-72.026-8.311 13.086-22.74 33.382-38.661 57.126-44.702 9.999 8.567 21.644 15.027 34.44 18.917-8.892 9.993-15.466 21.576-19.54 34.096zm59.671 23.651c-10.432 13.017-25.104 22.518-42.215 27.388-7.333-31.784 3.218-63.114 28.117-82.073l28.149-7.925c-11.352 18.288-16.314 40.101-14.051 62.61zm-22.248-147.323c17.117-4.776 34.579-4.333 50.272 1.317 9.792 20.402 25.393 36.436 44.614 46.123l-28.157 7.927c-31.096-3.183-56.413-24.415-66.729-55.367zm86.237 129.297c-10.411 13.021-25.078 22.525-42.199 27.397-7.333-31.787 3.219-63.119 28.123-82.078l28.145-7.924c-11.352 18.286-16.32 40.097-14.069 62.605zm-22.239-147.316c17.11-4.78 34.574-4.337 50.279 1.319 9.792 20.401 25.391 36.434 44.611 46.122l-28.159 7.928c-31.119-3.188-56.437-24.42-66.731-55.369zm86.244 129.298c-10.412 13.022-25.088 22.526-42.221 27.398-7.313-31.792 3.249-63.128 28.148-82.082l28.143-7.923c-11.353 18.286-16.321 40.098-14.07 62.607zm-22.239-147.314c20.15-5.629 40.601-3.959 58.406 4.917 17.304 8.625 30.569 23.377 38.07 42.073l-29.753 8.377c-31.115-3.19-56.429-24.421-66.723-55.367zm90.344 123.708c-10.534 15.944-26.772 27.447-46.321 32.991-7.316-31.797 3.248-63.135 28.154-82.09l29.709-8.364c3.436 20.642-.582 40.874-11.542 57.463z"
                    />
                    <path
                      d="m16.135 94.186c20.409-15.848 70.827-16.401 113.81-8.81-1.708 9.497-2.142 19.011-1.266 28.347.516 5.499 5.394 9.534 10.89 9.023 5.499-.516 9.538-5.392 9.023-10.89-.672-7.171-.374-14.498.854-21.845l29.735 8.372c24.897 18.959 35.447 50.288 28.118 82.07-6.213-1.763-12.112-4.125-17.615-7.057-4.875-2.597-10.931-.751-13.528 4.124-2.597 4.874-.75 10.931 4.124 13.528 9.865 5.255 20.704 9.002 32.218 11.136 2.515.467 5.155-.064 7.295-1.463 2.182-1.426 3.447-3.498 4.243-5.929 14.192 12.863 32.261 21.699 52.482 25.413 2.51.462 5.144-.07 7.28-1.466 2.181-1.426 3.447-3.498 4.242-5.929 14.195 12.867 32.265 21.703 52.485 25.413 2.51.461 5.143-.071 7.279-1.468 2.181-1.426 3.446-3.498 4.242-5.928 14.195 12.867 32.264 21.703 52.484 25.413 4.84.888 9.733-2.004 11.291-6.67 4.981-14.927 6.69-29.989 5.377-44.38 7.037 1.425 14.175 2.158 21.343 2.158 22.247-.001 44.726-6.816 64.956-20.12 4.16-2.736 5.674-8.115 3.551-12.619-13.664-28.987-36.586-50.325-64.278-60.399 8.61-11.597 14.986-25.341 18.494-40.673 1.11-4.85-1.514-9.778-6.157-11.564-19.206-7.387-39.231-9.285-58.03-5.709.059-.249.125-.494.182-.745 1.11-4.85-1.515-9.778-6.158-11.564-19.204-7.387-39.229-9.285-58.03-5.709.059-.249.125-.494.183-.745 1.11-4.85-1.515-9.778-6.158-11.564-19.202-7.386-39.224-9.284-58.022-5.71.056-.239.12-.474.175-.714 1.11-4.848-1.511-9.774-6.152-11.563-28.15-10.848-57.654-9.849-83.077 2.813-22.614 11.263-39.702 30.692-48.8 55.236-22.172-4.039-45.821-5.953-66.145-5.285-29.41.968-51.348 6.914-65.207 17.676-4.362 3.387-5.152 9.669-1.765 14.032 3.387 4.361 9.67 5.152 14.032 1.764zm255.166 104.287c-17.11-4.87-31.782-14.371-42.215-27.388 2.264-22.508-2.697-44.319-14.048-62.607l28.11 7.914c24.924 18.954 35.487 50.288 28.153 82.081zm64.003 18.019c-17.108-4.868-31.779-14.369-42.214-27.39 2.263-22.51-2.701-44.321-14.058-62.607l28.125 7.918c24.914 18.951 35.475 50.284 28.147 82.079zm63.999 18.016c-17.106-4.869-31.778-14.371-42.211-27.392 2.259-22.508-2.706-44.318-14.058-62.601l28.134 7.921c24.892 18.937 35.449 50.265 28.135 82.072zm89.48-59.354c-23.021 12.551-48.638 15.537-72.04 8.309-4.076-12.525-10.652-24.109-19.546-34.099 12.795-3.893 24.439-10.352 34.439-18.913 23.734 6.036 44.038 21.957 57.147 44.703zm-45.457-97.361c-10.292 30.944-35.615 52.183-66.744 55.389l-28.171-7.931c19.224-9.689 34.827-25.719 44.622-46.11 15.666-5.678 33.135-6.131 50.293-1.348zm-64.004-18.018c-10.292 30.942-35.611 52.18-66.738 55.389l-28.175-7.932c19.222-9.689 34.824-25.718 44.619-46.109 15.666-5.678 33.137-6.129 50.294-1.348zm-64.005-18.017c-10.291 30.939-35.608 52.178-66.731 55.388l-28.167-7.93c19.221-9.689 34.823-25.721 44.616-46.114 15.663-5.674 33.13-6.125 50.282-1.344zm-122.384-13.091c17.798-8.864 38.239-10.529 58.379-4.905-10.292 30.929-35.605 52.161-66.718 55.367l-29.763-8.38c7.512-18.703 20.79-33.459 38.102-42.082z"
                    />
                    <path
                      d="m148.704 144.817c-4.94 2.47-6.942 8.477-4.472 13.416l.028.057c1.749 3.497 5.262 5.507 8.918 5.507 1.508 0 3.041-.342 4.484-1.063 4.94-2.47 6.928-8.505 4.458-13.445-2.47-4.939-8.475-6.942-13.416-4.472z"
                    />
                  </g>
                </svg>
              </div>
              <p>พืช</p>
            </div>
          </div>
        </div>
        <hr />
        <h4 style="padding-left:16px;">ข้อมูล</h4>
        <div class="showData">
          <div class="row">
            <div
              class="col"
              style="max-width:65%; margin: 30px 0px 0px 0px; text-align: center; color: #528123;"
            >
              <svg
                id="outline"
                height="110"
                viewBox="0 0 512 512"
                width="110"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m120 264h24v16h-24z" />
                <path d="m176 304h24v16h-24z" />
                <path d="m120 304h40v16h-40z" />
                <path d="m56 304h48v16h-48z" />
                <path d="m104 344h96v16h-96z" />
                <path d="m56 344h32v16h-32z" />
                <path d="m152 384h48v16h-48z" />
                <path d="m56 384h80v16h-80z" />
                <path d="m104 424h48v16h-48z" />
                <path d="m56 424h32v16h-32z" />
                <path
                  d="m480 240a8.00008 8.00008 0 0 0 -8-8h-48a8.00008 8.00008 0 0 0 -8 8v40h-40a8.00008 8.00008 0 0 0 -8 8v40h-40a8.00008 8.00008 0 0 0 -8 8v40h-40a8.00008 8.00008 0 0 0 -8 8v48h-57.37622a24 24 0 1 0 0 16h9.37622v24a8.00917 8.00917 0 0 1 -8 8h-176a8.00917 8.00917 0 0 1 -8-8v-184h40a24.0275 24.0275 0 0 0 24-24v-40h120a8.00917 8.00917 0 0 1 8 8v8h16v-8a24.0275 24.0275 0 0 0 -24-24h-121.37305a23.84385 23.84385 0 0 0 -16.9707 7.02979l-54.62695 54.627a23.84254 23.84254 0 0 0 -7.0293 16.97065v185.37256a24.0275 24.0275 0 0 0 24 24h176a24.0275 24.0275 0 0 0 24-24v-24h256v-16h-16zm-400-4.686v28.686a8.00917 8.00917 0 0 1 -8 8h-28.686zm112 212.686a8 8 0 1 1 8-8 8.00917 8.00917 0 0 1 -8 8zm96-56h32v40h-32zm48-48h32v88h-32zm48-48h32v136h-32zm48 136v-184h32v184z"
                />
                <path
                  d="m40 216a23.99448 23.99448 0 0 0 21.65479-34.3407l24.00439-24.00464a23.9887 23.9887 0 0 0 32.9646-13.65466h34.75244a23.99529 23.99529 0 0 0 46.29028-4.03479l45.179-38.72473a24.00054 24.00054 0 1 0 -10.88281-11.745l-38.27324 32.80552a23.98335 23.98335 0 0 0 -42.31323 5.699h-34.75244a23.99718 23.99718 0 1 0 -44.27857 18.3407l-24.00439 24.00464a23.99872 23.99872 0 1 0 -10.34082 45.65466zm216-144a8 8 0 1 1 -8 8 8.00917 8.00917 0 0 1 8-8zm-80 56a8 8 0 1 1 -8 8 8.00917 8.00917 0 0 1 8-8zm-80 0a8 8 0 1 1 -8 8 8.00917 8.00917 0 0 1 8-8zm-56 56a8 8 0 1 1 -8 8 8.00917 8.00917 0 0 1 8-8z"
                />
                <path
                  d="m329.56543 203.12067-52.87891 52.87933h-70.06274a24 24 0 1 0 0 16h17.37622v144h16v-144h40a8.00076 8.00076 0 0 0 5.65723-2.34326l57.73777-57.73774a104.28417 104.28417 0 1 0 -13.82959-8.79828zm-145.56543 68.87933a8 8 0 1 1 8-8 8.00917 8.00917 0 0 1 -8 8zm272.17041-91.85022-46.35547-52.14978h69.81738a87.7058 87.7058 0 0 1 -23.46191 52.14978zm23.46191-68.14978h-79.63232v-79.63251a88.14413 88.14413 0 0 1 79.63232 79.63251zm-95.63232-79.63251v87.63251a7.95881 7.95881 0 0 0 2.02734 5.30908l-.00683.00586 58.19726 65.47211a87.98307 87.98307 0 1 1 -60.21777-158.41956z"
                />
              </svg>
            </div>
            <div class="col" style="max-width:35%; padding-top: 5%">
              <h3>แสดง</h3>
              <h3>ข้อมูล</h3>
              <button type="button" class="btnClick" v-on:click="onClickShow">กด</button>
            </div>
          </div>
        </div>
        <hr />
        <h4 style="padding-left:16px;">เพิ่มข้อมูล</h4>
        <div class="addData">
          <button type="button" class="btnOk" v-on:click="openFormsPage">เพิ่มข้อมูล</button>
        </div>
      </div>
    </div>


    <!-- Show page forms-->
    <div v-else-if="this.status === 'forms'" id="slide2">
      <div class="row">
        <div class="col" style="max-width: 70%; height: 0px; padding: 16px 0px 0px 50px;">
          <h3>กรอกข้อมูล</h3>
        </div>
        <div class="col" style="max-width: 20%;  height: 0px;">
          <button
            type="button"
            class="btn btn-secondary btn-lg"
            v-on:click="cancel"
            style="float: right; box-shadow: -5px -5px 5px #ffffff, 5px 5px 10px #dbdada;"
          >X</button>
        </div>
      </div>

      <Forms :user="this.user" @close_Forms="closeForms" :api="this.api"/>
    </div>

    <!-- Show data -->
    <div v-else-if="this.status === 'show'" id="slide2">
      <button
        type="button"
        class="btn btn-secondary btn-lg"
        v-on:click="cancel"
        style="float: right; box-shadow: -5px -5px 5px #ffffff, 5px 5px 10px #dbdada;"
      >X</button>
      <ShowData :data_conclude="this.data_conclude" :data="this.data" :statusUser="this.user" :api="this.api"/>
    </div>

    <div v-else-if="this.status === 'showPlant'" id="slide2">
      <button
        type="button"
        class="btn btn-secondary btn-lg"
        v-on:click="cancel"
        style="float: right; box-shadow: -5px -5px 5px #ffffff, 5px 5px 10px #dbdada;"
      >X</button>
      <ShowPlant :data="this.showDataPlant" />
    </div>

    <div v-else-if="this.status === 'showPeople'" id="slide2">
      <button
        type="button"
        class="btn btn-secondary btn-lg"
        v-on:click="cancel"
        style="float: right; box-shadow: -5px -5px 5px #ffffff, 5px 5px 10px #dbdada;"
      >X</button>
      <ShowPeople
        :data="this.showDataPeople"
        :countHome="this.countHome"
        :countPeople="this.countPeople"
      />
    </div>

    <div v-else-if="this.status === 'showJob'" id="slide2">
      <button
        type="button"
        class="btn btn-secondary btn-lg"
        v-on:click="cancel"
        style="float: right; box-shadow: -5px -5px 5px #ffffff, 5px 5px 10px #dbdada;"
      >X</button>
      <ShowJob :data="this.showDataJob" :pre_data="this.showDataPre_Job" />
    </div>
    <div id="load" v-if="this.status_load === 'load'">
      <sync-loader
        style="display: block;
      margin-left: auto;
      margin-right: auto;
      width: 40%;
      margin-top: 400px"
      ></sync-loader>
    </div>
  </div>
</template>

<script>
import Forms from "../components/Forms";
import MenuLogout from "../components/Menu_Logout";
import ShowData from "../components/ShowData";
import ShowPeople from "../components/ShowPeople";
import ShowJob from "../components/ShowJob";
import ShowPlant from "../components/Showplant";
import axios from "axios";
import SyncLoader from "vue-spinner/src/SyncLoader.vue";
import * as firebase from "firebase";

export default {
  name: "Home",
  components: {
    Forms,
    MenuLogout,
    ShowData,
    ShowPeople,
    ShowJob,
    SyncLoader,
    ShowPlant,
  },
  data: function () {
    return {
      api:{
        data:"http://182.52.57.59:37017/api/data",
        img:"http://182.52.57.59:37017/api/img"
      },
      status_load: "load",
      status: "default",
      data_house: [],
      data_people: [],
      data_peo: [],
      data_land: [],
      data_all: [],
      data_income: [],
      db_AP: [],
      plant: [],
      all_data: [],
      user: "",
      showDataPeople: [],
      showDataPlant: [],
      showDataJob: [],
      showDataPre_Job: [],
      data: [],
      data_conclude: [],
      countHome: 0,
      countPeople: 0,
    };
  },
  async created() {
    this.status_load = "load";
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser.email === "adminhab@admin.com") {
        this.user = "adminhab";
      } else {
        var str = firebaseUser.email;
        this.user = str.split("@", 1)[0];
      }
    });
   
  },
  async mounted(){
    await this.getData()
    await console.log(this.data);
  },
  methods: {
    async getData(){
      await axios
      .get(this.api.data)
      .then((response) => {
        this.data = response.data;
        if(this.data){
          this.status_load = "default";
        }
      })
      .catch((e) => {
        this.errors.push(e);
      });
    },
    closeForms(e) {
      this.status = e;
    },
    openFormsPage() {
      this.status = "forms";
    },
    cancel() {
      this.status = "default";
      this.all_data = [];
      this.showDataPeople = [];
      this.showDataPlant = [];
      this.showDataJob = [];
      this.showDataPre_Job = [];
      this.data_conclude = [];
    },
    next() {
      this.$refs.flickity.next();
    },
    async showJob() {
      this.data = []
      await this.getData()
      var animal = 0;
      var field = 0;
      var mat = 0;
      var vegetables = 0;
      var other = 0;
      var pre_animal = 0;
      var pre_field = 0;
      var pre_mat = 0;
      var pre_vegetables = 0;
      var pre_other = 0;
      for (var k = 0; k < this.data.length; k++) {
        for (var m = 0; m < this.data[k].families.length; m++) {
          if (this.data[k].families[m].re_farm_job.animal.cost_ami1 !== "") {
            animal = animal + 1;
          }
          if (this.data[k].families[m].re_farm_job.animal.cost_ami2 !== "") {
            animal = animal + 1;
          }
          if (this.data[k].families[m].re_farm_job.field.kg !== "") {
            field = field + 1;
          }
          if (this.data[k].families[m].re_farm_job.mat.mat !== "") {
            mat = mat + 1;
          }
          if (
            this.data[k].families[m].re_farm_job.vegetables.vegetables !== ""
          ) {
            vegetables = vegetables + 1;
          }
          if (this.data[k].families[m].re_farm_job.other.costother1 !== "") {
            other = other + 1;
          }
          if (this.data[k].families[m].re_farm_job.other.costother2 !== "") {
            other = other + 1;
          }
          if (
            this.data[k].families[m].re_farm_job.pre_animal.cost_ami1 !== ""
          ) {
            pre_animal = pre_animal + 1;
          }
          if (
            this.data[k].families[m].re_farm_job.pre_animal.cost_ami2 !== ""
          ) {
            pre_animal = pre_animal + 1;
          }
          if (this.data[k].families[m].re_farm_job.pre_field.kg !== "") {
            pre_field = pre_field + 1;
          }
          if (this.data[k].families[m].re_farm_job.pre_mat.mat !== "") {
            pre_mat = pre_mat + 1;
          }
          if (
            this.data[k].families[m].re_farm_job.pre_vegetables.vegetables !==
            ""
          ) {
            pre_vegetables = pre_vegetables + 1;
          }
          if (
            this.data[k].families[m].re_farm_job.pre_other.costother1 !== ""
          ) {
            pre_other = pre_other + 1;
          }
          if (
            this.data[k].families[m].re_farm_job.pre_other.costother2 !== ""
          ) {
            pre_other = pre_other + 1;
          }
        }
      }
      await this.showDataJob.push(
        { job: "เลี้ยงสัตว์", num: animal },
        { job: "ทำนา", num: field },
        { job: "ทอเสื่อ", num: mat },
        { job: "ปลูกผัก", num: vegetables },
        { job: "อื่นๆ", num: other }
      );

      await this.showDataPre_Job.push(
        { job: "เลี้ยงสัตว์", num: pre_animal },
        { job: "ทำนา", num: pre_field },
        { job: "ทอเสื่อ", num: pre_mat },
        { job: "ปลูกผัก", num: pre_vegetables },
        { job: "อื่นๆ", num: pre_other }
      );

      await this.showDataJob.sort((t1, t2) => (t1.num > t2.num ? -1 : 1));
      await this.showDataPre_Job.sort((t1, t2) => (t1.num > t2.num ? -1 : 1));

      this.status = "showJob";
    },
    async showPeople() {
      this.data = []
      await this.getData()
      this.statusMap = "load";
      const district = [];
      this.countPeople = 0;
      this.countHome = this.data.length;
      for (var i = 0; i < this.countHome; i++) {
        district.push({
          district: this.data[i].address.district,
        });
      }
      var districttext = [...new Set(district.map(({ district }) => district))];
      for (var j = 0; j < districttext.length; j++) {
        var numdis = 0;
        for (var k = 0; k < this.countHome; k++) {
          if (districttext[j] === this.data[k].address.district) {
            numdis = numdis + this.data[k].families.length;
          }
        }
        this.countPeople = this.countPeople + numdis;
        this.showDataPeople.push({
          district: districttext[j],
          count_people: numdis,
        });
      }
      await this.showDataPeople.sort((t1, t2) =>
        t1.count_people > t2.count_people ? -1 : 1
      );

      this.status = "showPeople";
      this.statusMap = "default";
    },
    async showPlant() {
      this.data = []
      await this.getData()
      this.status = "showPlant";
      var name_plant = [];
      for (var i = 0; i < this.data.length; i++) {
        for (var j = 0; j < this.data[i].land.length; j++) {
          await name_plant.push({ ...this.data[i].land[j] });
        }
      }
      var plant_name = [...new Set(name_plant.map(({ plant }) => plant))];
      for (var k = 0; k < plant_name.length; k++) {
        var countPlant = 0;
        for (var l = 0; l < name_plant.length; l++) {
          if (name_plant[l].plant === plant_name[k]) {
            countPlant++;
          }
        }
        await this.showDataPlant.push({
          plant: plant_name[k],
          count: countPlant,
        });
      }
      await this.showDataPlant.sort((t1, t2) => (t1.count > t2.count ? -1 : 1));
    },
    previous() {
      this.$refs.flickity.previous();
    },
    async getDataAddress() {
      this.statusMap = "load";
      for (var i = this.data.length - 1; i >= 0; i--) {
        if (this.user === this.data[i].explorers.explorer) {
          this.data_conclude.push({
            key: this.data[i]._id,
            house_number: this.data[i].address.house_number,
            moo: this.data[i].address.moo,
            district: this.data[i].address.district,
            num_perople: this.data[i].families.length,
            explorers: this.data[i].explorers.name,
          });
        }
      }
      this.statusMap = "default";
    },
    async getDataAddressAdmin() {
      this.statusMap = "load";
      for (var i = this.data.length - 1; i >= 0; i--) {
        this.data_conclude.push({
          key: this.data[i]._id,
          house_number: this.data[i].address.house_number,
          moo: this.data[i].address.moo,
          district: this.data[i].address.district,
          num_perople: this.data[i].families.length,
          explorers: this.data[i].explorers.name,
        });
      }

      this.statusMap = "default";
    },
    async onClickShow() {
      this.data = []
      await this.getData()
      //var db_APL;
      this.db_AP = [];
      this.plant = [];
      if (this.user !== "adminhab") {
        await this.getDataAddress();
      } else {
        await this.getDataAddressAdmin();
      }
      this.status = "show";
    },
  },
};
</script>

<style scoped>
#title_logo {
  background-color: #7d9d3a;
  border-radius: 0px 50px 50px 0px;
  box-shadow: 0px 5px 5px #d3d3d3;
}
#load {
  width: 100%;
  height: 100%;
  margin: 0;
  position: absolute;
  top: 0px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.075);
}
.bodyHome {
  height: 100%;
  width: 100%;
  margin: 0;
  background-color: #f9f9f9;
  /*background-image: linear-gradient(to right, #6BA55F , #508944);*/
}
.columnH {
  float: left;
  height: 100%; /* Should be removed. Only for demonstration */
}

/* Clear floats after the columns */
.rowH {
  width: 100%;
  content: "";
  display: table;
  clear: both;
}
.logo {
  width: 70px;
  margin-left: 2px;
}
.showData {
  height: auto;
  margin: 0;
  background-color: #f9f9f9;
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 16px;
  box-shadow: -5px -5px 5px #ffffff, 5px 5px 10px #dbdada;
}
.addData {
  height: 8%;
  margin: 0;
  margin-left: 16px;
  margin-right: 16px;
}
.btnOk {
  width: 100%;
  height: 50px;
  background-image: linear-gradient(to right, #528123, #528123);
  color: #ffffff;
  border: 0px;
  border-radius: 50px;
  text-align: center;
  font-size: 18px;
  margin: auto;
  margin-bottom: 16px;
  box-shadow: -5px -5px 5px #ffffff, 5px 5px 10px #dbdada;
}
.btnClick {
  width: 70%;
  height: 40px;
  background-image: linear-gradient(to right, #528123, #528123);
  color: #ffffff;
  border: 0px;
  border-radius: 50px;
  text-align: center;
  font-size: 18px;
  margin: auto;
  margin-bottom: 16px;
}
.btnClick:hover {
  background-image: linear-gradient(to right, #ffffff, #ffffff);
  color: #528123;
}
.btnClick:active {
  background-image: linear-gradient(to right, #ffffff, #ffffff);
  color: #528123;
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
.btn-secondary:hover {
  color: #508944;
  border: 2px solid #508944;
}
.img_body {
  text-align: center;
  width: 30%;
}
.button {
  background-color: #f9f9f9;
  border-radius: 50%;
  color: #528123;
  padding: 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  box-shadow: -5px -5px 5px #ffffff, 5px 5px 10px #dbdada;
}
div.button:hover {
  background-color: #528123;
  color: #f9f9f9;
}
.button:active {
  background-color: #528123;
  color: #f9f9f9;
}
.col {
  padding: 0;
}
.button3 {
  border-radius: 8px;
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
h3 {
  font-size: 35px;
}
@media screen and (max-width: 1800px) {
  .img_body {
    text-align: center;
    width: 30%;
  }
}
@media screen and (max-width: 1100px) {
  .img_body {
    text-align: center;
    width: 80%;
  }
}
@media screen and (max-width: 500px) {
  .img_body {
    padding-top: 5%;
    width: 100%;
  }
  h3 {
    font-size: 30px;
  }
  .showData {
    margin-top: 16px;
    height: 28%;
  }
}
div.VueCarousel-dot-container {
  margin-top: 0px;
}
</style>
