<template>
  <q-page class="flex flex-top" style="padding: 0 10em">
    <q-card class="my-card">
      <img src="~assets/coored.png">

      <q-card-section style="padding: 2em;">
        <div class="text-h5">FUNDACIÓN COORED FORMULARIO DE CERTIFICACIÓN</div>
        <div class="text-subtitle2" style="color: #174ea6;">{{ description }}</div>
      </q-card-section>
    </q-card>
    <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      animated
    >
      <q-step
        :name="1"
        :done="step > 1"
      >
        <principal-data></principal-data>
      </q-step>

      <q-step
        :name="2"
        :done="step > 2"
      >
        <academic-data></academic-data>
      </q-step>

      <q-step
        :name="3"
        :done="step > 3"
      >
        <discapacidades-data></discapacidades-data>
      </q-step>

      <q-step
        :name="4"
      >
        <personal-data></personal-data>
      </q-step>
      <q-step
        :name="5"
      >
        <experiencia-laboral-data></experiencia-laboral-data>
      </q-step>
      <q-step
        :name="6"
      >
        <estado-laboral></estado-laboral>
      </q-step>
      <q-step
        :name="7"
      >
        <condiciones-vida></condiciones-vida>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn v-if="step > 1" flat color="accent" @click="previous()" label="Back" class="q-ml-sm"></q-btn>
          <q-btn @click="next()" color="accent" :label="step === 7 ? 'Finish' : 'Continue'"></q-btn>
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </q-page>
</template>

<script>
import AcademicData from '../../src/components/AcademicData'
import CondicionesVida from '../components/CondicionesVida'
import DiscapacidadesData from '../components/DiscapacidadesData'
import EstadoLaboral from '../components/EstadoLaboral'
import ExperienciaLaboralData from '../components/ExperienciaLaboralData'
import PersonalData from '../components/PersonalData'
import PrincipalData from '../../src/components/PrincipalData'
export default{
  data() {
    return {
      step: 1,
      description: 'Fundación Cooperación y Respaldo para la Educación COORED, somos una organización regulada por el Ministerio de Educación bajo Acuerdo Ministerial N° 059-06, además estamos reconocidos ante el Ministerio de Trabajo como Organismo Evaluador bajo resolución N° SETEC-REC-RENV-2020-111, todas nuestras certificaciones se visualizan en la SENESCYT.'
    }
  },
  methods: {
    next() {
      this.step = this.step + 1
    },
    previous() {
      this.step = this.step -1
    }
  },
  components: {PrincipalData, AcademicData, DiscapacidadesData, PersonalData, ExperienciaLaboralData, EstadoLaboral, CondicionesVida}
}
</script>
<style lang="stylus">
.my-card
  height fit-content
.q-stepper
  width -webkit-fill-available
  margin-bottom 2em
.q-stepper__header
  display none
.q-stepper__nav
  float right
</style>
