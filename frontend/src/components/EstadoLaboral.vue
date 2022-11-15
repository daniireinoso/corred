<template>
  <div>
    <div class="title-academic">{{'Estado Laboral Actual'}}</div>
    <div class="content-question-academic">
        <div class="radio-question">{{'¿Usted Trabaja?'}}</div>
        <div>
          <q-radio color="secondary" v-model="trabaja" val="si" label="Si"></q-radio>
          <q-radio color="secondary" v-model="trabaja" val="no" label="No"></q-radio>
        </div>
    </div>


    <div v-if="trabaja === 'si'">
      <div class="title-academic">{{'Condiciones Laborales'}}</div>
      <div class="row justify-between">
        <div class="col-md-5">
          <div class="question-academic">{{'Tipo de contrato que posee'}}</div>
          <q-select color="secondary" v-model="tipoContrato" :options="optionsContratos" label="Contrato"></q-select>
        </div>
        <div class="col-md-5">
          <div class="question-academic">{{'Tipo de ocupación'}}</div>
          <q-select color="secondary" v-model="tipoOcupacion" :options="optionsOcupacion" label="Ocupación"></q-select>
        </div>
      </div>
      <div class="row justify-between">
        <div class="col-md-5">
          <div class="question-academic">{{'Indique cuántas horas a la semana trabaja'}}</div>
          <q-input type="number" color="secondary" v-model="horasSemanales"></q-input>
        </div>
        <div class="col-md-5">
          <div class="question-academic">{{'Área o departamento donde trabaja'}}</div>
          <q-select color="secondary" v-model="areaTrabajo" :options="optionsArea" label="Área/Departamento"></q-select>
        </div>
      </div>
      <div class="subtitle-estado-laboral">{{'Ingresos mensuales aproximados'}}</div>
      <div class="row justify-between">
        <div class="col-md-6">
          <div class="question-academic">{{'Seleccione el valor promedio de sus ingreos mensuales'}}</div>
          <q-select color="secondary" v-model="ingresosMensuales" :options="optionsIngresos" label="Ingresos Mensuales"></q-select>
        </div>
      </div>
      <div class="subtitle-estado-laboral">{{'Condiciones Laborales'}}</div>
      <div class="row justify-between">
        <div class="col-md-12">
          <div class="question-academic">{{'Recibe por parte de su patrono o empleador'}}</div>
          <q-option-group
            v-model="beneficios"
            :options="optionsBeneficios"
            color="green"
            type="checkbox"
          ></q-option-group>
        </div>
      </div>
      <div class="row content-form">
      <div class="col-md-3">
        <div class="question-principal">{{'Ha tenido usted algún cambio de puesto o ascenso'}}</div>
        <q-radio color="secondary" v-model="ascenso" val="si" label="Si"></q-radio>
        <q-radio color="secondary" v-model="ascenso" val="no" label="No"></q-radio>
      </div>
      <div class="col-md-3">
        <div class="question-principal">{{'Está satisfecho con su empleo actual'}}</div>
        <q-radio color="secondary" v-model="satisfaccionEmplpeo" val="si" label="Si"></q-radio>
        <q-radio color="secondary" v-model="satisfaccionEmplpeo" val="no" label="No"></q-radio>
      </div>
      <div class="col-md-3">
        <div class="question-principal">{{'Se siente agotado debido a la carga de trabajo'}}</div>
        <q-radio color="secondary" v-model="agotadoTrabajo" val="si" label="Si"></q-radio>
        <q-radio color="secondary" v-model="agotadoTrabajo" val="no" label="No"></q-radio>
      </div>
    </div>
    <div class="row content-form">
      <div class="col-md-5">
        <div class="question-principal">{{'Sus compañeros respetan su trabajo y sus capacidades'}}</div>
        <q-radio color="secondary" v-model="respetoCompaneros" val="si" label="Si"></q-radio>
        <q-radio color="secondary" v-model="respetoCompaneros" val="no" label="No"></q-radio>
      </div>
      <div class="col-md-5">
        <div class="question-principal">{{'Sus jefes reconocen la calidad de su trabajo'}}</div>
        <q-radio color="secondary" v-model="reconocenCalidad" val="si" label="Si"></q-radio>
        <q-radio color="secondary" v-model="reconocenCalidad" val="no" label="No"></q-radio>
      </div>
    </div>
    <div class="row content-form">
      <div class="col-md-5">
        <div class="question-principal">{{'En su trabajo existen riesgos laborales'}}</div>
        <q-radio color="secondary" v-model="riesgosLaborales" val="si" label="Si"></q-radio>
        <q-radio color="secondary" v-model="riesgosLaborales" val="no" label="No"></q-radio>
      </div>
      <div class="col-md-5">
        <div class="question-principal">{{'Desearía cambiar de trabajo'}}</div>
        <q-radio color="secondary" v-model="cambiarTrabajo" val="si" label="Si"></q-radio>
        <q-radio color="secondary" v-model="cambiarTrabajo" val="no" label="No"></q-radio>
      </div>
    </div>
    </div>

  </div>
</template>

<script>

export default{
  data () {
    return {
      trabaja: '',
      optionsContratos: ['Ocasional/Temporal', 'Contrato fijo o de planta/Permanente',
      'Por nombramiento', 'Por Horas', 'Por jornada'],
      optionsOcupacion: ['Empleado/Obrero de gobierno/Estado', 'Empleado/Obrero privado', 'Cuenta Propia',
      'Trabajador de hogar no remunerado', 'Emplead@ doméstic@'],
      optionsArea: ['Administrativa', 'Financiera', 'Talento Humano', 'Productiva'],
      optionsIngresos:['Menor a 100', '100.01 a 200.00', '200.01 a 300.00', '300.01 a 400.00',
      '400.01 a 500.00', '500.01 a 600.00', '600.01 a 700.00', '700.01 a 800.00', '800.01 a 900.00', '900.01 a 1000.00',
      '1000.01 a 1500.00', '1500.01 a 2000.00', '2000.01 a 2500.00', 'Mayor a 4000.01'],
      optionsBeneficios: [{
          label: 'Alimentación',
          value: 'alimentacion'
        },
        {
          label: 'Vivienda',
          value: 'vivenda'
        },
        {
          label: 'Transporte',
          value: 'transporte'
        },
        {
          label: 'Vacaciones',
          value: 'vacaciones'
        },
        {
          label: 'Ropa de Trabajo',
          value: 'ropa de trabajo'
        },
        {
          label: 'Seguro Social',
          value: 'seguro social'
        },
        {
          label: 'Seguro Médico',
          value: 'seguro medico'
        },
        {
          label: 'Guardería',
          value: 'guarderia'
        },
        {
          label: 'Curso de Capacitación',
          value: 'curso de capacitacion'
        },
        {
          label: '13vo Sueldo',
          value: '13vo sueldo'
        },
        {
          label: '14vo Sueldo',
          value: '14vo sueldo'
        },
        {
          label: 'Bonificaciones por desempeño',
          value: 'bonificaciones'
        },
      ]
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
