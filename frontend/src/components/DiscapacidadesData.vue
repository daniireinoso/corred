<template>
  <div>
    <div class="row content-form">
      <div class="title-academic">{{'Discapacidades'}}</div>
      <div class="content-question-academic">
        <div class="radio-question">{{'Tiene algun tipo de discapacidad'}}</div>
        <div>
          <q-radio color="secondary" v-model="discapacidad" val="si" label="Si"></q-radio>
          <q-radio color="secondary" v-model="discapacidad" val="no" label="No"></q-radio>
        </div>
    </div>
    <div class="content-question-academic">
        <div class="radio-question">{{'Seleccione el tipo'}}</div>
        <div>
          <q-radio color="secondary" v-model="tipo" val="auditiva" label="Auditiva"></q-radio>
          <q-radio color="secondary" v-model="tipo" val="fisica" label="Física"></q-radio>
          <q-radio color="secondary" v-model="tipo" val="intelectual" label="Intelectual"></q-radio>
          <q-radio color="secondary" v-model="tipo" val="lenguaje" label="Lenguaje"></q-radio>
          <q-radio color="secondary" v-model="tipo" val="psicologico" label="Psicológico"></q-radio>
          <q-radio color="secondary" v-model="tipo" val="visual" label="Visual"></q-radio>

        </div>
    </div>
    </div>
  </div>
</template>

<script>

export default{
  fata () {
    return {
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
