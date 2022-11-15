<template>
  <div>
    <div class="title-academic">{{'Primaria'}}</div>
    <div class="content-question-academic">
        <div class="radio-question">{{'¿Tiene usted completa la educación primaria/escuela?'}}</div>
        <div>
          <q-radio color="secondary" v-model="primaria" val="si" label="Si"></q-radio>
          <q-radio color="secondary" v-model="primaria" val="no" label="No"></q-radio>
        </div>
    </div>
    <div v-if="primaria === 'si'" class="row q-mt-lg justify-between">
        <div class="col-md-3">
          <div class="question-academic">{{'Cual es el nombre de la escuela primaria donde estudio?'}}</div>
          <q-input color="secondary" class="col-md-3" v-model="escuela" label="Escuela"></q-input>
        </div>
        <div class="col-md-3">
          <div class="question-academic">{{'País del centro educativo'}}</div>
          <q-input color="secondary" class="col-md-3" v-model="paisEscuela" label="País"></q-input>
        </div>
        <div class="col-md-3">
          <div class="question-academic">{{'Ciudad del centro educativo'}}</div>
          <q-input color="secondary" class="col-md-3" v-model="ciudadEscuela" label="Ciudad"></q-input>
        </div>
    </div>
    <div v-if="primaria === 'si'" class="message-footer">{{'*En caso de ser extranjero mencionar el país y la ciudad correspondiente.'}}</div>


    <div v-if="primaria === 'si'">
      <div class="title-academic">{{'Secundaria'}}</div>
      <div class="content-question-academic">
          <div class="radio-question">{{'¿Tiene culminados sus estudios de colegio?'}}</div>
          <div>
            <q-radio color="secondary" v-model="secundaria" val="si" label="Si"></q-radio>
            <q-radio color="secondary" v-model="secundaria" val="no" label="No"></q-radio>
          </div>
      </div>
      <div v-if="secundaria === 'si'" class="row q-mt-lg justify-between">
          <div class="col-md-5">
            <div class="question-academic">{{'¿Cúal es el nombre del colegio donde estudió?'}}</div>
            <q-input color="secondary" class="col-md-3" v-model="nombreColegio" label="Colegio"></q-input>
          </div>
          <div class="col-md-5">
            <div class="question-academic">{{'País del centro educativo'}}</div>
            <q-input color="secondary" class="col-md-3" v-model="paisColegio" label="País"></q-input>
          </div>
          <div class="col-md-5">
            <div class="question-academic">{{'Ciudad del centro educativo'}}</div>
            <q-input color="secondary" class="col-md-3" v-model="ciudadColegio" label="Ciudad"></q-input>
          </div>
          <div class="col-md-5">
            <div class="question-academic">{{'Título Obtenido'}}</div>
            <q-input color="secondary" class="col-md-3" v-model="tituloColegio" label="Título Obtenido"></q-input>
          </div>
      </div>
      <div v-if="secundaria === 'si'" class="message-footer">{{'*En caso de ser extranjero mencionar el país y la ciudad correspondiente.'}}</div>
      </div>

    <div v-if="secundaria === 'si'">
      <div class="title-academic">{{'Tecnologías, Técnicos y Artesanos'}}</div>
      <div class="content-question-academic">
          <div class="radio-question">{{'¿Tiene usted título de tecnólogo, técnico o artesano?'}}</div>
          <div>
            <q-radio color="secondary" v-model="tecnologia" val="si" label="Si"></q-radio>
            <q-radio color="secondary" v-model="tecnologia" val="no" label="No"></q-radio>
          </div>
      </div>
      <div v-if="tecnologia === 'si'" class="row q-mt-lg justify-between">
          <div class="col-md-5">
            <div class="question-academic">{{'¿Cúal es el nombre del Instituto Educativo donde estudió?'}}</div>
            <q-input color="secondary" class="col-md-3" v-model="instituto" label="Escuela"></q-input>
          </div>
          <div class="col-md-5">
            <div class="question-academic">{{'País del centro educativo'}}</div>
            <q-input color="secondary" class="col-md-3" v-model="paisInstituto" label="País"></q-input>
          </div>
          <div class="col-md-5">
            <div class="question-academic">{{'Ciudad del centro educativo'}}</div>
            <q-input color="secondary" class="col-md-3" v-model="ciudadInstituto" label="Ciudad"></q-input>
          </div>
          <div class="col-md-5">
            <div class="question-academic">{{'Título Obtenido'}}</div>
            <q-input color="secondary" class="col-md-3" v-model="tituloColegio" label="Título Obtenido"></q-input>
          </div>
      </div>
      <div v-if="tecnologia === 'si'" class="message-footer">{{'*En caso de ser extranjero mencionar el país y la ciudad correspondiente.'}}</div>
    </div>

    <div v-if="secundaria === 'si'">
      <div class="title-academic">{{'Universidad'}}</div>
      <div class="content-question-academic">
          <div class="radio-question">{{'¿Ha culminado o esta culminando sus estudios Universitarios?'}}</div>
          <div>
            <q-radio color="secondary" v-model="universidad" val="si" label="Si"></q-radio>
            <q-radio color="secondary" v-model="universidad" val="no" label="No"></q-radio>
            <q-radio color="secondary" v-model="universidad" val="estudiante" label="Estudiante"></q-radio>
          </div>
      </div>
      <div v-if="universidad === 'si' || universidad === 'estudiante'" class="row q-mt-lg justify-between">
          <div class="col-md-5">
            <div class="question-academic">{{'Cual es el nombre de la escuela primaria donde estudio?'}}</div>
            <q-input color="secondary" class="col-md-3" v-model="nombreUniversidad" label="Escuela"></q-input>
          </div>
          <div class="col-md-5">
            <div class="question-academic">{{'País del centro educativo'}}</div>
            <q-input color="secondary" class="col-md-3" v-model="paisUniversidad" label="País"></q-input>
          </div>
          <div class="col-md-5">
            <div class="question-academic">{{'Ciudad del centro educativo'}}</div>
            <q-input color="secondary" class="col-md-3" v-model="ciudadUniversidad" label="Ciudad"></q-input>
          </div>
          <div class="col-md-5">
            <div class="question-academic">{{'Título Obtenido o a Obtener'}}</div>
            <q-input color="secondary" class="col-md-3" v-model="titulodUniversidad" label="Título"></q-input>
          </div>
      </div>
      <div v-if="universidad === 'si' || universidad === 'estudiante'" class="message-footer">{{'*En caso de ser extranjero mencionar el país y la ciudad correspondiente.'}}</div>
    </div>

    <div v-if="universidad === 'si'">
      <div class="title-academic">{{'Cuarto Nivel'}}</div>
      <div class="content-question-academic">
          <div class="radio-question">{{'¿Ha culminado sus estudios de Cuarto Nivel?'}}</div>
          <div>
            <q-radio color="secondary" v-model="cuartoNivel" val="si" label="Si"></q-radio>
            <q-radio color="secondary" v-model="cuartoNivel" val="no" label="No"></q-radio>
          </div>
      </div>
      <div v-if="cuartoNivel === 'si'" class="row q-mt-lg justify-between">
          <div class="col-md-3">
            <div class="question-academic">{{'País del centro educativo'}}</div>
            <q-input color="secondary" class="col-md-3" v-model="paisCuartoNivel" label="País"></q-input>
          </div>
          <div class="col-md-3">
            <div class="question-academic">{{'Ciudad del centro educativo'}}</div>
            <q-input color="secondary" class="col-md-3" v-model="ciudadCuartoNivel" label="Ciudad"></q-input>
          </div>
          <div class="col-md-3">
            <div class="question-academic">{{'Título Obtenido o a Obtener'}}</div>
            <q-input color="secondary" class="col-md-3" v-model="titulodCuartoNivel" label="Título"></q-input>
          </div>
      </div>
      <div v-if="cuartoNivel === 'si'" class="message-footer">{{'*En caso de ser extranjero mencionar el país y la ciudad correspondiente.'}}</div>
    </div>
  </div>
</template>

<script>

export default{
  data () {
    return {
      primaria: '',
      secundaria: '',
      tecnologia: '',
      universidad: '',
      cuartoNivel: ''
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
.message-footer
  margin-top 1em
  color #55C4F4
  margin-bottom 1.5em
</style>
