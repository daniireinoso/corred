<template>
  <div>
    <div class="title-academic">{{'Datos de condiciones de vida'}}</div>
    <div class="row content-form">
      <div class="col-md-3">
        <div class="question-principal">{{'Usted es jefe de hogar?'}}</div>
        <q-radio color="secondary" v-model="jefeDeHogar" val="si" label="Si"></q-radio>
        <q-radio color="secondary" v-model="jefeDeHogar" val="no" label="No"></q-radio>
      </div>
      <div class="col-md-3">
        <div class="question-principal">{{'Usted o su familia poseen seguro médico?'}}</div>
        <q-radio color="secondary" v-model="seguroMedico" val="si" label="Si"></q-radio>
        <q-radio color="secondary" v-model="seguroMedico" val="no" label="No"></q-radio>
      </div>
      <div class="col-md-3">
        <div class="question-principal">{{'Tiene hijos?'}}</div>
        <q-radio color="secondary" v-model="hijos" val="si" label="Si"></q-radio>
        <q-radio color="secondary" v-model="hijos" val="no" label="No"></q-radio>
      </div>
    </div>


    <div class="title-academic">{{'Familia'}}</div>
    <div class="row content-form">
      <div class="col-md-3">
        <div class="question-principal">{{'Cuántos hijos usted tiene?'}}</div>
        <q-input type="number" color="secondary" v-model="numeroHijos"></q-input>
      </div>
      <div class="col-md-3">
        <div class="question-principal">{{'Tiene hijos mayores a tres años y menores de 18?'}}</div>
        <q-radio color="secondary" v-model="hijosMenores" val="si" label="Si"></q-radio>
        <q-radio color="secondary" v-model="hijosMenores" val="no" label="No"></q-radio>
      </div>
      <div class="col-md-3">
        <div class="question-principal">{{'Sus hijos asisten a una institución educativa?'}}</div>
        <q-radio color="secondary" v-model="asistenciaEducacion" val="si" label="Si"></q-radio>
        <q-radio color="secondary" v-model="asistenciaEducacion" val="no" label="No"></q-radio>
      </div>
    </div>

    <div class="title-academic">{{'Hogar'}}</div>
    <div class="row content-form">
      <div class="col-md-3">
        <div class="question-principal">{{'Cuántas personas son miembros de su hogar?'}}</div>
        <q-input type="number" color="secondary" v-model="miembrosHogar"></q-input>
      </div>
      <div class="col-md-3">
        <div class="question-principal">{{'Su vivienda es?'}}</div>
        <q-select color="secondary" v-model="tipoVivienda" :options="optionsVivienda" label="Tipo de Vivienda"></q-select>
      </div>
    </div>

    <div>
          <div class="question-academic">{{'Recibe por parte de su patrono o empleador'}}</div>
          <q-option-group
            v-model="beneficios"
            :options="optionsServicios"
            color="green"
            type="checkbox"
          ></q-option-group>
        </div>

  </div>
</template>

<script>

export default{
  data () {
    return {
      trabaja: '',
      optionsVivienda: ['Propia', 'Arrendada'],
      optionsServicios: [{
          label: 'Agua',
          value: 'agua'
        },
        {
          label: 'Luz',
          value: 'luz'
        },
        {
          label: 'Teléfono',
          value: 'telefono'
        },
        {
          label: 'Internet',
          value: 'internet'
        },]
    }
  }
}

</script>
<style lang="stylus">
.title-academic
  background #C0B33F
  width 50%
  padding 1em
  color white
  border-radius 0px 8px 8px 0px
  font-size initial
  margin-bottom 2em
.radio-question
  color rgb(23, 78, 166)
.content-question-academic
  width -webkit-fill-available
  text-align center
.question-academic
  height 4em
  color rgb(23, 78, 166)
.subtitle-estado-laboral
  margin-top 2em
  color #174ea6
  font-weight 600
  margin-bottom 1em
</style>
