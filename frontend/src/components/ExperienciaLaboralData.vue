<template>
  <div>
    <div class="title-academic">{{'Experiencia Laboral'}}</div>
    <div class="subtitle-laboral">{{'Según el perfil que desea certificarse '}}</div>
    <div class="row content-form">
      <div class="col-md-5">
        <div class="question-principal">{{'Nombre de la empresa'}}</div>
        <q-input color="secondary" v-model="nombreEmpresa" label="Empresa"></q-input>
      </div>
      <div class="col-md-5">
        <div class="question-principal">{{'Actividad Desarrollada'}}</div>
        <q-input color="secondary" v-model="actividadDesarrollada" label="Actividad Desarrollada"></q-input>
      </div>
    </div>
    <div class="row content-form">
      <div class="col-md-3">
        <div class="question-principal">{{'Fecha Aproximada de Ingreso'}}</div>
        <q-input type="date" color="secondary" v-model="fechaIngreso"></q-input>
      </div>
      <div class="col-md-3">
        <div class="question-principal">{{'Fecha Aproximada de Salida o Fecha Actua'}}</div>
        <q-input type="date" color="secondary" v-model="fechaSalida"></q-input>
      </div>
      <div class="col-md-3">
        <div class="question-principal">{{'Tiempo en meses'}}</div>
        <q-input type="number" color="secondary" v-model="tiempoLaboral" label="Meses de Trabajo"></q-input>
      </div>
    </div>
    <div class="row content-form">
      <div class="col-md-5">
        <div class="question-principal">{{'Ubicación de la Empresa'}}</div>
        <q-input color="secondary" v-model="ubicacionEmpresa" label="Ubicación"></q-input>
      </div>
      <div class="col-md-5">
        <div class="question-principal">{{'Último Trabajo?'}}</div>
        <q-radio color="secondary" v-model="ultimoTrabajo" val="si" label="Si"></q-radio>
        <q-radio color="secondary" v-model="ultimoTrabajo" val="no" label="No"></q-radio>
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
.title-academic
  background #C0B33F
  width 50%
  padding 1em
  color white
  border-radius 0px 8px 8px 0px
  font-size initial
  margin-bottom 2em
.subtitle-laboral
  margin-bottom 2em
  margin-top -1em
  font-weight 600
  color #174ea6
</style>
