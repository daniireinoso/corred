<template>
  <div>
    <div class="row content-form">
      <div class="col-md-3">
        <div class="question-principal">{{'Correo electrónico'}}</div>
        <q-input color="secondary" v-model="correo" label="Correo"></q-input>
      </div>
      <div class="col-md-3">
        <div class="question-principal">{{'Auto identificación'}}</div>
        <q-select color="secondary" v-model="autoidentificación" :options="optionsIdentificacion" label="Auto identificación"></q-select>
      </div>
      <div class="col-md-3">
        <div class="question-principal">{{'Posee calificación artesanal'}}</div>
        <div>
          <q-radio color="secondary" v-model="artesanal" val="si" label="Si"></q-radio>
          <q-radio color="secondary" v-model="artesanal" val="no" label="No"></q-radio>
        </div>
      </div>
    </div>
    <div class="row content-form">
      <div class="col-md-5">
        <div class="question-principal">{{'Provincia del domicilio'}}</div>
        <q-input color="secondary" v-model="provincia" label="Provincia"></q-input>
      </div>
      <div class="col-md-5">
        <div class="question-principal">{{'Cantón'}}</div>
        <q-input color="secondary" v-model="canton" label="Cantón"></q-input>
      </div>
    </div>
    <div class="row content-form">
      <div class="col-md-5">
        <div class="question-principal">{{'Parroquia del domicilio'}}</div>
        <q-input color="secondary" v-model="parroquia" label="Parroquia"></q-input>
      </div>
      <div class="col-md-5">
        <div class="question-principal">{{'Dirección del domicilio'}}</div>
        <q-input color="secondary" v-model="direccion" label="Dirección"></q-input>
      </div>
    </div>
    <div class="row content-form">
      <div class="col-md-5">
        <div class="question-principal">{{'Teléfono del domicilio'}}</div>
        <q-input color="secondary" v-model="telefono" label="Teléfono"></q-input>
      </div>
      <div class="col-md-5">
        <div class="question-principal">{{'Celular'}}</div>
        <q-input color="secondary" v-model="celular" label="Celular"></q-input>
      </div>
    </div>
    <div class="row content-form">
      <div class="col-md-5">
        <div class="question-principal">{{'Desea formar parte de la red Socio Empleo'}}</div>
        <q-radio color="secondary" v-model="rse" val="si" label="Si"></q-radio>
        <q-radio color="secondary" v-model="rse" val="no" label="No"></q-radio>
      </div>
      <div class="col-md-5">
        <div class="question-principal">{{'Posee experiencia laboral'}}</div>
        <q-radio color="secondary" v-model="experiencia" val="si" label="Si"></q-radio>
        <q-radio color="secondary" v-model="experiencia" val="no" label="No"></q-radio>
      </div>
    </div>

    <div v-if="experiencia === 'si'">
      <div class="title-academic">{{'Experiencia Laboral'}}</div>
      <div class="row content-form">
        <div class="col-md-3">
          <div class="question-principal">{{'Nombre de la empresa'}}</div>
          <q-input color="secondary" v-model="nombreEmpresa" label="Empresa"></q-input>
        </div>
        <div class="col-md-3">
          <div class="question-principal">{{'Fecha Aproximada de Ingreso'}}</div>
          <q-input type="date" color="secondary" v-model="fechaIngreso"></q-input>
        </div>
        <div class="col-md-3">
          <div class="question-principal">{{'Fecha Aproximada de Salida o Fecha Actual'}}</div>
          <q-input type="date" color="secondary" v-model="fechaSalida"></q-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default{
  data () {
    return {
      optionsIdentificacion: ['Blanco', 'Mestizo', 'Montubio', 'Indígena', 'Afroecuatoriano'],
      artesanal: '',
      rse: '',
      experiencia: '',
      telefono: '',
      celular: '',
      parroquia: '',
      direccion: '',
      provincia: '',
      canton: '',
      correo: '',
      autoidentificación: ''
    }
  }
}

</script>
<style lang="stylus">
.content-form
  justify-content space-between
  margin-bottom 4em
.question-principal
  height: 2em
  color rgb(23, 78, 166)
</style>
