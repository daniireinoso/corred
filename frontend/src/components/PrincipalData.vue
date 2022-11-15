<template>
  <div>
    <div class="row content-form">
      <div class="col-md-3">
        <div class="question-principal">{{'En que perfil desea certificarse?'}}</div>
        <q-select color="secondary" v-model="perfil" :options="optionsPerfil" label="Perfil"></q-select>
      </div>
      <div class="col-md-3">
        <div class="question-principal">{{'Ciudad'}}</div>
        <q-input color="secondary" v-model="ciudad" label="Ciudad"></q-input>
      </div>
      <div class="col-md-3">
        <div class="question-principal">{{'Persona que coordina su certificación'}}</div>
        <q-select color="secondary" v-model="coordinador" :options="optionsCoordinador" label="Coordinador"></q-select>
      </div>
    </div>
    <div class="row content-form">
      <div class="col-md-5">
        <div class="question-principal">{{'Primer Nombre'}}</div>
        <q-input color="secondary"  v-model="primerNombre" label="Primer Nombre"></q-input>
      </div>
      <div class="col-md-5">
        <div class="question-principal">{{'Segundo Nombre'}}</div>
        <q-select
        v-model="segundoNombre"
        label="Segundo Nombre"
        use-input
        use-chips
        multiple
        input-debounce="0"
        @new-value="createValue"
        :options="notiene"
        @filter="filterFn"
        color="secondary"
      ></q-select>
      </div>
    </div>
    <div class="row content-form">
      <div class="col-md-5">
        <div class="question-principal">{{'Primer Apellido'}}</div>
        <q-input color="secondary" v-model="primerApellido" label="Primer Apellido"></q-input>
      </div>
      <div class="col-md-5">
        <div class="question-principal">{{'Segundo Apellido'}}</div>
        <q-select
        v-model="segundoApellido"
        label="Segundo Apellido"
        use-input
        use-chips
        multiple
        input-debounce="0"
        @new-value="createValue"
        :options="notiene"
        @filter="filterFn"
        color="secondary"
      ></q-select>
      </div>
    </div>
    <div class="row content-form">
      <div class="col-md-3">
        <div class="question-principal">{{'Edad'}}</div>
        <q-input type="number" color="secondary" v-model="edad" label="Edad"></q-input>
      </div>
      <div class="col-md-3">
        <div class="question-principal">{{'Número de Cédula'}}</div>
        <q-input color="secondary" v-model="cedula" label="Número de Cédula"></q-input>
      </div>
      <div class="col-md-3">
        <div class="question-principal">{{'Nivel Académico'}}</div>
        <q-select color="secondary" v-model="nivelAcademico" :options="nivelOptions" label="Nivel Académico"></q-select>
      </div>
    </div>
  </div>
</template>

<script>

export default{
  data () {
    return {
      optionsPerfil: [
        { value: 'Perfil  1',
          label: 'perfil1'
        },
        { value: 'Perfil  2',
          label: 'perfil2'
        }],
      ciudad: '',
      coordinador: '',
      optionsCoordinador: ['Coordinador 1', 'Coordinador 2'],
      primerApellido: '',
      segundoApellido: '',
      primerNombre: '',
      segundoNombre: '',
      notiene: ['No tengo'],
      edad: 0,
      cedula: '',
      nivelAcademico: '',
      nivelOptions: ['Primaria', 'Secundaria', 'Tecnología', 'Técnico']
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
