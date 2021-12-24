
const modalFormTag = {
    props:['title', 'id', 'funcao'],
    template:`
    <div class="modal fade" :id="id" tabindex="-1" :aria-labelledby="title" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" :id="title">{{ title }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" :onclick="funcao">Salvar</button>
            </div>
          </div>
        </div>
      </div>
    `,
}

const textinput = {
    data:() => ({
        //transportadoras:transportadoras,
    }),
    props:['label', 'id', 'list',],
    template:`
    <div class="mb-3">
        <label :for="id" class="form-label">{{ label }}</label>
        <input type="text" :list="list" class="form-control" :id="id">
        <slot></slot>
    </div>
    `,
}

Vue.component('vector-logo',{
    template:`<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="110" height="18" viewBox="0 0 110 18">
    <title>vector-logo-horizontal</title>
    <g id="Grupo_2387" data-name="Grupo 2387">
      <g id="Grupo_2383" data-name="Grupo 2383">
        <path id="Trazado_1060" data-name="Trazado 1060" d="M14.62,4.33H12.91a.38.38,0,0,0-.35.22L9.39,10.8,7.2,4.59a.41.41,0,0,0-.38-.26H5.1a.4.4,0,0,0-.39.41.25.25,0,0,0,0,.12L8.1,14a.4.4,0,0,0,.37.25H9.82a.39.39,0,0,0,.35-.21L15,4.91a.41.41,0,0,0-.17-.54.58.58,0,0,0-.18,0Z" style="fill:#01529b"/>
        <path id="Trazado_1061" data-name="Trazado 1061" d="M22.71,4.33H16.58a.39.39,0,0,0-.39.37l-.71,9.16a.38.38,0,0,0,.36.42H22a.4.4,0,0,0,.4-.36l.1-1.31a.41.41,0,0,0-.37-.43H18l.15-1.9H22a.4.4,0,0,0,.4-.36l.11-1.31a.4.4,0,0,0-.37-.43H18.33l.14-1.75h4.14a.4.4,0,0,0,.4-.37l.09-1.31a.4.4,0,0,0-.37-.42h0Z" style="fill:#01529b"/>
        <path id="Trazado_1062" data-name="Trazado 1062" d="M31.19,4.51a6.15,6.15,0,0,0-1.91-.3,5.13,5.13,0,0,0-2.65.67A4.55,4.55,0,0,0,24.86,6.8a6.22,6.22,0,0,0-.62,2.84,5.43,5.43,0,0,0,.55,2.5,4,4,0,0,0,1.6,1.67,4.82,4.82,0,0,0,2.41.58,5.45,5.45,0,0,0,1.88-.31,4.19,4.19,0,0,0,1.51-.89.42.42,0,0,0,.1-.43l-.46-1.21a.42.42,0,0,0-.53-.22l-.07,0a3.94,3.94,0,0,1-2.32.88,2,2,0,0,1-1.61-.64,3,3,0,0,1-.58-2,3.88,3.88,0,0,1,.7-2.47,2.28,2.28,0,0,1,1.91-.83,3.15,3.15,0,0,1,1.18.2,3.82,3.82,0,0,1,1.07.66.4.4,0,0,0,.56-.06.21.21,0,0,1,0-.06l.65-1.2a.41.41,0,0,0-.08-.49A4.49,4.49,0,0,0,31.19,4.51Z" style="fill:#01529b"/>
        <path id="Trazado_1063" data-name="Trazado 1063" d="M41.87,4.33H34.21a.39.39,0,0,0-.39.37l-.1,1.36a.39.39,0,0,0,.37.42h2.59l-.58,7.38a.39.39,0,0,0,.36.42h1.7a.4.4,0,0,0,.4-.36l.58-7.43h2.62a.41.41,0,0,0,.4-.37l.1-1.36a.42.42,0,0,0-.38-.43h0Z" style="fill:#01529b"/>
        <path id="Trazado_1064" data-name="Trazado 1064" d="M49.82,4.79a5.05,5.05,0,0,0-2.47-.58,4.77,4.77,0,0,0-2.55.69,4.48,4.48,0,0,0-1.7,1.93,6.48,6.48,0,0,0-.59,2.81,5.38,5.38,0,0,0,.57,2.52,4,4,0,0,0,1.65,1.66,5,5,0,0,0,2.45.58,4.76,4.76,0,0,0,2.55-.68,4.6,4.6,0,0,0,1.7-1.93A6.41,6.41,0,0,0,52,9a5.33,5.33,0,0,0-.56-2.51A4,4,0,0,0,49.82,4.79Zm-.92,6.67h0a2.29,2.29,0,0,1-3.22.3l-.13-.12a3,3,0,0,1-.58-2,4.07,4.07,0,0,1,.66-2.49,2.28,2.28,0,0,1,3.2-.32c.05,0,.11.09.15.14a3,3,0,0,1,.59,2,4.08,4.08,0,0,1-.67,2.49Z" style="fill:#01529b"/>
        <path id="Trazado_1065" data-name="Trazado 1065" d="M61.09,11a2.91,2.91,0,0,0-.49-1h0l0,0a2.76,2.76,0,0,0,1-.8,3.19,3.19,0,0,0,.61-2,2.68,2.68,0,0,0-.92-2.13,3.67,3.67,0,0,0-2.45-.76H54.76a.4.4,0,0,0-.39.37l-.71,9.16a.39.39,0,0,0,.36.42H55.7a.4.4,0,0,0,.4-.36l.26-3.44h1.23a1.31,1.31,0,0,1,.68.12.54.54,0,0,1,.26.35L59.46,14a.38.38,0,0,0,.37.28h1.75a.4.4,0,0,0,.4-.4.43.43,0,0,0,0-.11ZM58.43,8.4H56.52l.15-2h2c1.05,0,1.19.45,1.19.9S59.67,8.4,58.43,8.4Z" style="fill:#01529b"/>
      </g>
      <path d="M90.67,10.56l-.3,1.72H78.94L76,17.73a.37.37,0,0,1-.33.22.36.36,0,0,1-.33-.21l-3-7.95a.39.39,0,0,1,0-.14.36.36,0,0,1,.36-.36h17.4Z" style="fill:#c1bfbf"/>
      <path d="M104.93,14.56h-.18c0-3.64-.15-4.63-.69-5.22a13,13,0,0,0-3-1.66c-.5-.23-1.06-.49-1.15-.56S98.67,5,98.11,3.93l-.58-1.06A3.71,3.71,0,0,0,93.83.59H87a.35.35,0,0,0-.3.17.38.38,0,0,0,0,.36l3.44,8.17.54,1.27-.3,1.72-.85,4.92a.67.67,0,0,0,.63.73h5.23a.37.37,0,0,0,.36-.37,3.14,3.14,0,0,1,6.28-.16v.16a.37.37,0,0,0,.36.37h2a.36.36,0,0,0,.36-.37v-.84h.18a.36.36,0,0,0,.36-.37V14.93A.36.36,0,0,0,104.93,14.56Zm-9-6.74H92.8a.55.55,0,0,1-.53-.4L91.2,4a.54.54,0,0,1,.39-.66.32.32,0,0,1,.14,0h1.91a2.21,2.21,0,0,1,1.58.78,4.63,4.63,0,0,1,1.22,3.23A.53.53,0,0,1,95.9,7.82Z" style="fill:#01529b"/>
      <path id="Trazado_1069" data-name="Trazado 1069" d="M84.66.76A.38.38,0,0,0,84.35.6H69.52a.36.36,0,0,0-.36.36.32.32,0,0,0,0,.14L70,3.45a.36.36,0,0,0,.34.22H83.13a.38.38,0,0,0,.34-.22l1.22-2.34A.37.37,0,0,0,84.66.76Z" style="fill:#c1bfbf"/>
      <path id="Trazado_1070" data-name="Trazado 1070" d="M86.26,5.08A.38.38,0,0,0,86,4.92H71.12a.36.36,0,0,0-.36.36.32.32,0,0,0,0,.14l.85,2.34A.37.37,0,0,0,72,8H84.73a.38.38,0,0,0,.34-.22l1.22-2.34A.36.36,0,0,0,86.26,5.08Z" style="fill:#c1bfbf"/>
    </g>
  </svg>`
})


const customtable = {
  // 'tablename' deve ser o nome do 'fullmodel'
  props:['filteredmodel', 'fullmodel', 'tablefields', 'tablename', 'options'],
  template:`
  <div class="container" :id="tablename+'-table-container'">
    <div class="container m-2">
      <label :for="'filter-'+tablename+'-input'">Pesquisar</label>
      <input type="text" :id="'filter-'+tablename+'-input'" @keyup="$emit('filtrar', tablename, '#filter-'+tablename+'-input')">
    </div>
    <table class="table table-bordered" :id="tablename+'-table'">
      <thead>
        <tr :id="tablename+'-thead-tr'">
          <th 
          v-for="field in tablefields"
          scope="col"
          data-order="a" 
          role="button" 
          :id="tablename+'-table-'+field"
          @click="$emit('ordenar', filteredmodel, field, tablename+'-table-'+field)">
          {{field}}
          </th>
          
          <th v-if="options" scope="col">
            Options
          </th>

        </tr>
      </thead>
      <tbody :id="tablename+'-table-body'">
        <tr v-for="objeto in filteredmodel">
          <td v-for="field in tablefields">{{ objeto[field] }}</td>

          <td v-if="options">
            <button class="btn btn-sm border" taget="_blank">
              <vector-logo></vector-logo>
            </button>
            <button  class="btn btn-sm btn-primary"><i class="bi bi-pencil-fill"></i></button>
            <button class="btn btn-sm btn-danger"><i class="bi bi-x-lg"></i></button>
          </td>

        </tr>
      </tbody>
    </table>

    <div class="container" style="text-align:center;">
      <button class="btn btn-sm btn-primary" @click="$emit('anterior')">Anterior</button>
      <button class="btn btn-sm btn-primary" @click="$emit('proxima')">Proxima</button>
    </div>

  </div>`
}
